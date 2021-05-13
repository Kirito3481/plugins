import {Profile} from '../models/profile';
import {getVersion, IIDXID_TO_STR, IncrementInt} from '../utils';

export const reg: EPR = async (info, data, send) => {
  const { rid, name, pid } = $(data).attr();

  const genIIDXid = _.random(1, 99999999);

  try {
    const newProfile = await DB.Upsert<Profile>(rid, { collection: 'profile' }, {
      collection: 'profile',

      iidxId: genIIDXid,
      name,
      pid: parseInt(pid)
    });

    return send.object(K.ATTR({
      id: String(newProfile.docs[0].iidxId),
      id_str: IIDXID_TO_STR(newProfile.docs[0].iidxId)
    }));
  } catch {
    return send.deny();
  }
};

export const get: EPR = async (info, data, send) => {
  const { rid } = $(data).attr();
  if (!rid) return send.deny();

  const profile = await DB.FindOne<Profile>(rid, { collection: 'profile' });

  if (!profile) {
    return send.status(1);
  }

  if (!profile.pcdata) profile.pcdata = {
    singlePlayNum: '0',
    doublePlayNum: '0',
    singleDJPoints: '0',
    doubleDJPoints: '0',
    mode: '0',
    pmode: '0',
    ngrade: '0',
    rtype: '0',
    sp_opt: '0',
    dp_opt: '0',
    dp_opt2: '0',
    gpos: '0',
    s_sorttype: '0',
    d_sorttype: '0',
    s_pace: '0',
    d_pace: '0',
    s_gno: '0',
    d_gno: '0',
    s_sub_gno: '0',
    d_sub_gno: '0',
    s_gtype: '0',
    d_gtype: '0',
    s_sdlen: '0',
    d_sdlen: '0',
    s_sdtype: '0',
    d_sdtype: '0',
    s_timing: '0',
    d_timing: '0',
    s_notes: '0',
    d_notes: '0',
    s_judge: '0',
    d_judge: '0',
    s_judgeAdj: '0',
    d_judgeAdj: '0',
    s_hispeed: '0',
    d_hispeed: '0',
    s_liflen: '0',
    d_liflen: '0',
    s_disp_judge: '0',
    d_disp_judge: '0',
    s_opstyle: '0',
    d_opstyle: '0',
    s_graph_score: '0',
    d_graph_score: '0',
    s_auto_scrach: '0',
    d_auto_scrach: '0',
    s_gauge_disp: '0',
    d_gauge_disp: '0',
    s_lane_brignt: '0',
    d_lane_brignt: '0',
    s_camera_layout: '0',
    d_camera_layout: '0',
    s_ghost_score: '0',
    d_ghost_score: '0',
    s_tsujigiri_disp: '0',
    d_tsujigiri_disp: '0'
  };

  const pcdata = profile.pcdata;

  if (!profile.grade) profile.grade = {
    sgid: '-1',
    dgid: '-1',
    gradeList: []
  };

  const grade = profile.grade;

  return send.object({
    pcdata: K.ATTR({
      id: String(profile.iidxId),
      idstr: IIDXID_TO_STR(profile.iidxId),
      name: profile.name,
      pid: String(profile.pid),
      spnum: pcdata.singlePlayNum ?? '0',
      dpnum: pcdata.doublePlayNum ?? '0',
      sach: pcdata.singleDJPoints ?? '0',
      dach: pcdata.doubleDJPoints ?? '0',
      mode: pcdata.mode ?? '0',
      pmode: pcdata.pmode ?? '0',
      ngrade: pcdata.ngrade ?? '0',
      rtype: pcdata.rtype ?? '0',
      sp_opt: pcdata.sp_opt ?? '0',
      dp_opt: pcdata.dp_opt ?? '0',
      dp_opt2: pcdata.dp_opt2 ?? '0',
      gpos: pcdata.gpos ?? '0',
      s_sorttype: pcdata.s_sorttype ?? '0',
      d_sorttype: pcdata.d_sorttype ?? '0',
      s_pace: pcdata.s_pace ?? '0',
      d_pace: pcdata.d_pace ?? '0',
      s_gno: pcdata.s_gno ?? '0',
      d_gno: pcdata.d_gno ?? '0',
      s_sub_gno: pcdata.s_sub_gno ?? '0',
      d_sub_gno: pcdata.d_sub_gno ?? '0',
      s_gtype: pcdata.s_gtype ?? '0',
      d_gtype: pcdata.d_gtype ?? '0',
      s_sdlen: pcdata.s_sdlen ?? '0',
      d_sdlen: pcdata.d_sdlen ?? '0',
      s_sdtype: pcdata.s_sdtype ?? '0',
      d_sdtype: pcdata.d_sdtype ?? '0',
      s_timing: pcdata.s_timing ?? '0',
      d_timing: pcdata.d_timing ?? '0',
      s_notes: pcdata.s_notes ?? '0',
      d_notes: pcdata.d_notes ?? '0',
      s_judge: pcdata.s_judge ?? '0',
      d_judge: pcdata.d_judge ?? '0',
      s_judgeAdj: pcdata.s_judgeAdj ?? '0',
      d_judgeAdj: pcdata.d_judgeAdj ?? '0',
      s_hispeed: pcdata.s_hispeed ?? '0',
      d_hispeed: pcdata.d_hispeed ?? '0',
      s_liflen: pcdata.s_liflen ?? '0',
      d_liflen: pcdata.d_liflen ?? '0',
      s_disp_judge: pcdata.s_disp_judge ?? '0',
      d_disp_judge: pcdata.d_disp_judge ?? '0',
      s_opstyle: pcdata.s_opstyle ?? '0',
      d_opstyle: pcdata.d_opstyle ?? '0',
      s_graph_score: pcdata.s_graph_score ?? '0',
      d_graph_score: pcdata.d_graph_score ?? '0',
      s_auto_scrach: pcdata.s_auto_scrach ?? '0',
      d_auto_scrach: pcdata.d_auto_scrach ?? '0',
      s_gauge_disp: pcdata.s_gauge_disp ?? '0',
      d_gauge_disp: pcdata.d_gauge_disp ?? '0',
      s_lane_brignt: pcdata.s_lane_brignt ?? '0',
      d_lane_brignt: pcdata.d_lane_brignt ?? '0',
      s_camera_layout: pcdata.s_camera_layout ?? '0',
      d_camera_layout: pcdata.d_camera_layout ?? '0',
      s_ghost_score: pcdata.s_ghost_score ?? '0',
      d_ghost_score: pcdata.d_ghost_score ?? '0',
      s_tsujigiri_disp: pcdata.s_tsujigiri_disp ?? '0',
      d_tsujigiri_disp: pcdata.d_tsujigiri_disp ?? '0'
    }),

    ...profile.lightning && {
      ...profile.lightning.playData && {
        lightning_play_data: K.ATTR({
          spnum: profile.lightning.playData.spnum ?? '0',
          dpnum: profile.lightning.playData.dpnum ?? '0'
        }),
      },
      ...profile.lightning.setting && {
        lightning_setting: K.ATTR({
          headphone_vol: profile.lightning.setting.headphoneVolume,
          resistance_sp_left: profile.lightning.setting.resistance_sp_left,
          resistance_sp_right: profile.lightning.setting.resistance_sp_right,
          resistance_dp_left: profile.lightning.setting.resistance_dp_left,
          resistance_dp_right: profile.lightning.setting.resistance_dp_right,
          skin_0: profile.lightning.customize?.skin_0 ?? '0',
          flg_skin_0: profile.lightning.customize?.flg_skin_0 ?? '0',
        }, {
          slider: K.ARRAY('s32', profile.lightning.setting.effectSlider),
          light: K.ARRAY('bool', profile.lightning.setting.light),
          conventration: K.ITEM('bool', profile.lightning.setting.concentration)
        })
      }
    },

    grade: K.ATTR({ sgid: grade.sgid ?? '-1', dgid: grade.dgid ?? '-1' }, {
      g: grade.gradeList.map(g => K.ARRAY('u8', g))
    }),

    rlist: {}
  });
};

