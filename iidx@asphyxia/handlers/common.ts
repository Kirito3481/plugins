import {ShopConvention, ShopData} from '../models/shopData';

export const common: EPR = (info, data, send) => {
  return send.object(K.ATTR({ expire: '3' }, {
    movie_agreement: K.ATTR({ version: '1' }),
    license: {},
    file_recovery: K.ATTR({ url: 'http://localhost:8083/' }),
    movie_upload: K.ATTR({ url: 'http://localhost:8083/' }),
    // cm_movie_info: {},
    escape_package_info: {},
    expert: K.ATTR({ phase: '1' }),
    expert_random_secret: K.ATTR({ phase: '1' }),
    boss: K.ATTR({ phase: '1' }),
    vip_pass_black: {},
    eisei: K.ATTR({ open: '1' }),
    deller_bonus: K.ATTR({ open: '0' }),
    newsong_another: K.ATTR({ open: '1' }),
    pcb_check: K.ATTR({ flg: '1' }),
    expert_secret_full_open: {},
    eaorder_phase: K.ATTR({ phase: '3' }),
    common_evnet: K.ATTR({ flg: '1' }),
    system_voice_phase: K.ATTR({ phase: '1' }),
    extra_boss_event: K.ATTR({ phase: '1' }),
    event1_phase: K.ATTR({ phase: '1' }),
    premium_area_news: K.ATTR({ open: '1' }),
    premium_area_qpro: K.ATTR({ open: '1' }),
    play_video: {},
    display_asio_logo: {}
  }));
};

export const gameSystem: EPR = (info, data, send) => {
  return send.object({
    arena_schedule: {
      phase: K.ITEM('u8', 1),
      start: K.ITEM('u32', 0),
      end: K.ITEM('u32', 0),
    },

    arena_reward: [
      {
        index: K.ITEM('s32', 0),
        cube_num: K.ITEM('s32', 50),
        kind: K.ITEM('s32', 1),
        value: K.ITEM('str', '16047')
      },
      {
        index: K.ITEM('s32', 0),
        cube_num: K.ITEM('s32', 100),
        kind: K.ITEM('s32', 1),
        value: K.ITEM('str', '11035')
      },
      {
        index: K.ITEM('s32', 0),
        cube_num: K.ITEM('s32', 150),
        kind: K.ITEM('s32', 1),
        value: K.ITEM('str', '6004')
      },
      {
        index: K.ITEM('s32', 0),
        cube_num: K.ITEM('s32', 200),
        kind: K.ITEM('s32', 1),
        value: K.ITEM('str', '13026')
      }
    ],

    arena_music_difficult: [],
    arena_cpu_define: [],
    maching_class_range: [],
    arena_force_music: [],
  });
};

export const getShopName: EPR = async (info, data, send) => {
  let shopData = await DB.FindOne<ShopData>({ collection: 'shopdata' });

  if (!shopData) {
    shopData = {
      collection: 'shopdata',
      shopName: '未設定',
      shopArea: 0,
      shopCloseTimeEnabled: false,
      shopCloseTimeHour: 0,
      shopCloseTimeMinute: 0,
      countryCode: '',
      regionCode: '',
      latitude: 0,
      longitude: 0
    };
  }

  return send.object(K.ATTR({
    opname: shopData.shopName,
    pid: String(shopData.shopArea),
    cls_opt: String(shopData.shopCloseTimeEnabled ? 1 : 0),
    hr: String(shopData.shopCloseTimeHour),
    mi: String(shopData.shopCloseTimeMinute)
  }));
};

export const saveShopName: EPR = async (info, data, send) => {
  const { opname, pid, cls_opt, hr, mnt, ccode, rcode, latitude, longitude } = $(data).attr();

  await DB.Upsert<ShopData>({ collection: 'shopdata' }, {
    collection: 'shopdata',
    shopName: opname,
    shopArea: parseInt(pid),
    shopCloseTimeEnabled: Boolean(parseInt(cls_opt)),
    shopCloseTimeHour: !isNaN(parseInt(hr)) ? parseInt(hr) : 0,
    shopCloseTimeMinute: !isNaN(parseInt(mnt)) ? parseInt(hr) : 0,
    countryCode: ccode,
    regionCode: rcode,
    latitude: parseInt(latitude),
    longitude: parseInt(longitude)
  });

  return send.success();
};

export const getConvention: EPR = async (info, data, send) => {
  const convention = await DB.FindOne<ShopConvention>({ collection: 'shopconvention' });

  return send.object(K.ATTR({
    music_0: String(convention.music0 | 2000),
    music_1: String(convention.music1 | 1008),
    music_2: String(convention.music2 | 4005),
    music_3: String(convention.music3 | 1000),
    start_time: String(convention.startTime || 1601510400),
    end_time: String(convention.endTime || 1601510400)
  }, {
    valid: K.ITEM('bool', convention.valid || false)
  }));
};

export const setConvention: EPR = async (info, data, send) => {
  const test = await DB.Upsert<ShopConvention>({ collection: 'shopconvention' }, {
    collection: 'shopconvention',

    music0: $(data).number('music_0'),
    music1: $(data).number('music_1'),
    music2: $(data).number('music_2'),
    music3: $(data).number('music_3'),
    startTime: $(data).content('start_time')[0],
    endTime: $(data).content('end_time')[0],
    valid: $(data).bool('valid')
  });
  console.dir(test, { depth: null });
  return send.success();
};

export const getRanker: EPR = (info, data, send) => {
  const chart = parseInt($(data).attr().clid);

  return send.success();
};

export const streamingCommon: EPR = (info, data, send) => {
  return send.object(K.ATTR({ expire: '3' }, {
    cm_info: {}
  }));
};
