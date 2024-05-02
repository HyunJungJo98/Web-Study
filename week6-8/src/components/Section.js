import '../../style/section.scss';

export default function Section(text) {
  this.text = text;
  this.render = function () {
    const section = document.createElement('section');
    section.classList.add('section');
    section.innerHTML = this.text;
    document.body.appendChild(section);
  };
}
