export interface Profile {
  collection: 'profile';
}

export const newProfileByRefId = (
  refId: string,
  name?: string,
  pid?: number
) => {
  if (name == null) name = 'IIDX';
  if (pid == null) pid = 57;
};
