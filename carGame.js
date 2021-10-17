// initialize and decalare varialbles
const score = document.getElementById("score");
const startScreen = document.getElementById("startScreen");
const gameArea = document.getElementById("gameArea");

// start game event
startScreen.addEventListener("click", start);

// let create a player
let player = { speed: 5 };

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
  if (player.start) {
    window.requestAnimationFrame(starGame);
  }

  let car = document.getElementById("car");
  car.style.top = player.y + "px";
  car.style.left = player.x + "px";

  if (keys.ArrowUp) {
    player.y -= player.speed;
  }
  if (keys.ArrowDown) {
    player.y += player.speed;
  }
  if (keys.ArrowLeft) {
    player.x -= player.speed;
  }
  if (keys.ArrowRight) {
    player.x += player.speed;
  }
}

function start() {
  gameArea.classList.remove("hide");
  startScreen.classList.add("hide");
  player.start = true;
  window.requestAnimationFrame(starGame);

  let car = document.createElement("div");
  car.setAttribute("class", "car");
  car.setAttribute("id", "car");
  gameArea.appendChild(car);

  player.x = car.offsetLeft;
  player.y = car.offsetTop;
}
