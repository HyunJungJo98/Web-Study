const promise1 = new Promise((reslove) => {
  reslove(1);
});
const promise2 = new Promise((_, reject) => {
  reject('error');
});
const promise3 = new Promise((reslove) => {
  reslove(3);
});

const promises = [promise1, promise2, promise3];

Promise.all(promises)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
