import { getCurrentTime } from './utils.js';

const num = 10;
export const printNum = () => {
  console.log(num);
};

const div = document.createElement('div');
document.body.appendChild(div);
div.innerHTML = getCurrentTime();
