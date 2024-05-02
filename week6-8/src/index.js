import { getCurrentTime } from './utils.js';
import sky from '../assets/sky.png';
import Button from './components/Button.js';
import Section from './components/Section.js';

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

const button = new Button('button');
button.render();

const section = new Section('section');
section.render();

printNum(num);

console.log('hi');
