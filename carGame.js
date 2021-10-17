const score = document.getElementById("score");
const startScreen = document.getElementById("startScreen");
const gameArea = document.getElementById("gameArea");

console.log(score);

const keypress = document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function keyDown(e) {
  e.preventDefault();

  const textdata = document.getElementById("test");
  textdata.innerHTML += e.key;
}

function keyUp(e) {
  e.preventDefault();
}
