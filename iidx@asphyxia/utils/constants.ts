export enum CLTYPE {
  SINGLE,
  DOUBLE,
}

export enum Status {
  NOT_ALLOWED = 110,
}

export enum Version {
  ROOTAGE = 26,
  HEROIC_VERSE = 27,
}

export const versionFromModel = (model: string) => {
  const date = parseInt(model.split(':')[4]);

  if (date >= 2018110700 && date < 2019101600) {
    return Version.ROOTAGE;
  } else if (date >= 2019101600) {
    return Version.HEROIC_VERSE;
  }
  return null;
};
