import { ID } from '../utils/id';
import { CLTYPE } from '../utils/constants';
import { ValidatedMap } from '../utils/validatedMap';

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
    }
  );

export const formatProfile = (profile: ValidatedMap) => {
  return {
    pcdata: K.ATTR({
      id: String(profile.getInt('extid')),
      idstr: String(ID.foramtExtId(profile.getInt('extid'))),
      name: profile.getStr('name'),
      pid: String(profile.getInt('pid')),
      spnum: String(profile.getInt('single_plays')),
      dpnum: String(profile.getInt('double_plays')),
      sach: String(profile.getInt('single_dj_points')),
      dach: String(profile.getInt('double_dj_points')),
      mode: String(profile.getInt('mode')),
      pmode: String(profile.getInt('pmode')),
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
    }),

    grade: K.ATTR({ sgid: '-1', dgid: '-1' }, { g: [] }),

    rlist: {},

    ea_premium_course: {},

    floor_infection3: K.ATTR({ music_list: '-1' }),
    bemani_vote: K.ATTR({ music_list: '-1' }),

    secret: {
      flg1: K.ARRAY('s64', [BigInt(-1), BigInt(-1), BigInt(-1)]),
      flg2: K.ARRAY('s64', [BigInt(-1), BigInt(-1), BigInt(-1)]),
      flg3: K.ARRAY('s64', [BigInt(-1), BigInt(-1), BigInt(-1)]),
    },

    ...(profile.has('step') &&
      (() => {
        const stepMap = profile.getMap('step');
        return {
          step: K.ATTR(
            {
              enemy_damage: String(stepMap.getInt('enemy_damage')),
              progress: String(stepMap.getInt('progress')),
              sp_level: String(stepMap.getInt('sp_level')),
              dp_level: String(stepMap.getInt('dp_level')),
              sp_mission_point: String(stepMap.getInt('sp_mission_point')),
              dp_mission_point: String(stepMap.getInt('dp_mission_point')),
              sp_dj_mission_level: String(
                stepMap.getInt('sp_dj_mission_level')
              ),
              dp_dj_mission_level: String(
                stepMap.getInt('dp_dj_mission_level')
              ),
              sp_clear_mission_level: String(
                stepMap.getInt('sp_clear_mission_level')
              ),
              dp_clear_mission_level: String(
                stepMap.getInt('dp_clear_mission_level')
              ),
              sp_dj_mission_clear: String(
                stepMap.getInt('sp_dj_mission_clear')
              ),
              dp_dj_mission_clear: String(
                stepMap.getInt('dp_dj_mission_clear')
              ),
              sp_clear_mission_clear: String(
                stepMap.getInt('sp_clear_mission_clear')
              ),
              dp_clear_mission_clear: String(
                stepMap.getInt('dp_clear_mission_clear')
              ),
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

    // achievements: K.ATTR({
    //   pack:
    // }),

    deller: K.ATTR({ deller: String(profile.getInt('deller')), rate: '1.0' }),
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

  newProfile.replaceInt('mode', parseInt(attr.mode));
  newProfile.replaceInt('pmode', parseInt(attr.pmode));
  newProfile.replaceInt('rtype', parseInt(attr.rtype));
  newProfile.replaceInt('sp_opt', parseInt(attr.sp_opt));
  newProfile.replaceInt('sp_opt', parseInt(attr.sp_opt));
  newProfile.replaceInt('dp_opt', parseInt(attr.dp_opt));
  newProfile.replaceInt('dp_opt2', parseInt(attr.dp_opt2));
  newProfile.replaceInt('gpos', parseInt(attr.gpos));
  newProfile.replaceInt('s_sorttype', parseInt(attr.s_sorttype));
  newProfile.replaceInt('d_sorttype', parseInt(attr.d_sorttype));
  newProfile.replaceInt('s_pace', parseInt(attr.s_pace));
  newProfile.replaceInt('d_pace', parseInt(attr.d_pace));
  newProfile.replaceInt('s_gno', parseInt(attr.s_gno));
  newProfile.replaceInt('d_gno', parseInt(attr.d_gno));
  newProfile.replaceInt('s_gtype', parseInt(attr.s_gtype));
  newProfile.replaceInt('d_gtype', parseInt(attr.d_gtype));
  newProfile.replaceInt('s_sdlen', parseInt(attr.s_sdlen));
  newProfile.replaceInt('d_sdlen', parseInt(attr.d_sdlen));
  newProfile.replaceInt('s_sdtype', parseInt(attr.s_sdtype));
  newProfile.replaceInt('d_sdtype', parseInt(attr.d_sdtype));
  newProfile.replaceInt('s_timing', parseInt(attr.s_timing));
  newProfile.replaceInt('d_timing', parseInt(attr.d_timing));
  newProfile.replaceFloat('s_notes', parseFloat(attr.s_notes));
  newProfile.replaceFloat('d_notes', parseFloat(attr.d_notes));
  newProfile.replaceInt('s_judge', parseInt(attr.s_judge));
  newProfile.replaceInt('d_judge', parseInt(attr.d_judge));
  newProfile.replaceInt('s_judgeAdj', parseInt(attr.s_judgeAdj));
  newProfile.replaceInt('d_judgeAdj', parseInt(attr.d_judgeAdj));
  newProfile.replaceFloat('s_hispeed', parseFloat(attr.s_hispeed));
  newProfile.replaceFloat('d_hispeed', parseFloat(attr.d_hispeed));
  newProfile.replaceInt('s_lift', parseInt(attr.s_lift));
  newProfile.replaceInt('d_lift', parseInt(attr.d_lift));
  newProfile.replaceInt('s_disp_judge', parseInt(attr.s_disp_judge));
  newProfile.replaceInt('d_disp_judge', parseInt(attr.d_disp_judge));
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

  const secret = $(data).element('secret');
  if (secret) {
    const secretMap = newProfile.getMap('secret');
    secretMap.replaceBigIntArray('flg1', 3, secret.bigints('flg1'));
    secretMap.replaceBigIntArray('flg1', 3, secret.bigints('flg2'));
    secretMap.replaceBigIntArray('flg1', 3, secret.bigints('flg3'));
    newProfile.replaceMap('secret', secretMap);
  }

  const achievements = $(data).element('achievements');
  if (achievements) {
    newProfile.replaceBigInt(
      'visit_flg',
      BigInt(achievements.attr().visit_flg)
    );
    newProfile.replaceInt(
      'weekly_num',
      parseInt(achievements.attr().weekly_num)
    );
    newProfile.replaceInt(
      'last_weekly',
      parseInt(achievements.attr().last_weekly)
    );

    const trophy = achievements.bigints('trophy');
    if (trophy) {
      newProfile.replaceBigIntArray('trophy', 160, trophy);
    }
  }

  const deller = $(data).element('deller');
  if (deller) {
    newProfile.replaceInt(
      'deller',
      newProfile.getInt('deller') + parseInt(deller.attr().deller)
    );
  }

  const qproSecret = $(data).element('qpro_secret');
  if (qproSecret) {
    const qproSecretMap = newProfile.getMap('qpro_secret');
    qproSecretMap.replaceBigIntArray('head', 7, qproSecret.bigints('haed'));
    qproSecretMap.replaceBigIntArray('hair', 7, qproSecret.bigints('hair'));
    qproSecretMap.replaceBigIntArray('face', 7, qproSecret.bigints('face'));
    qproSecretMap.replaceBigIntArray('body', 7, qproSecret.bigints('body'));
    qproSecretMap.replaceBigIntArray('hand', 7, qproSecret.bigints('hand'));
    console.dir(qproSecretMap);
    newProfile.replaceMap('qpro_secret', qproSecretMap);
  }

  const step = $(data).element('step');
  if (step) {
    const stepMap = newProfile.getMap('step');
    stepMap.replaceInt('progress', parseInt(step.attr().progress));
    stepMap.replaceInt('enemy_damage', parseInt(step.attr().enemy_damage));
    stepMap.replaceInt('tips_read_list', parseInt(step.attr().tips_read_list));
    stepMap.replaceInt('sp_level', parseInt(step.attr().sp_level));
    stepMap.replaceInt('dp_level', parseInt(step.attr().dp_level));
    stepMap.replaceInt('sp_mplay', parseInt(step.attr().sp_mplay));
    stepMap.replaceInt('dp_mplay', parseInt(step.attr().dp_mplay));
    stepMap.replaceInt(
      'sp_mission_point',
      parseInt(step.attr().sp_mission_point)
    );
    stepMap.replaceInt(
      'dp_mission_point',
      parseInt(step.attr().dp_mission_point)
    );
    stepMap.replaceInt(
      'sp_dj_mission_level',
      parseInt(step.attr().sp_dj_mission_level)
    );
    stepMap.replaceInt(
      'dp_dj_mission_level',
      parseInt(step.attr().dp_dj_mission_level)
    );
    stepMap.replaceInt(
      'sp_dj_mission_clear',
      parseInt(step.attr().sp_dj_mission_clear)
    );
    stepMap.replaceInt(
      'dp_dj_mission_clear',
      parseInt(step.attr().dp_dj_mission_clear)
    );
    stepMap.replaceInt(
      'sp_clear_mission_level',
      step.attr().sp_clear_mission_level
    );
    stepMap.replaceInt(
      'dp_clear_mission_level',
      step.attr().dp_clear_mission_level
    );
    stepMap.replaceInt(
      'sp_clear_mission_clear',
      step.attr().sp_clear_mission_clear
    );
    stepMap.replaceInt(
      'dp_clear_mission_clear',
      step.attr().dp_clear_mission_clear
    );
    stepMap.replaceBool('is_track_ticket', step.bool('is_track_ticket'));
    newProfile.replaceMap('step', stepMap);
  }

  console.dir(newProfile, { depth: null });

  return newProfile;
};
