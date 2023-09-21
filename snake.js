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