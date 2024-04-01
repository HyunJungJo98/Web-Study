import { getCurrentTime } from './utils.js';

const num = 10;
const printNum = (num) => {
  console.log(num);
};

const div = document.createElement('div');
document.body.appendChild(div);
div.innerHTML = getCurrentTime();

printNum(num);

console.log('hi');
