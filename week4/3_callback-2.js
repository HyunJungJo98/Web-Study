const getNumber = (n, callback) => {
  setTimeout(() => {
    callback(n);
  }, 1000);
};

getNumber(0, function (n) {
  console.log(n);
});
