const promise1 = new Promise((_, reject) => {
  reject(1);
});
const promise2 = new Promise((_, reject) => {
  reject(2);
});
const promise3 = new Promise((_, reject) => {
  reject(3);
});

const promises = [promise1, promise2, promise3];

Promise.any(promises).catch((error) => console.log(error));
