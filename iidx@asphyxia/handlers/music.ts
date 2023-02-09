export const getrank: EamusePluginRoute = (req, data, send) => {
  const cltype = parseInt($(data).attr().cltype);

  return send.object({
    style: K.ATTR({ type: String(cltype) }),
  });
};
