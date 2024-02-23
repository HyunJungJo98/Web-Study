const getIncreasedNumber = (n, callback) => {
  setTimeout(() => {
    console.log(n);
    callback(n + 1);
  }, 1000);
};

getIncreasedNumber(0, function (n) {
  getIncreasedNumber(n, function (n) {
    getIncreasedNumber(n, function (n) {
      getIncreasedNumber(n, function (n) {
        getIncreasedNumber(n, function (n) {
          console.log('끝');
        });
      });
    });
  });
});
