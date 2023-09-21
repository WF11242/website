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

// create grid cells
for (let i = 0; i < width * width; i++) {
    const cell = document.createElement("div");
    cell.style.width = `${width * 2}px`;
    cell.style.height = `${width * 2}px`;
    grid.appendChild(cell);
  }
  const cells = document.querySelectorAll(".grid div");

  function startGame() {
    currentSnake = [2, 1, 0];
    currentSnake.forEach((i) => {
      snakeColor += snakeColorIncrement % 360;
      cells[i].style.background = `hsl(${snakeColor}, 100%, 50%)`;
      cells[i].classList.add("snake");
    });
  }
  
  startBtn.addEventListener("click", startGame);