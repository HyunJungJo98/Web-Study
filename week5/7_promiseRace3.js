const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
});
const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, 3000);
});
const promise3 = new Promise((_, reject) => {
  setTimeout(() => {
    reject(3);
  }, 1000);
});

const promises = [promise1, promise2, promise3];

Promise.race(promises)
  .then((response) => console.log('then:', response))
  .catch((error) => console.log('catch:', error));
