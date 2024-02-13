const getNumber = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(n);
      resolve(n);
    }, 1000);
  });
};

getNumber(1)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
