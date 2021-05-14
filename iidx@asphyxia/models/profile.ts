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
    flg1?: number[];
    flg2?: number[];
    flg3?: number[];
    flg4?: number[];
  },

  leggendaria?: {
    flg1?: number[];
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
    head?: number[];
    hair?: number[];
    face?: number[];
    body?: number[];
    hand?: number[];
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
    trophy?: number[];
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
    present_orb?: number;
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

  skin_customize_flg?: {
    skin_frame_flg?: string;
    skin_bgm_flg?: string;
  };

  news?: {
    last_read_time?: number[];
  };

  language_setting?: {
    language?: string;
  };

  movie_agreement?: {
    agreement_version?: string;
  };

  movie_setting?: {
    hide_name?: boolean;
  };

  extra_boss_event?: {
    key_orb?: string;
    boss_orb_0?: string;
    boss_orb_1?: string;
    boss_orb_2?: string;
    boss_orb_3?: string;
    boss_orb_4?: string;
    boss_orb_5?: string;
    boss_orb_6?: string;
    boss_orb_7?: string;

    onemore?: {
      gauge?: string;
      challenge_num_0_n?: string;
      challenge_num_0_h?: string;
      challenge_num_0_a?: string;
      challenge_num_1_n?: string;
      challenge_num_1_h?: string;
      challenge_num_1_a?: string;
      challenge_num_2_n?: string;
      challenge_num_2_h?: string;
      challenge_num_2_a?: string;
      defeat_flg_0_n?: boolean;
      defeat_flg_0_h?: boolean;
      defeat_flg_0_a?: boolean;
      defeat_flg_1_n?: boolean;
      defeat_flg_1_h?: boolean;
      defeat_flg_1_a?: boolean;
      defeat_flg_2_n?: boolean;
      defeat_flg_2_h?: boolean;
      defeat_flg_2_a?: boolean;
    }
  };

  valkyrie_linkage_data?: {
    progress?: boolean;
  }

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

  event_1_28?: {
    event_play_num?: number;
    story_prog?: number;
    last_select_area_id?: number;
    failed_num?: number;

    area_data?: {
      area_id?: number;
      play_num?: number;
      recipe_prog0?: number;
      recipe_prog1?: number;
      recipe_prog2?: number;
      recipe_prog3?: number;
      recipe_prog4?: number;
      operation_num?: number;
      operation_prog?: number;
      last_select_recipe?: number;
      area_prog?: number;
      is_complete?: boolean;
    }[];
  };
}
