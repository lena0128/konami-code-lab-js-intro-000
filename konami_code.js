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

function init() {
document.addEventListener('keydown', keyHandler, false);

var keyHandler = function(event) {
  console.log(event.key);
}

var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

var current = 0;

if (pattern,indexOf(event.key) < 0) {
current = 0;
return;
}

current++;

if (pattern.length === current) {
current = 0;
window.alert('You made it!');
}
}
init();
