export enum CLTYPE {
  SINGLE,
  DOUBLE,
}

export enum Status {
  NOT_ALLOWED = 110,
}

export enum Version {
  GOLD = 14,
  DJ_TROOPERS,
  EMPRESS,
  SIRIUS,
  RESORT_ANTHEM,
  LINCLE,
  TRICORO,
  SPADA,
  PENDUAL,
  COPULA,
  SINOBUZ,
  CANNON_BALLERS,
  ROOTAGE,
  HEROIC_VERSE,
  BISTROVER,
  CASTHOUR = 29,
}

export const versionFromModel = (model: string) => {
  const date = parseInt(model.split(':')[4]);

  if (date >= 2007022100 && date < 2007121900) {
    return Version.GOLD;
  } else if (date >= 2007121900 && date < 2008111900) {
    return Version.DJ_TROOPERS;
  } else if (date >= 2008111900 && date < 2009102100) {
    return Version.EMPRESS;
  } else if (date >= 2009102100 && date < 2010091500) {
    return Version.SIRIUS;
  } else if (date >= 2010091500 && date < 2011091500) {
    return Version.RESORT_ANTHEM;
  } else if (date >= 2011091500 && date < 2012091904) {
    return Version.TRICORO;
  } else if (date >= 2012091904 && date < 2013100200) {
    return Version.TRICORO;
  } else if (date >= 2013100200 && date < 2014091700) {
    return Version.SPADA;
  } else if (date >= 2014091700 && date < 2015111100) {
    return Version.PENDUAL;
  } else if (date >= 2015111100 && date < 2016102400) {
    return Version.COPULA;
  } else if (date >= 2016102400 && date < 2017122100) {
    return Version.SINOBUZ;
  } else if (date >= 2017122100 && date < 2018110700) {
    return Version.CANNON_BALLERS;
  } else if (date >= 2018110700 && date < 2019101600) {
    return Version.ROOTAGE;
  } else if (date >= 2019101600 && date < 2020102800) {
    return Version.HEROIC_VERSE;
  } else if (date >= 2020102800 && date < 2021101300) {
    return Version.BISTROVER;
  } else if (date >= 2021101300) {
    return Version.CASTHOUR;
  }
  return null;
};
