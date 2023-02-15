import {
  getProfile,
  newProfile,
  ProfileDoc,
  putProfile,
} from '../models/profile';
import { Status, versionFromModel } from '../utils/constants';
import { ID } from '../utils/id';
import { templatesFromVersion } from '../utils/templatesImport';

export const common: EamusePluginRoute = async (req, data, send) => {
  const version = versionFromModel(req.model);
  if (version == null) return send.status(Status.NOT_ALLOWED);

  const templates = await templatesFromVersion(version);
  if (templates == null) return send.status(Status.NOT_ALLOWED);

  return send.object(templates.common());
};

export const oldget: EamusePluginRoute = async (req, data, send) => {
  const refId = $(data).attr().rid;
  const profileCount = await DB.Count<ProfileDoc>(refId, {
    collection: 'profile',
  });

  return send.object(K.ATTR({ status: profileCount > 0 ? '0' : '1' }));
};

export const get: EamusePluginRoute = async (req, data, send) => {
  console.log(
    U.toXML({ call: K.ATTR({ model: req.model }, { [req.module]: data }) })
  );
  const version = versionFromModel(req.model);
  if (version == null) return send.status(Status.NOT_ALLOWED);

  const refId = $(data).attr().rid;
  const profile = await getProfile(version, refId);
  if (profile == null) return send.status(Status.NOT_ALLOWED);

  const templates = await templatesFromVersion(version);
  if (templates == null) return send.status(Status.NOT_ALLOWED);

  return send.object(templates.formatProfile(profile));
};

export const reg: EamusePluginRoute = async (req, data, send) => {
  const version = versionFromModel(req.model);
  if (version == null) return send.status(Status.NOT_ALLOWED);

  const refId = $(data).attr().rid;
  const name = $(data).attr().name;
  const pid = parseInt($(data).attr().pid);
  const profile = await newProfile(version, refId, name, pid);
  if (profile == null) return send.status(Status.NOT_ALLOWED);

  return send.object(
    K.ATTR({
      id: String(profile.extId),
      id_str: String(ID.foramtExtId(profile.extId)),
    })
  );
};

export const visit: EamusePluginRoute = async (req, data, send) => {
  return send.object(
    K.ATTR({ anum: '0', snum: '0', pnum: '0', aflg: '0', sflg: '0', pflg: '0' })
  );
};

export const save: EamusePluginRoute = async (req, data, send) => {
  console.log(
    U.toXML({ call: K.ATTR({ model: req.model }, { [req.module]: data }) })
  );

  const version = versionFromModel(req.model);
  if (version == null) return send.status(Status.NOT_ALLOWED);

  const extId = parseInt($(data).attr().iidxid);
  await putProfile(version, data, extId);

  return send.success();
};
