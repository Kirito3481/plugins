import { Profile } from '../models/profile';

export const oldget: EamusePluginRoute = async (req, data, send) => {
  const refId = $(data).attr().rid;
  const profile = await DB.Find<Profile>(refId, { collection: 'profile' });

  // TODO 이전 버전의 프로필이 있으면 "1"로 반환 할 수 있게 해야됨

  return send.object(K.ATTR({ status: profile.length > 0 ? '0' : '1' }));
};

export const reg: EamusePluginRoute = async (req, data, send) => {
  return send.deny();
};
