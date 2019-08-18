export const secondsToTimeStamp = s => {
  return new Date(s * 1000).toISOString().substr(11, 11);
};
