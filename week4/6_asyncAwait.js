const getIncreasedNumber = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n + 1);
    }, 1000);
  });
};

const main = async () => {
  const increased = await getIncreasedNumber(0);
  console.log(increased);
};

main();
