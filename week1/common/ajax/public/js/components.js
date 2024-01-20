const createElement = (content) => {
  const $temp = document.createElement('template');
  $temp.innerHTML = content;
  return $temp.content;
};

const fetchData = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

export const Home = async () => {
  const { title, content } = await fetchData('/api/home');
  return createElement(`<h1>${title}</h1><p>${content}</p>`);
};

export const Service = async () => {
  const { title, content } = await fetchData('/api/service');
  return createElement(`<h1>${title}</h1><p>${content}</p>`);
};

export const About = async () => {
  const { title, content } = await fetchData('/api/about');
  return createElement(`<h1>${title}</h1><p>${content}</p>`);
};

export const NotFound = () => {
  return createElement(`<h1>404 Not Found</h1>`);
};
