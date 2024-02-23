const getIncreasedNumber = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(n);
      resolve(n + 1);
    }, 1000);
  });
};

getIncreasedNumber(0)
  .then((res) => getIncreasedNumber(res))
  .then((res) => getIncreasedNumber(res))
  .then((res) => getIncreasedNumber(res))
  .then((res) => getIncreasedNumber(res));
