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

  if (!profile.grade) profile.grade = {
    sgid: '-1',
    dgid: '-1',
    gradeList: []
  };

  console.dir(profile.achievements.trophy);

  return send.pugFile('templates/28_profile.pug', { ...profile, iidxIdstr: IIDXID_TO_STR(profile.iidxId) });

  /*return send.object({
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
          concentration: K.ITEM('bool', profile.lightning.setting.concentration)
        })
      }
    },

    grade: K.ATTR({ sgid: grade.sgid ?? '-1', dgid: grade.dgid ?? '-1' }, {
      g: grade.gradeList.map(g => K.ARRAY('u8', g))
    }),

    rlist: {},

    ...profile.music_memo && {
      music_memo: {
        music: profile.music_memo.map((m, i) => K.ATTR({
          index: String(i),
          music_id: String(m.music_id),
          play_style: String(m.play_style)
        }))
      }
    }
  });*/
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

      profile.secret.flg1 = secret.numbers('flg1');
      profile.secret.flg2 = secret.numbers('flg2');
      profile.secret.flg3 = secret.numbers('flg3');
      profile.secret.flg4 = secret.numbers('flg4');
    }

    const leggendaria = $(data).element('leggendaria');
    if (leggendaria) {
      if (!profile.leggendaria) profile.leggendaria = {};

      profile.leggendaria.flg1 = leggendaria.numbers('flg1');
    }

    const favorite = $(data).element('favorite');
    if (favorite) {
      if (!profile.favorite) profile.favorite = {};

      profile.favorite.sp_mlist = favorite.buffer('sp_mlist');
      profile.favorite.sp_clist = favorite.buffer('sp_clist');
      profile.favorite.dp_mlist = favorite.buffer('dp_mlist');
      profile.favorite.dp_clist = favorite.buffer('dp_clist');
    }

    // extra_favorite
    // playlist

    const musicMemo = $(data).element('music_memo');
    if (musicMemo) {
      if (!profile.music_memo) profile.music_memo = [];

      const music = musicMemo.elements('music');
      profile.music_memo = music.map(m => ({
        music_id: parseInt(m.attr().music_id),
        play_style: parseInt(m.attr().play_style)
      }));
    }

    const qproSecret = $(data).element('qpro_secret');
    if (qproSecret) {
      if (!profile.qpro_secret) profile.qpro_secret = {};

      profile.qpro_secret.head = qproSecret.bigints('head').map(v => Number(v));
      profile.qpro_secret.hair = qproSecret.bigints('hair').map(v => Number(v));
      profile.qpro_secret.face = qproSecret.bigints('face').map(v => Number(v));
      profile.qpro_secret.body = qproSecret.bigints('body').map(v => Number(v));
      profile.qpro_secret.hand = qproSecret.bigints('hand').map(v => Number(v));
    }

    const qproEquip = $(data).element('qpro_equip');
    if (qproEquip) {
      const { head, hair, face, body, hand } = qproEquip.attr();
      if (!profile.qpro) profile.qpro = {};

      profile.qpro.head = parseInt(head);
      profile.qpro.hair = parseInt(hair);
      profile.qpro.face = parseInt(face);
      profile.qpro.body = parseInt(body);
      profile.qpro.hand = parseInt(hand);
    }

    const step = $(data).element('step');
    if (step) {
      const {
        enemy_damage,
        progress,
        sp_level,
        dp_level,
        sp_mission_point,
        dp_mission_point,
        sp_dj_mission_level,
        dp_dj_mission_level,
        sp_clear_mission_level,
        dp_clear_mission_level,
        sp_dj_mission_clear,
        dp_dj_mission_clear,
        sp_clear_mission_clear,
        dp_clear_mission_clear,
        sp_mplay,
        dp_mplay,
        tips_read_list
      } = step.attr();
      if (!profile.step_28) profile.step_28 = {};

      profile.step_28.enemy_damage = enemy_damage;
      profile.step_28.progress = progress;
      profile.step_28.sp_level = sp_level;
      profile.step_28.dp_level = dp_level;
      profile.step_28.sp_mission_point = sp_mission_point;
      profile.step_28.dp_mission_point = dp_mission_point;
      profile.step_28.sp_dj_mission_level = sp_dj_mission_level;
      profile.step_28.dp_dj_mission_level = dp_dj_mission_level;
      profile.step_28.sp_clear_mission_level = sp_clear_mission_level;
      profile.step_28.dp_clear_mission_level = dp_clear_mission_level;
      profile.step_28.sp_dj_mission_clear = sp_dj_mission_clear;
      profile.step_28.dp_dj_mission_clear = dp_dj_mission_clear;
      profile.step_28.sp_clear_mission_clear = sp_clear_mission_clear;
      profile.step_28.dp_clear_mission_clear = dp_clear_mission_clear;
      profile.step_28.sp_mplay = sp_mplay;
      profile.step_28.dp_mplay = dp_mplay;
      profile.step_28.tips_read_list = tips_read_list;
      profile.step_28.is_track_ticket = step.bool('is_track_ticket');
    }

    const achievements = $(data).element('achievements');
    if (achievements) {
      const { pack_id, pack_flg, play_pack, pack_comp, last_weekly, weekly_num, visit_flg } = achievements.attr();
      if (!profile.achievements) profile.achievements = {};

      console.log();

      profile.achievements.pack_id = pack_id;
      profile.achievements.pack_flg = pack_flg;
      profile.achievements.play_pack = play_pack;
      profile.achievements.pack_comp = pack_comp;
      profile.achievements.last_weekly = last_weekly;
      profile.achievements.weekly_num = weekly_num;
      profile.achievements.visit_flg = visit_flg;
      profile.achievements.trophy = achievements.bigints('trophy').map(v => Number(v));
    }

    // expert_point

    const djRank = $(data).elements('dj_rank');
    if (djRank) {
      if (!profile.dj_rank) profile.dj_rank = {};

      djRank.map(v => {
        const playStyle = parseInt(v.attr().style) === 0 ? 'sp' : 'dp';
        profile.dj_rank[playStyle] = {
          rank: v.numbers('rank'),
          point: v.numbers('point'),
        };
      });
    }

    const notesRadar = $(data).elements('notes_radar');
    if (notesRadar) {
      if (!profile.notes_radar) profile.notes_radar = {};

      notesRadar.map(v => {
        const playStyle = parseInt(v.attr().style) === 0 ? 'sp' : 'dp';
        profile.notes_radar[playStyle] = v.numbers('radar_score');
      });
    }

    const tonjyutsu = $(data).element('tonjyutsu');
    if (tonjyutsu) {
      const { platinum_pass, black_pass } = tonjyutsu.attr();
      if (!profile.tonjyutsu) profile.tonjyutsu = {};

      profile.tonjyutsu.platinum_pass = platinum_pass;
      profile.tonjyutsu.black_pass = black_pass;
    }

    const shitei = $(data).element('shitei');
    if (shitei) {
      // TODO Fix later
    }

    const deller = $(data).element('deller');
    if (deller) {
      profile.deller = String(IncrementInt(profile.deller, deller.attr().deller));
    }

    const orbData = $(data).element('orb_data');
    if (orbData) {
      const { add_orb, present_orb, reward_orb } = orbData.attr();
      if (!profile.orb_data) profile.orb_data = {};

      profile.orb_data.orb = IncrementInt(profile.orb_data.orb, parseInt(add_orb));
      profile.orb_data.present_orb = IncrementInt(profile.orb_data.present_orb, parseInt(present_orb));
      if (orbData.bool('use_vip_pass')) {
        profile.orb_data.orb = 0;
      }
    }

    const payPerUseItem = $(data).element('pay_per_use_item');
    if (payPerUseItem) {
      const { consume_num } = payPerUseItem.attr();
      if (!profile.pay_per_use_item) profile.pay_per_use_item = {};

      profile.pay_per_use_item.consume_num = IncrementInt(profile.pay_per_use_item.consume_num, parseInt(consume_num));

      if (!profile.pay_per_use_item.consume_details) profile.pay_per_use_item.consume_details = [];
      const detail = payPerUseItem.elements('consume_detail');
      detail.map(v => profile.pay_per_use_item.consume_details.push({
        consume_type: parseInt(v.attr().consume_type),
        consume_num: parseInt(v.attr().consume_num)
      }));
    }

    const presentPayPerUseItem = $(data).element('present_pay_per_use_item');
    if (presentPayPerUseItem) {
      const { consume_num } = presentPayPerUseItem.attr();
      if (!profile.present_pay_per_use_item) profile.present_pay_per_use_item = {};

      profile.present_pay_per_use_item.consume_num = IncrementInt(profile.present_pay_per_use_item.consume_num, parseInt(consume_num));

      if (!profile.present_pay_per_use_item.consume_details) profile.present_pay_per_use_item.consume_details = [];
      const detail = presentPayPerUseItem.elements('present_consume_detail');
      detail.map(v => profile.present_pay_per_use_item.consume_details.push({
        consume_type: parseInt(v.attr().consume_type),
        consume_num: parseInt(v.attr().consume_num)
      }));
    }

    const qproTicket = $(data).element('qpro_ticket');
    if (qproTicket) {
      const { ticket_num, total_ticket_num, add_ticket_num } = qproTicket.attr();
      if (!profile.qpro_ticket) profile.qpro_ticket = {};

      profile.qpro_ticket.total_ticket_num = parseInt(total_ticket_num);
      profile.qpro_ticket.ticket_num = parseInt(ticket_num);
      profile.qpro_ticket.total_ticket_num = IncrementInt(profile.qpro_ticket.ticket_num, add_ticket_num);
    }

    const konamiStyle = $(data).element('konami_style');
    if (konamiStyle) {
      const { skip_flg } = konamiStyle.attr();
      if (!profile.konami_style) profile.konami_style = {};

      profile.konami_style.skip_flg = skip_flg;
    }

    // arena_data
    // arena_log
    // music_history
    // qr_window
    // tsujigiri
    // tsujigiri_hidden_chara
    // play_log

    // weekly_result

    const skinCustomizeFlg = $(data).element('skin_customize_flg');
    if (skinCustomizeFlg) {
      const { skin_frame_flg, skin_bgm_flg } = skinCustomizeFlg.attr();
      if (!profile.skin_customize_flg) profile.skin_customize_flg = {};

      profile.skin_customize_flg.skin_frame_flg = skin_frame_flg;
      profile.skin_customize_flg.skin_bgm_flg = skin_bgm_flg;
    }

    const news = $(data).element('news');
    if (news) {
      if (!profile.news) profile.news = {};

      profile.news.last_read_time = news.numbers('last_read_time');
    }

    const languageSetting = $(data).element('language_setting');
    if (languageSetting) {
      const { language } = languageSetting.attr();
      if (!profile.language_setting) profile.language_setting = {};

      profile.language_setting.language = language;
    }

    const movieAgreement = $(data).element('movie_agreement');
    if (movieAgreement) {
      const { agreement_version } = movieAgreement.attr();
      if (!profile.movie_agreement) profile.movie_agreement = {};

      profile.movie_agreement.agreement_version = agreement_version;
    }

    const movieSetting = $(data).element('movie_setting');
    if (movieSetting) {
      if (!profile.movie_setting) profile.movie_setting = {};

      profile.movie_setting.hide_name = movieSetting.bool('hide_name');
    }

    const extraBossEvent = $(data).element('extra_boss_event');
    if (extraBossEvent) {
      const {
        key_orb,
        boss_orb_0,
        boss_orb_1,
        boss_orb_2,
        boss_orb_3,
        boss_orb_4,
        boss_orb_5,
        boss_orb_6,
        boss_orb_7
      } = extraBossEvent.attr();
      if (!profile.extra_boss_event) profile.extra_boss_event = {};

      profile.extra_boss_event.key_orb = key_orb;
      profile.extra_boss_event.boss_orb_0 = boss_orb_0;
      profile.extra_boss_event.boss_orb_1 = boss_orb_1;
      profile.extra_boss_event.boss_orb_2 = boss_orb_2;
      profile.extra_boss_event.boss_orb_3 = boss_orb_3;
      profile.extra_boss_event.boss_orb_4 = boss_orb_4;
      profile.extra_boss_event.boss_orb_5 = boss_orb_5;
      profile.extra_boss_event.boss_orb_6 = boss_orb_6;
      profile.extra_boss_event.boss_orb_7 = boss_orb_7;

      const onemore = extraBossEvent.element('onemore');
      if (onemore) {
        const {
          gauge,
          challenge_num_0_n,
          challenge_num_0_h,
          challenge_num_0_a,
          challenge_num_1_n,
          challenge_num_1_h,
          challenge_num_1_a,
          challenge_num_2_n,
          challenge_num_2_h,
          challenge_num_2_a
        } = onemore.attr();
        if (!profile.extra_boss_event.onemore) profile.extra_boss_event.onemore = {};

        profile.extra_boss_event.onemore.gauge = gauge;
        profile.extra_boss_event.onemore.challenge_num_0_n = challenge_num_0_n;
        profile.extra_boss_event.onemore.challenge_num_0_h = challenge_num_0_h;
        profile.extra_boss_event.onemore.challenge_num_0_a = challenge_num_0_a;
        profile.extra_boss_event.onemore.challenge_num_1_n = challenge_num_1_n;
        profile.extra_boss_event.onemore.challenge_num_1_h = challenge_num_1_h;
        profile.extra_boss_event.onemore.challenge_num_1_a = challenge_num_1_a;
        profile.extra_boss_event.onemore.challenge_num_2_n = challenge_num_2_n;
        profile.extra_boss_event.onemore.challenge_num_2_h = challenge_num_2_h;
        profile.extra_boss_event.onemore.challenge_num_2_a = challenge_num_2_a;
        profile.extra_boss_event.onemore.defeat_flg_0_n = onemore.bool('defeat_flg_0_n');
        profile.extra_boss_event.onemore.defeat_flg_0_h = onemore.bool('defeat_flg_0_h');
        profile.extra_boss_event.onemore.defeat_flg_0_a = onemore.bool('defeat_flg_0_a');
        profile.extra_boss_event.onemore.defeat_flg_1_n = onemore.bool('defeat_flg_1_n');
        profile.extra_boss_event.onemore.defeat_flg_1_h = onemore.bool('defeat_flg_1_h');
        profile.extra_boss_event.onemore.defeat_flg_1_a = onemore.bool('defeat_flg_1_a');
        profile.extra_boss_event.onemore.defeat_flg_2_n = onemore.bool('defeat_flg_2_n');
        profile.extra_boss_event.onemore.defeat_flg_2_h = onemore.bool('defeat_flg_2_h');
        profile.extra_boss_event.onemore.defeat_flg_2_a = onemore.bool('defeat_flg_2_a');
      }
    }

    const event1 = $(data).element('event_1');
    if (event1) {
      const { story_prog, last_select_area_id, failed_num } = event1.attr();
      if (!profile.event_1_28) profile.event_1_28 = {};

      profile.event_1_28.event_play_num = IncrementInt(profile.event_1_28.event_play_num);
      profile.event_1_28.story_prog = parseInt(story_prog);
      profile.event_1_28.last_select_area_id = parseInt(last_select_area_id);
      profile.event_1_28.failed_num = parseInt(failed_num);

      const areaData = event1.elements('area_data');
      if (areaData) {
        if (!profile.event_1_28.area_data) profile.event_1_28.area_data = [];

        areaData.map(area => {
          const {
            area_id,
            play_num,
            recipe_prog0,
            recipe_prog1,
            recipe_prog2,
            recipe_prog3,
            recipe_prog4,
            operation_num,
            operation_prog,
            last_select_recipe,
            area_prog
          } = area.attr();
          const isComplete = area.bool('is_complete');

          profile.event_1_28.area_data[parseInt(area_id)] = {
            area_id: parseInt(area_id),
            play_num: parseInt(play_num),
            recipe_prog0: parseInt(recipe_prog0),
            recipe_prog1: parseInt(recipe_prog1),
            recipe_prog2: parseInt(recipe_prog2),
            recipe_prog3: parseInt(recipe_prog3),
            recipe_prog4: parseInt(recipe_prog4),
            operation_num: parseInt(operation_num),
            operation_prog: parseInt(operation_prog),
            last_select_recipe: parseInt(last_select_recipe),
            area_prog: parseInt(area_prog),
            is_complete: isComplete
          };
        });
      }
    }

    const valkyrieLinkageData = $(data).element('valkyrie_linkage_data');
    if (valkyrieLinkageData) {
      if (!profile.valkyrie_linkage_data) profile.valkyrie_linkage_data = {};

      profile.valkyrie_linkage_data.progress = valkyrieLinkageData.bool('is_complete');
    }

    // console.dir(profile, { depth: null });

    await DB.Update<Profile>(profile.__refid, { collection: 'profile', iidxId: profile.iidxId }, profile);

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
