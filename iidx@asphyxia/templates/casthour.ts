import { ID } from '../utils/id';
import { CLTYPE } from '../utils/constants';
import { ValidatedMap } from '../utils/validatedMap';
import { Profile } from '../models/profile';

export const common = () =>
  K.ATTR(
    { expire: '600' },
    {
      monthly_mranking: K.ARRAY('u16', new Array(20).fill(0)),
      total_mranking: K.ARRAY('u16', new Array(20).fill(0)),
      internet_ranking: {},
      secret_ex_course: {},
      kac_mid: K.ARRAY('s32', new Array(30).fill(0)),
      kac_clid: K.ARRAY('s32', new Array(30).fill(0)),
      ir: K.ATTR({ beat: '0' }),
      cm: K.ATTR({ id: '0', folder: '0', compo: '0' }),
      tdj_cm: { cm: [] },
      playvideo_disable_music: { music: [] },
      music_movie_suspend: { music: [] },
      bpl_virtural: { game_data: [] },
      movie_agreement: K.ATTR({ version: '0' }),
      license: {
        string: K.ITEM('bin', Buffer.from('TEST')),
      },
      file_recovery: K.ATTR({ url: '' }),
      movie_upload: K.ATTR({ url: '' }),
      button_release_frame: K.ATTR({ frame: '' }),
      trigger_logic_type: K.ATTR({}),
      cm_movie_info: K.ATTR({}),
      escape_package_info: { list: [] },
      expert: K.ATTR({ phase: '0' }),
      expert_random_secret: K.ATTR({ phase: '0' }),
      boss: K.ATTR({ phase: '0' }),
      vip_pass_black: {},
      eisei: K.ATTR({ open: '0' }),
      deller_bonus: K.ATTR({ open: '0' }),
      newsong_another: K.ATTR({ open: '0' }),
      pcb_check: K.ATTR({ flg: '0' }),
      expert_secret_full_open: {},
      eaorder_phase: K.ATTR({ phase: '0' }),
      common_evnet: K.ATTR({ flg: '0' }),
      system_voice_phase: K.ATTR({ phase: '0' }),
      extra_boss_event: K.ATTR({ phase: '0' }),
      event1_phase: K.ATTR({ phase: '0' }),
      premium_area_news: K.ATTR({ open: '0' }),
      premium_area_qpro: K.ATTR({ open: '0' }),
      disable_same_triger: K.ATTR({ frame: '0' }),
      play_video: {},
      world_tourism: K.ATTR({ open_list: '' }),
      bpl_battle: K.ATTR({ phase: '0' }),
      display_asio_logo: {},
      hitchart: [],
      lane_gacha: {},
      fps_fix: {},
      save_unsync_log: {},
      questionnaire_list: { questionnaire: [] },
    }
  );

