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
  // start game loop
  if (player.start) {
    window.requestAnimationFrame(starGame);
  }

  //   find the property of road boundary
  let road = gameArea.getBoundingClientRect();

  // find the car and using id and get css property
  let car = document.getElementById("car");
  car.style.top = player.y + "px";
  car.style.left = player.x + "px";

  //   movement of the player surrounding all position
  if (keys.ArrowUp && player.y > road.top + 150) {
    player.y -= player.speed;
  }
  if (keys.ArrowDown && player.y < road.bottom - 70) {
    player.y += player.speed;
  }
  if (keys.ArrowLeft && player.x > 0) {
    player.x -= player.speed;
  }
  if (keys.ArrowRight && player.x < road.width - 50) {
    player.x += player.speed;
  }
}

function start() {
  // switch between start game to playgame
  gameArea.classList.remove("hide");
  startScreen.classList.add("hide");
  player.start = true;
  window.requestAnimationFrame(starGame);

  //   create a car element on road and append in parrent div
  let car = document.createElement("div");
  car.setAttribute("class", "car");
  car.setAttribute("id", "car");
  gameArea.appendChild(car);

  //   set the offest of car
  player.x = car.offsetLeft;
  player.y = car.offsetTop;
}
