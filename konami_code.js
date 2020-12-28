const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

const myCodes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {

var index = 0;

document.body.addEventListener('keydown', onKeyDownHandler);

function onKeyDownHandler(e) {
  const key = e.key;

  if (key == myCodes[index]) {
    index++;
}
    if (myCodes.length === index) {
      alert ("YOU DID IT!");
      index = 0;
  } else {
    index = 0;
  }
}
}
init();
