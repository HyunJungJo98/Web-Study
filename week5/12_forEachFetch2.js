// 결과적으로는 단순히 1을 리턴하는 함수이다.
const getData = async () => {
  const data = await fetch('http://127.0.0.1:5500/week5/data.json');
  const json = await data.json();
  return json.id;
};

const array = [];

const makeArray = async () => {
  const promises = Array(5) // (1)
    .fill(0)
    .map(async (_, index) => {
      const id = await getData();
      array.push(id); // (2)
      return 'promise' + index; //(3)
    });

  const promiseResults = await Promise.all(promises); //(4)

  console.log('promises:', promises);
  console.log('array:', array);
  console.log('promiseResults:', promiseResults);
};

makeArray();
