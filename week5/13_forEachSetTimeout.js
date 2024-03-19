const getPromise = (num) => {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove(num);
    }, 1000);
  });
};

Array(5)
  .fill(0)
  .forEach(async (_, index) => {
    const result = await getPromise(index);
    console.log(result);
  });
