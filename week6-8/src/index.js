import { getCurrentTime } from './utils.js';
import sky from '../assets/sky.png';

const num = 10;
const printNum = (num) => {
  console.log(num);
};

const div = document.createElement('div');
document.body.appendChild(div);
div.innerHTML = getCurrentTime();

const img = document.createElement('img');
img.setAttribute('src', sky);
document.body.appendChild(img);

printNum(num);

console.log('hi');
