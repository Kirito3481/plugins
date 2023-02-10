import { Version } from '../utils/constants';
import { templatesFromVersion } from '../utils/templatesImport';
import { ValidatedMap } from '../utils/validatedMap';

export interface Profile {
  collection: 'profile';

  version: number;
  extId: number;
  data?: any;
}

export const putProfile = async (
  version: number,
  data: any,
  extId?: number
) => {
  if (extId == null) return;

  const oldProfile = await getProfile(version, undefined, extId);
  const refId = oldProfile.getStr('refid');
  const template = await templatesFromVersion(version);
  const newProfile = template.unformatProfile(data, oldProfile);
  if (newProfile != null) {
    newProfile.delete('refid');
    newProfile.delete('extid');

    const dataObj = {};
    newProfile.forEach((value, key) => (dataObj[key] = value));

    await DB.Upsert<Profile>(
      refId,
      { collection: 'profile', version, extId },
      { $set: { data: dataObj } }
    );
  }
};

export const getProfile = async (
  version: number,
  refId?: string,
  extId?: number
) => {
  const profile = await DB.FindOne<Profile>(refId != null ? refId : null, {
    collection: 'profile',
    version,
    ...(extId != null && { extId }),
  });
  if (profile == null) return null;

  return new ValidatedMap({
    refid: profile.__refid,
    extid: profile.extId,
    ...profile.data,
  });
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

  let newProfile = await DB.FindOne<Profile>(refId, {
    collection: 'profile',
    version,
  });

  if (newProfile == null) {
    const newMap = new ValidatedMap({ name, pid });
    const dataObj = {};
    newMap.forEach((value, key) => (dataObj[key] = value));

    newProfile = await DB.Insert<Profile>(refId, {
      collection: 'profile',
      version,
      extId,
      data: dataObj,
    });
  }
  if (newProfile == null) {
    console.error('Profile creation failed.');
    return null;
  }

  return new ValidatedMap({
    refid: newProfile.__refid,
    extid: extId,
    ...newProfile.data,
  });
};
