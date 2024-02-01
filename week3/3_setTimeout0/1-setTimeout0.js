const $button = document.querySelector('button');
const $text = document.querySelector('div');

function printLoadingMessage() {
  $text.innerHTML = 'loading...';
  console.log('loading');
}

function longTaskingProcess() {
  for (let i = 0; i < 1000000000; i++);
}

function hideLoadingMessage() {
  $text.innerHTML = '';
  console.log('hide');
}

function mainTask() {
  $text.innerHTML = 'main task';
  console.log('main task');
}

$button.addEventListener('click', function () {
  printLoadingMessage();
  longTaskingProcess();
  hideLoadingMessage();
  mainTask();
});
