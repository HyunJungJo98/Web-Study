function a() {
  b();
  console.log('a');
}
function b() {
  console.log('b');
}
function c() {
  console.log('c');
}

setTimeout(c, 10);
a();
