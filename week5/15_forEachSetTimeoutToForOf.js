const getPromise = (num) => {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove(num);
    }, 1000);
  });
};

const timer = async () => {
  const array = Array(5)
    .fill(0)
    .map((_, index) => index);

  for (let i of array) {
    const num = await getPromise(i);
    console.log(num);
  }
};

timer();
