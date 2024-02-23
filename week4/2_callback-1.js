const getNumber = (n) => {
  let newN;

  setTimeout(() => {
    newN = n;
  }, 1000);

  return newN;
};

const n = getNumber(0);
console.log(n);
