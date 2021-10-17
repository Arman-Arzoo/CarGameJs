// initialize and decalare varialbles
const score = document.getElementById("score");
const startScreen = document.getElementById("startScreen");
const gameArea = document.getElementById("gameArea");

// start game event
startScreen.addEventListener("click", start);

// let create a player
let palyer = {};

// select specific keys using object
let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

// addEventListener to identify key press on page
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function keyDown(e) {
  e.preventDefault();
  keys[e.key] = true;
}

function keyUp(e) {
  e.preventDefault();
  keys[e.key] = false;
}

// start the game
function starGame() {
  console.log("game playing");
  if (palyer.start) {
    window.requestAnimationFrame(starGame);
  }
}

function start() {
  gameArea.classList.remove("hide");
  startScreen.classList.add("hide");
  palyer.start = true;
  window.requestAnimationFrame(starGame);
}
