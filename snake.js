import { randomElementFromArray, wait } from "./utils.js"

const foodItemsArray = [
    "🐁",
    "🍇",
    "🍉",
    "🍈",
    "🍓",
    "🍍",
    "🍌",
    "🥝",
    "🍏",
    "🍎",
    "🍔",
    "🍅",
    "🥚",
  ];

  // game display elements
const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("span");
const startBtn = document.querySelector(".start-btn");
const keyBtns = document.querySelectorAll(".keys-container button");

// game variables
const width = 10;
const numCells = width * width;
grid.style.width = `${width * 10 * 2}px`;
grid.style.height = `${width * 10 * 2}px`;
let currentSnake = [2, 1, 0];
let snakeColor = Math.floor(Math.random() * 360);
let snakeColorIncrement = 10;
let direction = 1;
let intervalTime = 200; // determines speed - frequency of game loop calls
let interval = 0;
let foodItemIndex = 0; // first cell
let score = 0;

// create grid cells
for (let i = 0; i < width * width; i++) {
    const cell = document.createElement("div");
    cell.style.width = `${width * 2}px`;
    cell.style.height = `${width * 2}px`;
    grid.appendChild(cell);
  }
  const cells = document.querySelectorAll(".grid div");

  function startGame() {
    grid.classList.remove("shake");
    currentSnake = [2, 1, 0];
    currentSnake.forEach((i) => {
      snakeColor += snakeColorIncrement % 360;
      cells[i].style.background = `hsl(${snakeColor}, 100%, 50%)`;
      cells[i].classList.add("snake");
    });
    currentSnake.forEach((i) => {
        cells[i].style.background = "none";
        cells[i].classList.remove("snake");
        cells[i].innerText = "";
      });
      clearInterval(interval);
      direction = 1;
      interval = setInterval(gameLoop, intervalTime);
  }
  
  startBtn.addEventListener("click", startGame);

  function gameLoop() {
    cells[currentSnake[0]].innerText = "";
    const tail = currentSnake.pop();
    cells[tail].classList.remove("snake");
    cells[tail].style.background = "none";
    currentSnake.unshift(currentSnake[0] + direction); // gives direction to the head
  
    cells[currentSnake[0]].classList.add("snake");
    cells[currentSnake[0]].innerText = "👀";
    if (
      (currentSnake[0] + width >= width * width && direction === width) || // hits bottom wall
      (currentSnake[0] % width === width - 1 && direction === 1) || // hits right wall
      (currentSnake[0] % width === 0 && direction === -1) || // hits left wall
      (currentSnake[0] - width < 0 && direction === -width) || // hits the top wall
      cells[currentSnake[0] + direction].classList.contains("snake") // hits itself
    ) {
      grid.classList.add("shake");
      clearInterval(interval);
      return;
    }
    snakeColor += snakeColorIncrement % 360;
    cells[currentSnake[0]].style.background = `hsl(${snakeColor}, 100%, 50%)`;
  }

  function moveSnake(moveDirection) {
    let directionVal;
  if (moveDirection === "ArrowRight" && direction !== -1) {
    directionVal = 1;
    if (currentSnake[0] + directionVal === currentSnake[1]) return;
    direction = directionVal;
  }
  if (moveDirection === "ArrowLeft" && direction !== 1) {
    directionVal = -1;
    if (currentSnake[0] + directionVal === currentSnake[1]) return;
    direction = directionVal;
  }
  if (moveDirection === "ArrowUp" && direction !== width) {
    directionVal = -width;
    if (currentSnake[0] + directionVal === currentSnake[1]) return;
    direction = directionVal;
  }
  if (moveDirection === "ArrowDown" && direction !== -width) {
    directionVal = width;
    if (currentSnake[0] + directionVal === currentSnake[1]) return;
    direction = directionVal;
  }
  }

  function handleKeyMove(e) {
    if (!["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"].includes(e.key))
      return;
    moveSnake(e.key);
  }
  document.addEventListener("keydown", handleKeyMove);