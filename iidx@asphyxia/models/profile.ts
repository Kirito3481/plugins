export interface Profile {
  collection: 'profile';

  iidxId: number;
  name: string;
  pid: number;

  pcdata?: {
    singlePlayNum?: string;
    doublePlayNum?: string;
    singleDJPoints?: string;
    doubleDJPoints?: string;
    mode?: string;
    pmode?: string;
    ngrade?: string;
    rtype?: string;
    sp_opt?: string;
    dp_opt?: string;
    dp_opt2?: string;
    gpos?: string;
    s_sorttype?: string;
    d_sorttype?: string;
    s_pace?: string;
    d_pace?: string;
    s_gno?: string;
    d_gno?: string;
    s_sub_gno?: string;
    d_sub_gno?: string;
    s_gtype?: string;
    d_gtype?: string;
    s_sdlen?: string;
    d_sdlen?: string;
    s_sdtype?: string;
    d_sdtype?: string;
    s_timing?: string;
    d_timing?: string;
    s_notes?: string;
    d_notes?: string;
    s_judge?: string;
    d_judge?: string;
    s_judgeAdj?: string;
    d_judgeAdj?: string;
    s_hispeed?: string;
    d_hispeed?: string;
    s_liflen?: string;
    d_liflen?: string;
    s_disp_judge?: string;
    d_disp_judge?: string;
    s_opstyle?: string;
    d_opstyle?: string;
    s_graph_score?: string;
    d_graph_score?: string;
    s_auto_scrach?: string;
    d_auto_scrach?: string;
    s_gauge_disp?: string;
    d_gauge_disp?: string;
    s_lane_brignt?: string;
    d_lane_brignt?: string;
    s_camera_layout?: string;
    d_camera_layout?: string;
    s_ghost_score?: string;
    d_ghost_score?: string;
    s_tsujigiri_disp?: string;
    d_tsujigiri_disp?: string;
  };

  lightning?: {
    playData?: {
      spnum?: string;
      dpnum?: string;
    },

    setting?: {
      headphoneVolume?: string;
      resistance_sp_left?: string;
      resistance_sp_right?: string;
      resistance_dp_left?: string;
      resistance_dp_right?: string;
      effectSlider?: number[];
      light?: number[];
      concentration?: boolean;
    },

    customize?: {
      skin_0?: string;
      flg_skin_0?: string;
    }
  }

  grade?: {
    sgid?: string;
    dgid?: string;

    gradeList?: number[][];
  },

  secret?: {
    flg1?: bigint[];
    flg2?: bigint[];
    flg3?: bigint[];
    flg4?: bigint[];
  },

  leggendaria?: {
    flg1?: bigint[];
  },

  favorite?: {
    sp_mlist?: Buffer;
    sp_clist?: Buffer;
    dp_mlist?: Buffer;
    dp_clist?: Buffer;
  },

  music_memo?: {
    music_id: number;
    play_style: number;
  }[];

  qpro_secret?: {
    head?: bigint[];
    hair?: bigint[];
    face?: bigint[];
    body?: bigint[];
    hand?: bigint[];
  };

  qpro?: {
    head?: number;
    hair?: number;
    face?: number;
    body?: number;
    hand?: number;
  };

  achievements?: {
    pack_id?: string;
    pack_flg?: string;
    play_pack?: string;
    pack_comp?: string;
    last_weekly?: string;
    weekly_num?: string;
    visit_flg?: string;
    trophy?: bigint[];
  };

  dj_rank?: {
    sp?: {
      rank?: number[];
      point?: number[];
    };
    dp?: {
      rank?: number[];
      point?: number[];
    };
  };

  notes_radar?: {
    sp?: number[];
    dp?: number[];
  };

  tonjyutsu?: {
    platinum_pass?: string;
    black_pass?: string;
  };

  shitei?: {
    shitei_agreement?: boolean;
    master_id?: string;
    disciple_id?: string;
  };

  deller?: string;

  orb_data?: {
    orb?: number;
  };

  pay_per_use_item?: {
    consume_num?: number;
    consume_details?: {
      consume_type: number;
      consume_num: number;
    }[];
  };

  present_pay_per_use_item?: {
    consume_num?: number;
    consume_details?: {
      consume_type: number;
      consume_num: number;
    }[];
  };

  qpro_ticket?: {
    total_ticket_num?: number;
    ticket_num?: number;
  };

  konami_style?: {
    skip_flg?: string;
  };

  step_28?: {
    enemy_damage?: string;
    progress?: string;
    sp_level?: string;
    dp_level?: string;
    sp_mission_point?: string;
    dp_mission_point?: string;
    sp_dj_mission_level?: string;
    dp_dj_mission_level?: string;
    sp_clear_mission_level?: string;
    dp_clear_mission_level?: string;
    sp_dj_mission_clear?: string;
    dp_dj_mission_clear?: string;
    sp_clear_mission_clear?: string;
    dp_clear_mission_clear?: string;
    sp_mplay?: string;
    dp_mplay?: string;
    tips_read_list?: string;
    is_track_ticket?: boolean;
  };
}
