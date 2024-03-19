const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

const getData = async () => {
  const data = await promise; // (1)
  return data;
};

const printData = async () => {
  const data = await getData();
  console.log(data);
};

printData();
