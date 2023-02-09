import { Version } from '../utils/constants';
import { ValidatedMap } from '../utils/validatedMap';

export interface Profile {
  collection: 'profile';

  version: number;

  extId: number;

  data?: any;
}

export const getProfile = async (version: number, refId: string) => {
  const profile = await DB.FindOne<Profile>(refId, {
    collection: 'profile',
    version,
  });
  if (profile == null) return null;

  if (profile.version === Version.HEROIC_VERSE) {
    const hv = import('../templates/heroicverse');
    return (await hv).formatProfile(
      new ValidatedMap({ extid: profile.extId, ...profile.data })
    );
  } else {
    return null;
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

  return new ValidatedMap({ extid: extId, ...newProfile.data });
};