export const formatProfile = (profile: Profile) => {
  return {
    pcdata: K.ATTR({
      id: String(profile.extId),
      idstr: String(ID.foramtExtId(profile.extId)),
      name: profile.getStr('name', 'IIDX'),
      pid: String(profile.getInt('pid')),
      spnum: String(profile.getInt('single_plays')),
      dpnum: String(profile.getInt('double_plays')),
      sach: String(profile.getInt('single_dj_points')),
      dach: String(profile.getInt('double_dj_points')),
      mode: String(profile.getInt('mode')),
      pmode: String(profile.getInt('pmode')),
      ngrade: String(profile.getInt('ngrade')),
      rtype: String(profile.getInt('rtype')),
      sp_opt: String(profile.getInt('sp_opt')),
      dp_opt: String(profile.getInt('dp_opt')),
      dp_opt2: String(profile.getInt('dp_opt2')),
      gpos: String(profile.getInt('gpos')),
      s_sorttype: String(profile.getInt('s_sorttype')),
      d_sorttype: String(profile.getInt('d_sorttype')),
      s_pace: String(profile.getInt('s_pace')),
      d_pace: String(profile.getInt('d_pace')),
      s_gno: String(profile.getInt('s_gno')),
      d_gno: String(profile.getInt('d_gno')),
      s_sub_gno: String(profile.getInt('s_sub_gno')),
      d_sub_gno: String(profile.getInt('d_sub_gno')),
      s_gtype: String(profile.getInt('s_gtype')),
      d_gtype: String(profile.getInt('d_gtype')),
      s_sdlen: String(profile.getInt('s_sdlen')),
      d_sdlen: String(profile.getInt('d_sdlen')),
      s_sdtype: String(profile.getInt('s_sdtype')),
      d_sdtype: String(profile.getInt('d_sdtype')),
      s_timing: String(profile.getInt('s_timing')),
      d_timing: String(profile.getInt('d_timing')),
      s_notes: String(profile.getFloat('s_notes')),
      d_notes: String(profile.getFloat('d_notes')),
      s_judge: String(profile.getInt('s_judge')),
      d_judge: String(profile.getInt('d_judge')),
      s_judgeAdj: String(profile.getInt('s_judgeAdj')),
      d_judgeAdj: String(profile.getInt('d_judgeAdj')),
      s_hispeed: String(profile.getFloat('s_hispeed')),
      d_hispeed: String(profile.getFloat('d_hispeed')),
      s_liflen: String(profile.getInt('s_lift')),
      d_liflen: String(profile.getInt('d_lift')),
      s_disp_judge: String(profile.getInt('s_disp_judge')),
      d_disp_judge: String(profile.getInt('d_disp_judge')),
      s_opstyle: String(profile.getInt('s_opstyle')),
      d_opstyle: String(profile.getInt('d_opstyle')),
      s_graph_score: String(profile.getInt('s_graph_score')),
      d_graph_score: String(profile.getInt('d_graph_score')),
      s_auto_scrach: String(profile.getInt('s_auto_scrach')),
      d_auto_scrach: String(profile.getInt('d_auto_scrach')),
      s_gauge_disp: String(profile.getInt('s_gauge_disp')),
      d_gauge_disp: String(profile.getInt('d_gauge_disp')),
      s_lane_brignt: String(profile.getInt('s_lane_brignt')),
      d_lane_brignt: String(profile.getInt('d_lane_brignt')),
      s_camera_layout: String(profile.getInt('s_camera_layout')),
      d_camera_layout: String(profile.getInt('d_camera_layout')),
      s_ghost_score: String(profile.getInt('s_ghost_score')),
      d_ghost_score: String(profile.getInt('d_ghost_score')),
      s_tsujigiri_disp: String(profile.getInt('s_tsujigiri_disp')),
      d_tsujigiri_disp: String(profile.getInt('d_tsujigiri_disp')),
      s_auto_adjust: String(profile.getInt('s_auto_adjust')),
      d_auto_adjust: String(profile.getInt('d_auto_adjust')),
    }),

    weekly_achieve: K.ATTR({
      weekly_achieve_0: '0',
      weekly_achieve_1: '0',
      weekly_achieve_2: '0',
      weekly_achieve_3: '0',
      weekly_achieve_4: '0',
    }),

    spdp_rival: K.ATTR({ flg: '0' }),

    bind_eaappli: {},
    ea_premium_course: {},
    enable_qr_reward: {},

    secret: {
      flg1: K.ARRAY('s64', [BigInt(-1), BigInt(-1), BigInt(-1)]),
      flg2: K.ARRAY('s64', [BigInt(-1), BigInt(-1), BigInt(-1)]),
      flg3: K.ARRAY('s64', [BigInt(-1), BigInt(-1), BigInt(-1)]),
      flg4: K.ARRAY('s64', [BigInt(-1), BigInt(-1), BigInt(-1)]),
    },

    leggendaria: {
      flg1: K.ARRAY('s64', [BigInt(-1), BigInt(-1), BigInt(-1)]),
    },

    // favorite: {},

    extra_favorite: [],

    playlist: [],

    music_memo: {
      music: (() => {
        const musicMemo = profile.get('music_memo') as number[][];
        const single = musicMemo[0];
        const double = musicMemo[1];
        const musics = [];

        if (single) {
          single.forEach((id, index) =>
            musics.push(
              K.ATTR({
                index: String(index),
                play_style: '0',
                music_id: String(id),
              })
            )
          );
          musics.push(single);
        }
        if (double) {
          double.forEach((id, index) =>
            musics.push(
              K.ATTR({
                index: String(index),
                play_style: '1',
                music_id: String(id),
              })
            )
          );
          musics.push(double);
        }

        return musics;
      })(),
    },

    qpro_secret: {
      head: K.ARRAY('s64', new Array(7).fill(BigInt(-1))),
      hair: K.ARRAY('s64', new Array(7).fill(BigInt(-1))),
      face: K.ARRAY('s64', new Array(7).fill(BigInt(-1))),
      body: K.ARRAY('s64', new Array(7).fill(BigInt(-1))),
      hand: K.ARRAY('s64', new Array(7).fill(BigInt(-1))),
    },

    grade: K.ATTR({ sgid: '-1', dgid: '-1' }, { g: [] }),

    eisei_grade_data: { detail: [] },

    skin: K.ARRAY(
      's16',
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ),

    qprodata: K.ARRAY('u32', [0, 0, 0, 0, 0]),

    rlist: {},

    original_course: {},
    random_course: {},

    follow_data: {
      course_data: [],
    },

    ir_data: { e: [] },

    secret_course_data: { e: [] },

    classic_course_data: { score_data: [] },

    convention_course: { course_data: [] },

    dj_rank: [],

    dj_rank_ranking: [],

    notes_radar: [],

    tonjyutsu: K.ATTR({ platinum_pass: '0', black_pass: '0' }),

    shitei: K.ATTR(
      {
        have_master: '0',
        have_disciple: '0',
        clear_disciple: '0',
        discple_card_clear_num: '0',
        my_card_card_clear_num: '0',
      },
      { bingo_data: [] }
    ),

    weekly: K.ATTR({ wid: '0', mid: '0' }),

    weekly_score: [],

    join_shop: K.ATTR({
      joinflg: '0',
      join_cflg: '0',
      join_id: '0',
      join_name: '0',
    }),

    visitor: K.ATTR({ anum: '0', snum: '0', pnum: '0', vs_flg: '0' }),

    ...(profile.has('step') &&
      (() => {
        const stepMap = profile.getMap('step');
        return {
          step: K.ATTR(
            {
              enemy_damage: String(stepMap.getInt('enemy_damage')),
              progress: String(stepMap.getInt('progress')),
              total_point: String(stepMap.getInt('total_point')),
              enemy_defeat_flg: String(stepMap.getInt('enemy_defeat_flg')),
              sp_level: String(stepMap.getInt('sp_level')),
              dp_level: String(stepMap.getInt('dp_level')),
              mission_clear_num: String(stepMap.getInt('mission_clear_num')),
              sp_mplay: String(stepMap.getInt('sp_mplay')),
              dp_mplay: String(stepMap.getInt('dp_mplay')),
              tips_read_list: String(stepMap.getInt('tips_read_list')),
            },
            {
              is_track_ticket: K.ITEM(
                'bool',
                stepMap.getBool('is_track_ticket')
              ),
            }
          ),
        };
      })()),

    packinfo: K.ATTR({
      pack_id: '0',
      music_0: '0',
      music_1: '0',
      music_2: '0',
    }),

    achievements: K.ATTR(
      {
        pack: '0',
        pack_comp: '0',
        last_weekly: '0',
        weekly_num: '0',
        visit_flg: '0',
        rival_crush: '0',
      },
      {
        trophy: K.ARRAY('s64', new Array(20).fill(0)),
      }
    ),

    deller: K.ATTR({ deller: '0', rate: '0' }),

    orb_data: K.ATTR({ rest_orb: '0', present_orb: '0' }),

    expert_point: { detail: [] },

    pay_per_use_item: K.ATTR({ item_num: '0' }),

    present_pay_per_use_item: K.ATTR({ item_num: '0' }),

    qpro_ticket: K.ATTR({ ticket_num: '0', total_ticket_num: '0' }),

    old_linkage_secret_flg: K.ATTR({
      floor_infection4: '-1',
      bemani_janken: '-1',
      ichika_rush: '-1',
      nono_rush: '-1',
      song_battle: '-1',
    }),

    konami_stytle: K.ATTR({ skip_flg: '0' }),

    /*arena_data: K.ATTR(
      {
        play_num: '0',
        play_num_sp: '0',
        play_num_dp: '0',
        prev_best_class_sp: '0',
        prev_best_class_dp: '0',
      },
      {
        achieve_data: [],
        title_data: {},
        cube_data: K.ATTR({}),
        ranker_data: [],
        lose_data: [],
        chat_data: {},
        good_music_sp: { music: [] },
        bad_music_sp: { music: [] },
        good_music_dp: { music: [] },
        bad_music_dp: { music: [] },
        tendency: [],
        player_kind_data: K.ATTR({}),
        setting: K.ATTR({}),
        qpro_motion: K.ATTR({}),
      }
    ),*/

    // arena_penalty: {},

    tsujigiri: K.ATTR({ total_num_sp: '0', total_num_dp: '0' }),

    // tsujigiri_hidden_chara: {
    //   appearance_info: K.ATTR({}),
    //   defeat: K.ATTR({ defeat_flg: '0' }),
    //   total_defeat: { chara: [] },
    // },

    // weekly_result: K.ATTR({ week_id: '0', music_id: '0' }, { detail: [] }),

    skin_customize_flg: K.ATTR({
      skin_frame_flg: '0',
      skin_bgm_flg: '0',
      skin_lane_flg3: '0',
    }),

    // event_1: K.ATTR(
    //   {
    //     event_play_num: '0',
    //     last_select_platform_type: '0',
    //     last_select_platform_id: '0',
    //   },
    //   { plat_watch_data: [], ch_watch_data: [] }
    // ),

    // event1_rival_recommend: {
    //   rival: [],
    // },

    // event1_rival_bonus: {
    //   bonus: [],
    // },

    floor_infection4: K.ATTR({ music_list: '-1' }),
    bemani_vote: K.ATTR({ music_list: '-1' }),
    bemani_janken_meeting: K.ATTR({ music_list: '-1' }),
    bemani_rush: K.ATTR({ music_list_ichika: '-1', music_list_nono: '-1' }),
    ultimate_mobile_link: K.ATTR({ music_list: '-1' }, { link_flag: {} }),
    bemani_musiq_fes: K.ATTR({ music_list: '-1' }),
    busou_linkage: K.ATTR({ music_list: '-1' }),
    busou_linkage_2: K.ATTR({ music_list: '-1' }),
    valkyrie_linkage_2_data: K.ATTR({ progress: '0' }),
    bemani_song_battle: K.ATTR({ music_list: '-1' }),

    // player_compe: { compe_data: [] },

    /*news: K.ATTR(
      { disp_score_type: '0' },
      {
        news_data_all: K.ATTR({ last_read_time: '0' }, { detail: [] }),
        news_data_shop: K.ATTR({ last_read_time: '0' }, { detail: [] }),
        news_data_grade: K.ATTR({ last_read_time: '0' }, { detail: [] }),
        news_data_rival: K.ATTR({ last_read_time: '0' }, { detail: [] }),
        news_data_all_top: K.ATTR({ last_read_time: '0' }, { detail: [] }),
        news_data_area_top: K.ATTR({ last_read_time: '0' }, { detail: [] }),
        news_data_shop_top: K.ATTR({ last_read_time: '0' }, { detail: [] }),

        premium_news_data_all: K.ATTR({ last_read_time: '0' }, { detail: [] }),
        premium_news_data_shop: K.ATTR({ last_read_time: '0' }, { detail: [] }),
        premium_news_data_grade: K.ATTR(
          { last_read_time: '0' },
          { detail: [] }
        ),
        premium_news_data_rival: K.ATTR(
          { last_read_time: '0' },
          { detail: [] }
        ),
        premium_news_data_all_top: K.ATTR(
          { last_read_time: '0' },
          { detail: [] }
        ),
        premium_news_data_area_top: K.ATTR(
          { last_read_time: '0' },
          { detail: [] }
        ),
        premium_news_data_shop_top: K.ATTR(
          { last_read_time: '0' },
          { detail: [] }
        ),
      }
    ),*/

    language_setting: K.ATTR({ language: '0' }),
    movie_agreement: K.ATTR({ agreement_version: '0' }),
    movie_setting: {
      hide_name: K.ITEM('bool', false),
    },

    exam_data: [],

    world_tourism: { tour_data: [] },

    world_tourism_secret_flg: {
      flg1: K.ARRAY('s64', [BigInt(-1), BigInt(-1), BigInt(-1)]),
      flg2: K.ARRAY('s64', [BigInt(-1), BigInt(-1), BigInt(-1)]),
    },

    questionnaire: { questionnaire_data: [] },
  };
};

