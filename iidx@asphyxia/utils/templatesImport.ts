import { Version } from './constants';

export const templatesFromVersion = async (version: number) => {
  if (version === Version.CASTHOUR) {
    return await import('../templates/casthour');
  } else {
    return null;
  }
};