export const save: EPR = async (info, data, send) => {
  const version = getVersion(info);
  if (version === 0) return send.deny();

  const { iidxid } = $(data).attr();
  if (!iidxid) return send.deny();

  const profile = await DB.FindOne<Profile>(null, { collection: 'profile', iidxId: parseInt(iidxid) });
  if (!profile) return send.deny();

  if (version === 28) {
    const {
      cltype,
      s_achi,
      d_achi,
      sp_opt,
      dp_opt,
      dp_opt2,
      gpos,
      s_sorttype,
      d_sorttype,
      s_disp_judge,
      d_disp_judge,
      s_pace,
      d_pace,
      s_gno,
      d_gno,
      s_sub_gno,
      d_sub_gno,
      s_gtype,
      d_gtype,
      s_sdlen,
      d_sdlen,
      s_sdtype,
      d_sdtype,
      s_timing,
      d_timing,
      s_notes,
      d_notes,
      s_judge,
      d_judge,
      s_judgeAdj,
      d_judgeAdj,
      s_hispeed,
      d_hispeed,
      s_opstyle,
      d_opstyle,
      s_graph_score,
      d_graph_score,
      s_auto_scrach,
      d_auto_scrach,
      s_gauge_disp,
      d_gauge_disp,
      s_lane_brignt,
      d_lane_brignt,
      s_camera_layout,
      d_camera_layout,
      s_ghost_score,
      d_ghost_score,
      s_tsujigiri_disp,
      d_tsujigiri_disp,
      s_lift,
      d_lift,
      mode,
      pmode,
      ngrade,
      rtype
    } = $(data).attr();

    if (!profile.pcdata) profile.pcdata = {};

    if (parseInt(cltype) === 0) {
      // Increment Single Play Count
      profile.pcdata.singlePlayNum = String(IncrementInt(profile.pcdata.singlePlayNum));
    } else if (parseInt(cltype) === 1) {
      // Increment Double Play Count
      profile.pcdata.doublePlayNum = String(IncrementInt(profile.pcdata.doublePlayNum));
    }

    profile.pcdata.singleDJPoints = s_achi;
    profile.pcdata.doubleDJPoints = d_achi;
    profile.pcdata.mode = mode;
    profile.pcdata.pmode = pmode;
    profile.pcdata.ngrade = ngrade;
    profile.pcdata.rtype = rtype;
    profile.pcdata.sp_opt = sp_opt;
    profile.pcdata.dp_opt = dp_opt;
    profile.pcdata.dp_opt2 = dp_opt2;
    profile.pcdata.gpos = gpos;
    profile.pcdata.s_sorttype = s_sorttype;
    profile.pcdata.d_sorttype = d_sorttype;
    profile.pcdata.s_pace = s_pace;
    profile.pcdata.d_pace = d_pace;
    profile.pcdata.s_gno = s_gno;
    profile.pcdata.d_gno = d_gno;
    profile.pcdata.s_sub_gno = s_sub_gno;
    profile.pcdata.d_sub_gno = d_sub_gno;
    profile.pcdata.s_gtype = s_gtype;
    profile.pcdata.d_gtype = d_gtype;
    profile.pcdata.s_sdlen = s_sdlen;
    profile.pcdata.d_sdlen = d_sdlen;
    profile.pcdata.s_sdtype = s_sdtype;
    profile.pcdata.d_sdtype = d_sdtype;
    profile.pcdata.s_timing = s_timing;
    profile.pcdata.d_timing = d_timing;
    profile.pcdata.s_notes = s_notes;
    profile.pcdata.d_notes = d_notes;
    profile.pcdata.s_judge = s_judge;
    profile.pcdata.d_judge = d_judge;
    profile.pcdata.s_judgeAdj = s_judgeAdj;
    profile.pcdata.d_judgeAdj = d_judgeAdj;
    profile.pcdata.s_hispeed = s_hispeed;
    profile.pcdata.d_hispeed = d_hispeed;
    if (s_lift)
      profile.pcdata.s_liflen = s_lift;
    if (d_lift)
      profile.pcdata.d_liflen = d_lift;
    profile.pcdata.s_disp_judge = s_disp_judge;
    profile.pcdata.d_disp_judge = d_disp_judge;
    profile.pcdata.s_opstyle = s_opstyle;
    profile.pcdata.d_opstyle = d_opstyle;
    profile.pcdata.s_graph_score = s_graph_score;
    profile.pcdata.d_graph_score = d_graph_score;
    profile.pcdata.s_auto_scrach = s_auto_scrach;
    profile.pcdata.d_auto_scrach = d_auto_scrach;
    profile.pcdata.s_gauge_disp = s_gauge_disp;
    profile.pcdata.d_gauge_disp = d_gauge_disp;
    profile.pcdata.s_lane_brignt = s_lane_brignt;
    profile.pcdata.d_lane_brignt = d_lane_brignt;
    profile.pcdata.s_camera_layout = s_camera_layout;
    profile.pcdata.d_camera_layout = d_camera_layout;
    profile.pcdata.s_ghost_score = s_ghost_score;
    profile.pcdata.d_ghost_score = d_ghost_score;
    profile.pcdata.s_tsujigiri_disp = s_tsujigiri_disp;
    profile.pcdata.d_tsujigiri_disp = d_tsujigiri_disp;

    const lightningPlayData = $(data).element('lightning_play_data');
    if (lightningPlayData) {
      if (!profile.lightning) profile.lightning = {};

      if (!profile.lightning.playData) profile.lightning.playData = {};
      if (parseInt(cltype) === 0) {
        profile.lightning.playData.spnum = String(IncrementInt(profile.lightning.playData.spnum));
      } else if (parseInt(cltype) === 1) {
        profile.lightning.playData.dpnum = String(IncrementInt(profile.lightning.playData.dpnum));
      }

      const lightningSetting = $(data).element('lightning_setting');
      if (lightningSetting) {
        const {
          headphone_vol,
          resistance_sp_left,
          resistance_sp_right,
          resistance_dp_left,
          resistance_dp_right
        } = lightningSetting.attr();

        if (!profile.lightning.setting) profile.lightning.setting = {};
        profile.lightning.setting.headphoneVolume = headphone_vol;
        profile.lightning.setting.resistance_sp_left = resistance_sp_left;
        profile.lightning.setting.resistance_sp_right = resistance_sp_right;
        profile.lightning.setting.resistance_dp_left = resistance_dp_left;
        profile.lightning.setting.resistance_dp_right = resistance_dp_right;
        profile.lightning.setting.effectSlider = lightningSetting.numbers('slider');
        profile.lightning.setting.light = lightningSetting.numbers('light');
        profile.lightning.setting.concentration = lightningSetting.bool('concentration');
      }

      const lightningCustomize = $(data).element('lightning_customize_flg');
      if (lightningCustomize) {
        const { flg_skin_0 } = lightningCustomize.attr();

        if (!profile.lightning.customize) profile.lightning.customize = {};
        profile.lightning.customize.flg_skin_0 = flg_skin_0;
      }
    }

    const secret = $(data).element('secret');
    if (secret) {
      if (!profile.secret) profile.secret = {};

      profile.secret.flg1 = secret.bigints('flg1');
      profile.secret.flg2 = secret.bigints('flg2');
      profile.secret.flg3 = secret.bigints('flg3');
      profile.secret.flg4 = secret.bigints('flg4');
    }

    const leggendaria = $(data).element('leggendaria');
    if (leggendaria) {
      if (!profile.leggendaria) profile.leggendaria = {};

      profile.leggendaria.flg1 = leggendaria.bigints('flg1');
    }

    const favorite = $(data).element('favorite');
    if (favorite) {
      if (!profile.favorite) profile.favorite = {};

      profile.favorite.sp_mlist = favorite.buffer('sp_mlist');
      profile.favorite.sp_clist = favorite.buffer('sp_clist');
      profile.favorite.dp_mlist = favorite.buffer('dp_mlist');
      profile.favorite.dp_clist = favorite.buffer('dp_clist');
    }

    console.dir(profile, { depth: null });

    // await DB.Update<Profile>(profile.__refid, { collection: 'profile', iidxId: profile.iidxId }, profile);

    return send.success();
  }

  return send.deny();
};

export const getRank: EPR = async (info, data, send) => {
  const { iidxid, cltype } = $(data).attr();

  return send.object({
    style: K.ATTR({ type: cltype }),
    m: [],
    top: [],
    best: []
  });
};
