import { getProfile, newProfile, Profile } from '../models/profile';
import { Status, versionFromModel } from '../utils/constants';
import { ID } from '../utils/id';

export const oldget: EamusePluginRoute = async (req, data, send) => {
  const refId = $(data).attr().rid;
  const profile = await DB.Find<Profile>(refId, { collection: 'profile' });

  // TODO 이전 버전의 프로필이 있으면 "1"로 반환 할 수 있게 해야됨

  return send.object(K.ATTR({ status: profile.length > 0 ? '0' : '1' }));
};

export const get: EamusePluginRoute = async (req, data, send) => {
  const version = versionFromModel(req.model);
  if (version == null) return send.status(Status.NOT_ALLOWED);

  const refId = $(data).attr().rid;
  const profile = await getProfile(version, refId);
  if (profile == null) return send.status(Status.NOT_ALLOWED);

  return send.object(profile);
};

export const reg: EamusePluginRoute = async (req, data, send) => {
  const version = versionFromModel(req.model);
  if (version == null) return send.status(Status.NOT_ALLOWED);

  const refId = $(data).attr().rid;
  const profile = await newProfile(version, refId);
  if (profile == null) return send.status(Status.NOT_ALLOWED);

  return send.object(
    K.ATTR({
      id: String(profile.getInt('extid')),
      id_str: String(ID.foramtExtId(profile.getInt('extid'))),
    })
  );
};

export const visit: EamusePluginRoute = async (req, data, send) => {
  return send.object(
    K.ATTR({ anum: '0', snum: '0', pnum: '0', aflg: '0', sflg: '0', pflg: '0' })
  );
};
