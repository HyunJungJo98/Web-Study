const getData = async () => {
  const data = await fetch('http://127.0.0.1:5500/week5/data.json');
  const json = await data.json();
  return json.id;
};

const array = [];

Array(5)
  .fill(0)
  .forEach(async () => {
    const data = await getData();
    array.push(data);
  });

console.log(array);
