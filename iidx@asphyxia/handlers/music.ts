import { ProfileDoc } from '../models/profile';
import { getScores, updateScore } from '../models/score';
import {
  gameToDBChartType,
  gameToDBClearStatus,
  Status,
  versionFromModel,
} from '../utils/constants';
import { templatesFromVersion } from '../utils/templatesImport';

export const getrank: EamusePluginRoute = async (req, data, send) => {
  console.log(
    U.toXML({ call: K.ATTR({ model: req.model }, { [req.module]: data }) })
  );

  const version = versionFromModel(req.model);
  if (version == null) return send.status(Status.NOT_ALLOWED);

  const templates = await templatesFromVersion(version);
  if (templates == null) return send.status(Status.NOT_ALLOWED);

  const extId = parseInt($(data).attr().iidxid);
  const cltype = parseInt($(data).attr().cltype);

  const refId = (
    await DB.FindOne<ProfileDoc>(null, {
      collection: 'profile',
      version,
    })
  ).__refid;

  const m = [];
  if (extId != null) {
    const scores = await getScores(refId);

    const scoredata = templates.makeScoreStruct(scores, cltype, -1);
    scoredata.forEach(s => m.push(K.ARRAY('s16', s)));
  }

  return send.object({
    style: K.ATTR({ type: String(cltype) }),
    m,
  });
};

export const reg: EamusePluginRoute = async (req, data, send) => {
  console.log(
    U.toXML({ call: K.ATTR({ model: req.model }, { [req.module]: data }) })
  );

  const version = versionFromModel(req.model);
  if (version == null) return send.status(Status.NOT_ALLOWED);

  const extId = parseInt($(data).attr().iidxid);
  const musicId = parseInt($(data).attr().mid);
  const chartId = gameToDBChartType(version, parseInt($(data).attr().clid));

  const clearStatus = gameToDBClearStatus(
    version,
    parseInt($(data).attr().cflg)
  );
  const pgreats = parseInt($(data).attr().pgnum);
  const greats = parseInt($(data).attr().gnum);
  const missCount = parseInt($(data).attr().mnum);
  const ghost = $(data).buffer('ghost');

  await updateScore(
    extId,
    musicId,
    chartId,
    clearStatus,
    pgreats,
    greats,
    missCount,
    ghost
  );

  return send.object(
    K.ATTR({
      mid: String(musicId),
      clid: String(parseInt($(data).attr().clid)),
    })
  );
};
