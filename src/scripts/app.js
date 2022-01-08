//Triggers are here

// global data containers
let editedPlayer = 0; // 4
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

//array of objects
const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

//one variable //arrays in an array // 7
const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

//forms and style controls
const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form"); // 1
const errorOutput = document.getElementById("config-error"); // 2
const gameAreaElement = document.querySelector("#active-game");
const activePlayerName = document.getElementById("active-player-name");
const gameOver = document.getElementById("game-over");

//buttons
const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");
/* const gameFieldElements = document.querySelectorAll("#game-board li"); */ // select all lists
const gameBoardElements = document.getElementById("game-board"); //alt

//corresponding listeners
editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig); // 1
startNewGameBtnElement.addEventListener("click", startNewGame); // 5

/* for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField); // since var is made. only use that var for of loop
} */
gameBoardElements.addEventListener("click", selectGameField);
