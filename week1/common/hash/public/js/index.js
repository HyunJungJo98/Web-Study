import { Home, Service, About, NotFound, Home2 } from './components.js';

const $root = document.querySelector('#root');
// const $navigation = document.querySelector('#navigation');

console.log('home');

const routes = [
  { path: '', component: Home },
  { path: 'service', component: Service },
  { path: 'about', component: About },
];

const render = async () => {
  // anchor값 반환 후 replace로 # 떼기
  const hash = window.location.hash.replace('#', '');
  const component =
    routes.find((route) => route.path === hash)?.component || NotFound;
  $root.replaceChildren(await component());
};

// navigation을 클릭하면 해시가 바뀌므로
// 아래의 hashchange 리스너로 대체 가능
/* $navigation.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.tagName !== 'A') return;
  const path = e.target.getAttribute('href');
  render(path);
}); */

window.addEventListener('hashchange', render);

// HTML 문서가 완전히 구문 분석되고 모든 지연 스크립트가 다운로드 되고 실행될 때 발생
// 처음엔 Home 컴포넌트 렌더링
window.addEventListener('DOMContentLoaded', render);
