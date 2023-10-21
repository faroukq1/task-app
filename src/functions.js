// 6 Hours 32 Minutes 15 Seconds
export const convertTime = (time) => {
  time = Math.floor(time / 1000);
  const hour = Math.floor(time / 60 / 60);
  time = Math.floor(time % 3600);

  const min = Math.floor(time / 60);
  time = Math.floor(time % 60);

  const sec = time;
  return { hour, min, sec };
};
