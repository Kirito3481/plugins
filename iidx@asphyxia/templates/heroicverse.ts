import { ID } from '../utils/id';
import { ValidatedMap } from '../utils/validatedMap';

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
      s_liflen: String(profile.getInt('s_liflen')),
      d_liflen: String(profile.getInt('d_liflen')),
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
  };
};

export const unformatProfile = (data: any, oldProfile: ValidatedMap) => {
  const newProfile = oldProfile;

  return newProfile;
};
