export const getVersion = (info: EamuseInfo) => {
  const dateCode = parseInt(info.model.split(':')[4]);

  if (dateCode >= 2020102800) return 28;
  return 0;
};

export const IIDXID_TO_STR = (iidxId: number) => {
  const padId = iidxId.toString().padStart(8, '0');
  return `${padId.slice(0, 4)}-${padId.slice(4, 8)}`;
};

export const IncrementInt = (cur: string | number, i: number | string = 1) => {
  if (typeof cur === 'string' || typeof cur === 'undefined') cur = parseInt(cur ?? '0');
  if (typeof i === 'string' || typeof i === 'undefined') i = parseInt(i ?? '0');
  return cur + i;
};