export const unformatProfile = (data: any, oldProfile: ValidatedMap) => {
  const newProfile = oldProfile;
  const attr = $(data).attr();

  const cltype = parseInt(attr.cltype);
  if (cltype === CLTYPE.SINGLE) newProfile.incrementInt('single_plays');
  if (cltype === CLTYPE.DOUBLE) newProfile.incrementInt('double_plays');

  newProfile.replaceInt('single_dj_points', parseInt(attr.s_achi));
  newProfile.replaceInt('double_dj_points', parseInt(attr.d_achi));

  newProfile.replaceBigInt('sp_opt', BigInt(attr.sp_opt));
  newProfile.replaceBigInt('dp_opt', BigInt(attr.dp_opt));
  newProfile.replaceBigInt('dp_opt2', BigInt(attr.dp_opt2));
  newProfile.replaceInt('gpos', parseInt(attr.gpos));
  newProfile.replaceInt('s_sorttype', parseInt(attr.s_sorttype));
  newProfile.replaceInt('d_sorttype', parseInt(attr.d_sorttype));
  newProfile.replaceInt('s_disp_judge', parseInt(attr.s_disp_judge));
  newProfile.replaceInt('d_disp_judge', parseInt(attr.d_disp_judge));
  newProfile.replaceInt('s_pace', parseInt(attr.s_pace));
  newProfile.replaceInt('d_pace', parseInt(attr.d_pace));
  newProfile.replaceInt('s_gno', parseInt(attr.s_gno));
  newProfile.replaceInt('d_gno', parseInt(attr.d_gno));
  newProfile.replaceInt('s_sub_gno', parseInt(attr.s_sub_gno));
  newProfile.replaceInt('d_sub_gno', parseInt(attr.d_sub_gno));
  newProfile.replaceInt('s_gtype', parseInt(attr.s_gtype));
  newProfile.replaceInt('d_gtype', parseInt(attr.d_gtype));
  newProfile.replaceInt('s_sdlen', parseInt(attr.s_sdlen));
  newProfile.replaceInt('d_sdlen', parseInt(attr.d_sdlen));
  newProfile.replaceInt('s_sdtype', parseInt(attr.s_sdtype));
  newProfile.replaceInt('d_sdtype', parseInt(attr.d_sdtype));
  newProfile.replaceInt('s_timing', parseInt(attr.s_timing));
  newProfile.replaceInt('d_timing', parseInt(attr.d_timing));
  newProfile.replaceFloat('s_notes', attr.s_notes);
  newProfile.replaceFloat('d_notes', attr.d_notes);
  newProfile.replaceInt('s_judge', parseInt(attr.s_judge));
  newProfile.replaceInt('d_judge', parseInt(attr.d_judge));
  newProfile.replaceInt('s_judgeAdj', parseInt(attr.s_judgeAdj));
  newProfile.replaceInt('d_judgeAdj', parseInt(attr.d_judgeAdj));
  newProfile.replaceFloat('s_hispeed', attr.s_hispeed);
  newProfile.replaceFloat('d_hispeed', attr.d_hispeed);
  newProfile.replaceInt('s_opstyle', parseInt(attr.s_opstyle));
  newProfile.replaceInt('d_opstyle', parseInt(attr.d_opstyle));
  newProfile.replaceInt('s_graph_score', parseInt(attr.s_graph_score));
  newProfile.replaceInt('d_graph_score', parseInt(attr.d_graph_score));
  newProfile.replaceInt('s_auto_scrach', parseInt(attr.s_auto_scrach));
  newProfile.replaceInt('d_auto_scrach', parseInt(attr.d_auto_scrach));
  newProfile.replaceInt('s_gauge_disp', parseInt(attr.s_gauge_disp));
  newProfile.replaceInt('d_gauge_disp', parseInt(attr.d_gauge_disp));
  newProfile.replaceInt('s_lane_brignt', parseInt(attr.s_lane_brignt));
  newProfile.replaceInt('d_lane_brignt', parseInt(attr.d_lane_brignt));
  newProfile.replaceInt('s_camera_layout', parseInt(attr.s_camera_layout));
  newProfile.replaceInt('d_camera_layout', parseInt(attr.d_camera_layout));
  newProfile.replaceInt('s_ghost_score', parseInt(attr.s_ghost_score));
  newProfile.replaceInt('d_ghost_score', parseInt(attr.d_ghost_score));
  newProfile.replaceInt('s_tsujigiri_disp', parseInt(attr.s_tsujigiri_disp));
  newProfile.replaceInt('d_tsujigiri_disp', parseInt(attr.d_tsujigiri_disp));
  newProfile.replaceInt('s_auto_adjust', parseInt(attr.s_auto_adjust));
  newProfile.replaceInt('d_auto_adjust', parseInt(attr.d_auto_adjust));
  newProfile.replaceInt('s_lift', parseInt(attr.s_lift));
  newProfile.replaceInt('d_lift', parseInt(attr.d_lift));
  newProfile.replaceInt('mode', parseInt(attr.mode));
  newProfile.replaceInt('pmode', parseInt(attr.pmode));
  newProfile.replaceInt('ngrade', parseInt(attr.ngrade));
  newProfile.replaceInt('rtype', parseInt(attr.rtype));

  const lightningPlayData = $(data).element('lightning_play_data');
  if (lightningPlayData) {
    if (cltype === CLTYPE.SINGLE)
      newProfile.incrementInt('lightning_single_plays');
    if (cltype === CLTYPE.DOUBLE)
      newProfile.incrementInt('lightning_double_plays');
  }

  const lightningSetting = $(data).element('lightning_setting');
  if (lightningSetting) {
    const lightningMap = newProfile.getMap('lightning');
    lightningMap.replaceInt(
      'headphone_vol',
      parseInt(lightningSetting.attr().headphone_vol)
    );
    lightningMap.replaceInt(
      'resistance_sp_left',
      parseInt(lightningSetting.attr().resistance_sp_left)
    );
    lightningMap.replaceInt(
      'resistance_sp_right',
      parseInt(lightningSetting.attr().resistance_sp_right)
    );
    lightningMap.replaceInt(
      'resistance_dp_left',
      parseInt(lightningSetting.attr().resistance_dp_left)
    );
    lightningMap.replaceInt(
      'resistance_dp_right',
      parseInt(lightningSetting.attr().resistance_dp_right)
    );
    lightningMap.replaceIntArray(
      'slider',
      7,
      lightningSetting.numbers('slider')
    );
    lightningMap.replaceBoolArray(
      'light',
      10,
      lightningSetting.numbers('light')
    );
    lightningMap.replaceBool(
      'concentration',
      lightningSetting.bool('concentration')
    );
    newProfile.replaceMap('lightning', lightningMap);
  }

  const lightningCustomizeFlg = $(data).element('lightning_customize_flg');
  if (lightningCustomizeFlg) {
    const lightningMap = newProfile.getMap('lightning');
    lightningMap.replaceInt(
      'flg_skin_0',
      parseInt(lightningCustomizeFlg.attr().flg_skin_0)
    );
    newProfile.replaceMap('lightning', lightningMap);
  }

  const secret = $(data).element('secret');
  if (secret) {
    const secretMap = newProfile.getMap('secret');
    secretMap.replaceBigIntArray('flg1', 3, secret.bigints('flg1'));
    secretMap.replaceBigIntArray('flg2', 3, secret.bigints('flg2'));
    secretMap.replaceBigIntArray('flg3', 3, secret.bigints('flg3'));
    newProfile.replaceMap('secret', secretMap);
  }

  const leggendaria = $(data).element('leggendaria');
  if (leggendaria) {
    const leggendariaMap = newProfile.getMap('leggendaria');
    leggendariaMap.replaceBigIntArray('flg1', 3, leggendaria.bigints('flg1'));
    newProfile.replaceMap('leggendaria', leggendariaMap);
  }

  const favorite = $(data).element('favorite');
  if (favorite) {
    const favoriteMap = newProfile.getMap('favorite');
    favoriteMap.replaceBytes('sp_mlist', favorite.buffer('sp_mlist'));
    favoriteMap.replaceBytes('sp_clist', favorite.buffer('sp_clist'));
    favoriteMap.replaceBytes('dp_mlist', favorite.buffer('dp_mlist'));
    favoriteMap.replaceBytes('dp_clist', favorite.buffer('dp_clist'));
    newProfile.replaceMap('favorite', favoriteMap);
  }

  const extraFavorites = $(data).elements('extra_favorite');

  const musicMemo = $(data).element('music_memo');
  if (musicMemo) {
    const musicMemos = newProfile.get('music_memo') ?? [];
    for (const music of musicMemo.elements('music')) {
      const index = parseInt(music.attr().index);
      const playStyle = parseInt(music.attr().play_style);
      const musicId = parseInt(music.attr().music_id);
      if (musicMemos[playStyle] == null) musicMemos[playStyle] = [];
      musicMemos[playStyle][index] = musicId;
    }
    newProfile.set('music_memo', musicMemos);
  }

  const qproSecret = $(data).element('qpro_secret');
  if (qproSecret) {
    const qpro = newProfile.getMap('qpro');
    qpro.replaceBigIntArray('head_secret', 7, qproSecret.bigints('head'));
    qpro.replaceBigIntArray('hair_secret', 7, qproSecret.bigints('hair'));
    qpro.replaceBigIntArray('face_secret', 7, qproSecret.bigints('face'));
    qpro.replaceBigIntArray('body_secret', 7, qproSecret.bigints('body'));
    qpro.replaceBigIntArray('hand_secret', 7, qproSecret.bigints('hand'));
    newProfile.replaceMap('qpro', qpro);
  }

  const qproEquip = $(data).element('qpro_equip');
  if (qproEquip) {
    const qpro = newProfile.getMap('qpro');
    qpro.replaceInt('head_equip', parseInt(qproEquip.attr().head));
    qpro.replaceInt('hair_equip', parseInt(qproEquip.attr().hair));
    qpro.replaceInt('face_equip', parseInt(qproEquip.attr().face));
    qpro.replaceInt('body_equip', parseInt(qproEquip.attr().body));
    qpro.replaceInt('hand_equip', parseInt(qproEquip.attr().hand));
    newProfile.replaceMap('qpro', qpro);
  }

  const step = $(data).element('step');
  if (step) {
    const stepMap = newProfile.getMap('step');
    stepMap.replaceInt('enemy_damage', parseInt(step.attr().enemy_damage));
    stepMap.replaceInt('progress', parseInt(step.attr().progress));
    stepMap.replaceInt('total_point', parseInt(step.attr().total_point));
    stepMap.replaceInt(
      'enemy_defeat_flg',
      parseInt(step.attr().enemy_defeat_flg)
    );
    stepMap.replaceInt('sp_level', parseInt(step.attr().sp_level));
    stepMap.replaceInt('dp_level', parseInt(step.attr().dp_level));
    stepMap.replaceInt(
      'mission_clear_num',
      parseInt(step.attr().mission_clear_num)
    );
    stepMap.replaceInt('sp_mplay', parseInt(step.attr().sp_mplay));
    stepMap.replaceInt('dp_mplay', parseInt(step.attr().dp_mplay));
    stepMap.replaceInt('tips_read_list', parseInt(step.attr().tips_read_list));
    stepMap.replaceBool('is_track_ticket', step.bool('is_track_ticket'));
    newProfile.replaceMap('step', stepMap);
  }

  const achievements = $(data).element('achievements');
  if (achievements) {
    const achievementsMap = newProfile.getMap('achievements');
    achievementsMap.replaceInt(
      'last_weekly',
      parseInt(achievements.attr().last_weekly)
    );
    achievementsMap.replaceInt(
      'weekly_num',
      parseInt(achievements.attr().weekly_num)
    );
    achievementsMap.replaceBigInt(
      'visit_flg',
      BigInt(achievements.attr().visit_flg)
    );
    newProfile.replaceMap('achievements', achievementsMap);
    const trophy = achievements.bigints('trophy');
    if (trophy) {
      newProfile.replaceBigIntArray('trophy', 160, trophy);
    }
  }

  const expert_point = $(data).elements('expert_point');

  const djRank = $(data).elements('dj_rank');

  const notesRadar = $(data).elements('notes_radar');

  const deller = $(data).element('deller');
  if (deller) {
    newProfile.replaceInt(
      'deller',
      newProfile.getInt('deller') + parseInt(deller.attr().deller)
    );
  }

  const orbData = $(data).element('orb_data');
  if (orbData) {
    const usedVIPPass = orbData.bool('use_vip_pass');
    newProfile.replaceInt(
      'orbs',
      usedVIPPass ? 0 : parseInt(orbData.attr().add_orb)
    );
  }

  const konamiStyle = $(data).element('konami_style');
  if (konamiStyle) {
    newProfile.replaceInt(
      'konami_style_skip_flg',
      parseInt(konamiStyle.attr().skip_flg)
    );
  }

  const skinCustomizeFlg = $(data).element('skin_customize_flg');
  if (skinCustomizeFlg) {
    const skinCustomizeFlgMap = newProfile.getMap('skin_customize_flg');
    skinCustomizeFlgMap.replaceBigInt(
      'skin_frame_flg',
      BigInt(skinCustomizeFlg.attr().skin_frame_flg)
    );
    skinCustomizeFlgMap.replaceBigInt(
      'skin_bgm_flg',
      BigInt(skinCustomizeFlg.attr().skin_bgm_flg)
    );
    skinCustomizeFlgMap.replaceBigInt(
      'skin_lane_flg3',
      BigInt(skinCustomizeFlg.attr().skin_lane_flg3)
    );
    newProfile.replaceMap('skin_customize_flg', skinCustomizeFlgMap);
  }

  const languageSetting = $(data).element('language_setting');
  if (languageSetting) {
    newProfile.replaceInt(
      'language',
      parseInt(languageSetting.attr().language)
    );
  }

  const movieAgreement = $(data).element('movie_agreement');
  if (movieAgreement) {
    newProfile.replaceInt(
      'movie_agreement_version',
      parseInt(movieAgreement.attr().agreement_version)
    );
  }

  const movieSetting = $(data).element('movie_setting');
  if (movieSetting) {
    newProfile.replaceBool('movie_hide_name', movieSetting.bool('hide_name'));
  }

  const worldTourismSecretFlg = $(data).element('world_tourism_secret_flg');
  if (worldTourismSecretFlg) {
    const worldTourismMap = newProfile.getMap('world_tourism');
    worldTourismMap.replaceBigIntArray(
      'secret_flg1',
      3,
      worldTourismSecretFlg.bigints('flg1')
    );
    worldTourismMap.replaceBigIntArray(
      'secret_flg2',
      3,
      worldTourismSecretFlg.bigints('flg2')
    );
    newProfile.replaceMap('world_tourism', worldTourismMap);
  }

  // const qproSecret = $(data).element('qpro_secret');
  // if (qproSecret) {
  //   const qproSecretMap = newProfile.getMap('qpro_secret');
  //   qproSecretMap.replaceBigIntArray('head', 7, qproSecret.bigints('haed'));
  //   qproSecretMap.replaceBigIntArray('hair', 7, qproSecret.bigints('hair'));
  //   qproSecretMap.replaceBigIntArray('face', 7, qproSecret.bigints('face'));
  //   qproSecretMap.replaceBigIntArray('body', 7, qproSecret.bigints('body'));
  //   qproSecretMap.replaceBigIntArray('hand', 7, qproSecret.bigints('hand'));
  //   console.dir(qproSecretMap);
  //   newProfile.replaceMap('qpro_secret', qproSecretMap);
  // }

  // const step = $(data).element('step');
  // if (step) {
  //   const stepMap = newProfile.getMap('step');
  //   stepMap.replaceInt('progress', parseInt(step.attr().progress));
  //   stepMap.replaceInt('enemy_damage', parseInt(step.attr().enemy_damage));
  //   stepMap.replaceInt('tips_read_list', parseInt(step.attr().tips_read_list));
  //   stepMap.replaceInt('sp_level', parseInt(step.attr().sp_level));
  //   stepMap.replaceInt('dp_level', parseInt(step.attr().dp_level));
  //   stepMap.replaceInt('sp_mplay', parseInt(step.attr().sp_mplay));
  //   stepMap.replaceInt('dp_mplay', parseInt(step.attr().dp_mplay));
  //   stepMap.replaceInt(
  //     'sp_mission_point',
  //     parseInt(step.attr().sp_mission_point)
  //   );
  //   stepMap.replaceInt(
  //     'dp_mission_point',
  //     parseInt(step.attr().dp_mission_point)
  //   );
  //   stepMap.replaceInt(
  //     'sp_dj_mission_level',
  //     parseInt(step.attr().sp_dj_mission_level)
  //   );
  //   stepMap.replaceInt(
  //     'dp_dj_mission_level',
  //     parseInt(step.attr().dp_dj_mission_level)
  //   );
  //   stepMap.replaceInt(
  //     'sp_dj_mission_clear',
  //     parseInt(step.attr().sp_dj_mission_clear)
  //   );
  //   stepMap.replaceInt(
  //     'dp_dj_mission_clear',
  //     parseInt(step.attr().dp_dj_mission_clear)
  //   );
  //   stepMap.replaceInt(
  //     'sp_clear_mission_level',
  //     step.attr().sp_clear_mission_level
  //   );
  //   stepMap.replaceInt(
  //     'dp_clear_mission_level',
  //     step.attr().dp_clear_mission_level
  //   );
  //   stepMap.replaceInt(
  //     'sp_clear_mission_clear',
  //     step.attr().sp_clear_mission_clear
  //   );
  //   stepMap.replaceInt(
  //     'dp_clear_mission_clear',
  //     step.attr().dp_clear_mission_clear
  //   );
  //   stepMap.replaceBool('is_track_ticket', step.bool('is_track_ticket'));
  //   newProfile.replaceMap('step', stepMap);
  // }

  console.dir(newProfile, { depth: null });

  return newProfile;
};
