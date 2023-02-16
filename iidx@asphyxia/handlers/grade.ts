import { getProfile, ProfileDoc } from '../models/profile';
import { CLTYPE, Status, versionFromModel } from '../utils/constants';

enum Rank {}

export const raised: EamusePluginRoute = async (req, data, send) => {
  console.log(
    U.toXML({ call: K.ATTR({ model: req.model }, { [req.module]: data }) })
  );

  const version = versionFromModel(req.model);
  if (version == null) return send.status(Status.NOT_ALLOWED);

  const extId = parseInt($(data).attr().iidxid);
  const cltype = parseInt($(data).attr().gtype);
  const rank = parseInt($(data).attr().gid);

  const profile = await getProfile(version, undefined, extId);
  if (profile) {
    const percent = parseInt($(data).attr().achi);
    const clearedStageNum = parseInt($(data).attr().cstage);
    const cleared = clearedStageNum === 4;

    const gradeMap = profile.getMap('grade');
  }

  return send.object(K.ATTR({ pnum: String(0) }));
};
