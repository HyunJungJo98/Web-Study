import { Home, Service, About, NotFound } from './components.js';

const $root = document.querySelector('#root');
const $navigation = document.querySelector('#navigation');

console.log('home');

const routes = [
  { path: '/', component: Home },
  { path: '/service', component: Service },
  { path: '/about', component: About },
];

const render = async (path) => {
  const _path = path ?? window.location.pathname;
  const component =
    routes.find((route) => route.path === _path)?.component || NotFound;
  $root.replaceChildren(await component());
};

$navigation.addEventListener('click', (e) => {
  // 네비게이션을 클릭하면 주소창의 url이 변경되면서 브라우저가 서버로 http요청함
  // preventDefault로 방지 -> 대신 history 관리
  e.preventDefault();
  if (e.target.tagName !== 'A') return;

  const path = e.target.getAttribute('href');

  // 현재 페이지와 이동할 페이지가 같으면 이동하지 않음
  if (window.location.pathname === path) {
    return;
  }

  // pushState : 주소창의 url을 변경, 하지만 서버로 http요청을 하지 않음
  window.history.pushState(null, null, path);
  render(path);
});

window.addEventListener('popstate', () => {
  console.log('popstate', window.location.pathname);
  render();
});

// HTML 문서가 완전히 구문 분석되고 모든 지연 스크립트가 다운로드 되고 실행될 때 발생
// 처음엔 Home 컴포넌트 렌더링
window.addEventListener('DOMContentLoaded', () => render());
