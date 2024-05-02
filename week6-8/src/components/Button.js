import '../../style/button.css';

export default function Button(text) {
  this.text = text;
  this.render = function () {
    const p = document.createElement('p');
    const button = document.createElement('button');
    button.classList.add('button');
    button.innerHTML = this.text;
    p.appendChild(button);
    document.body.appendChild(p);
  };
}
