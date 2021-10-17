const score = document.getElementById("score");
const startScreen = document.getElementById("startScreen");
const gameArea = document.getElementById("gameArea");

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

const keypress = document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function keyDown(e) {
  e.preventDefault();
  console.log(e.key);
  keys[e.key] = true;
  console.log(keys);
}

function keyUp(e) {
  e.preventDefault();
  keys[e.key] = false;
}
