export const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `${hours}:${min}:${sec}`;
};
