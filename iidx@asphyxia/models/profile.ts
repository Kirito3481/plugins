import { templatesFromVersion } from '../utils/templatesImport';
import { ValidatedMap } from '../utils/validatedMap';

export interface ProfileDoc {
  collection: 'profile';

  version: number;
  extId: number;

  data: any;
}

export class Profile extends ValidatedMap {
  version;
  refId;
  extId;
  constructor(version: number, refId: string, extId: number, initValues = {}) {
    super(initValues);
    this.version = version;
    this.refId = refId;
    this.extId = extId;
  }
}

export const getProfile = async (
  version: number,
  refId?: string,
  extId?: number
) => {
  if (refId == null && extId == null) return null;
  let profile = await DB.FindOne<ProfileDoc>(refId != null ? refId : null, {
    collection: 'profile',
    version,
    ...(extId != null && { extId }),
  });
  if (profile == null) {
    if (refId == null) return null;

    const count = await DB.Count<ProfileDoc>(refId, { collection: 'profile' });
    if (count > 0) {
      const profiles = await DB.Find<ProfileDoc>(refId, {
        collection: 'profile',
      });
      const profile = profiles.sort().reverse()[0];

      return newProfile(version, refId, profile.data.name, profile.data.pid);
    } else {
      return null;
    }
  }

  return new Profile(
    profile.version,
    profile.__refid,
    profile.extId,
    profile.data
  );
};

export const putProfile = async (
  version: number,
  data: any,
  extId?: number
) => {
  if (extId == null) return;

  const oldProfile = await getProfile(version, undefined, extId);
  if (oldProfile == null) return;
  const template = await templatesFromVersion(version);
  const newProfile = template.unformatProfile(data, oldProfile);
  if (newProfile != null) {
    const refId = oldProfile.refId;
    newProfile.delete('refid');
    newProfile.delete('extid');

    const dataObj = {};
    newProfile.forEach((value, key) => {
      if (value instanceof Map) {
        const mapObj = {};
        value.forEach((v, k) => {
          mapObj[k] = v;
        });
        value = mapObj;
      }
      dataObj[key] = value;
    });

    await DB.Upsert<ProfileDoc>(
      refId,
      { collection: 'profile', extId },
      { $set: { data: dataObj } }
    );
  }
};

export const newProfile = async (
  version: number,
  refId: string,
  name?: string,
  pid?: number
) => {
  if (name == null) name = 'IIDX';
  if (pid == null) pid = 57;

  let extId: number;
  while (true) {
    extId = Math.floor(10000000 + Math.random() * 89999999);
    const check = await DB.Find(refId, { collection: 'profile', extId });
    if (check.length === 0) break;
  }

  let newProfile = await DB.FindOne<ProfileDoc>(refId, {
    collection: 'profile',
    version,
  });

  if (newProfile == null) {
    newProfile = await DB.Insert<ProfileDoc>(refId, {
      collection: 'profile',
      extId,
      version,
      data: { name, pid },
    });
  }
  if (newProfile == null) {
    console.error('Profile creation failed.');
    return null;
  }

  return new Profile(version, newProfile.__refid, newProfile.extId, {
    name,
    pid,
  });
};
