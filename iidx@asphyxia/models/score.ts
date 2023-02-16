import { ValidatedMap } from '../utils/validatedMap';
import { ProfileDoc } from './profile';

export interface ScoreDoc {
  collection: 'score';

  musicId: number;
  chartId: number;
  score: number;
  data?: any;

  timestamp: number;
  update: number;
}

export interface ScoreHistory {
  collection: 'score_history';

  musicId: number;
  chartId: number;
  score: number;
  data?: any;
  newRecord: boolean;

  timestamp: number;
}

export enum ChartType {
  N7,
  H7,
  A7,
  L7,
  N14,
  H14,
  A14,
  L14,
  B7,
  B14,
}

export enum ClearStatus {
  NO_PLAY = 50,
  FAILED = 100,
  ASSIST_CLEAR = 200,
  EASY_CLEAR = 300,
  CLEAR = 400,
  HARD_CLEAR = 500,
  EX_HARD_CLEAR = 600,
  FULL_COMBO = 700,
}

export class Score {
  id: number;
  chartId: number;
  score: number;
  createdAt: number;
  updatedAt: number;
  plays: number;
  data: ValidatedMap;
  constructor(
    musicId: number,
    chartId: number,
    score: number,
    createdAt: number,
    updatedAt: number,
    plays: number,
    scoredata: any
  ) {
    this.id = musicId;
    this.chartId = chartId;
    this.score = score;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.plays = plays;
    this.data = new ValidatedMap(scoredata);
  }
}

export const getScores = async (
  refId: string,
  since?: number,
  until?: number
) => {
  const score = await DB.Find<ScoreDoc>(refId, {
    collection: 'score',
    ...(since != null && { update: { $gte: since } }),
    ...(until != null && { update: { $lt: until } }),
  });

  const scores = [];

  for (const result of score) {
    const plays = await DB.Count<ScoreHistory>(refId, {
      collection: 'score_history',
      musicId: result.musicId,
    });
    scores.push(
      new Score(
        result.musicId,
        result.chartId,
        result.score,
        result.timestamp,
        result.update,
        plays,
        result.data
      )
    );
  }

  return scores;
};

export const getClearRates = async (musicId?: number, chartId?: number) => {
  const allHistorys = await DB.Find<ScoreHistory>(null, {
    collection: 'score_history',
    musicId,
    chartId,
  });

  console.dir(allHistorys);
  // const historys = {};

  // for (const history of allHistorys) {
  //   if (history.data.getInt(""))
  // }
};

export const updateScore = async (
  extId: number,
  musicId: number,
  chartId: number,
  clearStatus: number,
  pgreats: number,
  greats: number,
  missCount: number,
  ghost?: Buffer
) => {
  const refId = (
    await DB.FindOne<ProfileDoc>(null, {
      collection: 'profile',
      extId,
    })
  )?.__refid;
  let exScore = 2 * pgreats + greats;

  let oldScore: ScoreDoc | null;
  if (refId != null) {
    if (ghost == null) throw new Error('No ghost for user score save!');

    oldScore = await DB.FindOne<ScoreDoc>(refId, {
      collection: 'score',
      musicId,
      chartId,
    });
  } else {
    if (ghost != null) throw new Error('Expected no ghost for score save!');
    oldScore = null;
  }

  const history = new ValidatedMap({
    clear_status: clearStatus,
    miss_count: missCount,
  });
  const oldExScore = exScore;

  if (ghost != null) {
    history.set('ghost', ghost);
  }

  let scoredata;
  let raised: boolean;
  let highscore: boolean;
  if (oldScore == null) {
    scoredata = new ValidatedMap({
      clear_status: clearStatus,
      pgreats,
      greats,
    });
    if (missCount !== -1) {
      scoredata.replaceInt('miss_count', missCount);
    }
    if (ghost != null) {
      scoredata.set('ghost', ghost);
    }
    raised = true;
    highscore = true;
  } else {
    raised = exScore > oldScore.score;
    highscore = exScore >= oldScore.score;
    exScore = Math.max(exScore, oldScore.score);
    scoredata = new ValidatedMap(oldScore.data);
    scoredata.replaceInt(
      'clear_status',
      Math.max(scoredata.getInt('clear_status'), clearStatus)
    );
    if (missCount !== -1) {
      if (scoredata.getInt('miss_count', -1) === -1) {
        scoredata.replaceInt('miss_count', missCount);
      } else {
        scoredata.replaceInt(
          'miss_count',
          Math.min(scoredata.getInt('miss_count'), missCount)
        );
      }
    }
    if (raised) {
      scoredata.replaceInt('pgreats', pgreats);
      scoredata.replaceInt('greats', greats);
      if (ghost != null) {
        scoredata.replaceBytes('ghost', ghost);
      }
    }
  }

  if (refId != null) {
    await putScore(refId, musicId, chartId, exScore, scoredata, highscore);
  }

  await putHistory(refId, musicId, chartId, oldExScore, history, raised);
};

const putScore = async (
  refId: string,
  musicId: number,
  chartId: number,
  score: number,
  data: any,
  newRecord: boolean
) => {
  const timestamp = Date.now();

  const dataObj = {};
  data.forEach((value, key) => {
    dataObj[key] = value;
  });

  await DB.Upsert<ScoreDoc>(
    refId,
    {
      collection: 'score',
      musicId,
      chartId,
    },
    {
      $set: {
        score,
        data: dataObj,
        ...(newRecord && { timestamp }),
        update: timestamp,
      },
    }
  );
};

const putHistory = async (
  refId: string,
  musicId: number,
  chartId: number,
  score: number,
  data: any,
  newRecord: boolean
) => {
  const timestamp = Date.now();

  const dataObj = {};
  data.forEach((value, key) => {
    dataObj[key] = value;
  });

  await DB.Insert<ScoreHistory>(refId, {
    collection: 'score_history',
    musicId,
    chartId,
    score,
    data: dataObj,
    newRecord,
    timestamp,
  });
};
