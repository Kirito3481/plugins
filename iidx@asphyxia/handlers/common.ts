export const shop_getname: EamusePluginRoute = (_, __, send) =>
  send.object(
    K.ATTR({
      opname: `Asphyxia CORE ${CORE_VERSION}`,
      pid: '57',
      cls_opt: '0',
      hr: '0',
      mi: '0',
    })
  );

export const shop_sendescapepackageinfo: EamusePluginRoute = (_, __, send) =>
  send.object(K.ATTR({ expire: String((Date.now() + 86400 * 365) * 1000) }));

export const gameSystem_systemInfo: EamusePluginRoute = (_, __, send) =>
  send.object({
    arena_schedule: {
      phase: K.ITEM('u8', 0),
      start: K.ITEM('u32', 0),
      end: K.ITEM('u32', 0),
    },
    arena_reward: [],
    arena_music_difficult: [],
    arena_cpu_define: [],
    maching_class_range: [],
    arena_force_music: [],
  });
