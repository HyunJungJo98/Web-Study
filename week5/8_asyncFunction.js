const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

const result = await promise; // await 키워드가 함수 안에 있지 않음
console.log(result);
