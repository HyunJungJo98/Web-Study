const getPromise = (num) => {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove(num);
    }, 1000);
  });
};

const timer = async () => {
  const array = Array(5).fill(0);

  for (let i = 0; i < array.length; i++) {
    const num = await getPromise(i);
    console.log(num);
  }
};

timer();
