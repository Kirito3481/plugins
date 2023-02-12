import { Version } from './constants';

export const templatesFromVersion = async (version: number) => {
  if (version === Version.HEROIC_VERSE) {
    return await import('../templates/heroicverse');
  } else if (version === Version.ROOTAGE) {
    return await import('../templates/rootage');
  } else {
    return null;
  }
};
