export const getFomattedTime = time => {
  const timeSplit = time.split(':');
  const formattedTime = timeSplit
    ? new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDay(),
        timeSplit[0],
        timeSplit[1],
        timeSplit[2],
      )
    : null;

  return formattedTime;
};
