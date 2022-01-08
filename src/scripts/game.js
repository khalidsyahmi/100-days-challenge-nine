// Game rules and logic

// 9
function resetGame() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  gameOver.firstElementChild.innerHTML = // firstElementChild.firstElementChild.innerHTML will only target the span element
    'You won, <span id="winner-name">PLAYER NAME</span>!';
  gameOver.style.display = "none";

  let gameBoardIndex = 0;
  // looping every data of arrays within an array
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      gameData[i][j] = 0; // reset 1s and 2s
      const gameBoardItems = gameBoardElements.children[gameBoardIndex]; // modularity
      gameBoardItems.textContent = ""; //loops children 0 until 8
      gameBoardItems.classList.remove("disabled");
      gameBoardIndex++;
    } //cols first
  } //rows second
}

// 5
function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set your names first!");
    return;
  }

  resetGame();

  activePlayerName.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

// 6.2 // need to call in selectGameField
function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
}

// 6
function selectGameField(tiles) {
  const tileSelection = tiles.target; // just modding
  /* console.log(tileSelection.tagName); */
  if (tileSelection.tagName !== "LI" || gameIsOver) {
    return; // force exit OL target //triggers if one is true
  }
  // 7
  const selectedRow = tileSelection.dataset.row - 1;
  const selectedCol = tileSelection.dataset.col - 1;

  if (gameData[selectedRow][selectedCol] > 0) {
    alert("Tile already used!");
    return;
  }

  tileSelection.textContent = players[activePlayer].symbol; // set symbols into tiles
  tileSelection.classList.add("disabled");
  //main array 1st before inner array
  gameData[selectedRow][selectedCol] = activePlayer + 1; // P1 or P2

  // logging
  /*   console.log(gameData); */
  const winnerID = checkForGameOver();
  console.log(winnerID);

  if (winnerID !== 0) {
    endGame(winnerID); // use other variables other than unique parameter in endGame()
  }

  currentRound++; // if placed before winnerID, change currentRound default to zero
  switchPlayer(); // switching must occur last in selectGameField()
}

// 8 // only checks one existing straight win
function checkForGameOver() {
  /*   // 3 rows
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[0][1] &&
    gameData[0][1] === gameData[0][2]
  ) {
    return gameData[0][0]; // store 1st item in the 1st row // if P1 or P2 wins
  }

  if (
    gameData[1][0] > 0 &&
    gameData[1][0] === gameData[1][1] &&
    gameData[1][1] === gameData[1][2]
  ) {
    return gameData[1][0]; // 2nd
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[2][1] &&
    gameData[2][1] === gameData[2][2]
  ) {
    return gameData[2][0]; // 3rd
  }

  // 3 cols
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][0] &&
    gameData[1][0] === gameData[2][0]
  ) {
    return gameData[0][0]; // store 1st item in the 1st col // if P1 or P2 wins
  }

  if (
    gameData[0][1] > 0 &&
    gameData[0][1] === gameData[1][1] &&
    gameData[1][1] === gameData[2][1]
  ) {
    return gameData[0][1]; // 2nd col
  }

  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][2] &&
    gameData[1][2] === gameData[2][2]
  ) {
    return gameData[0][2]; // 3rd col
  } */

  //replaced with loops // rows 1-3
  for (i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0]; // store 1st item in the row // if P1 or P2 wins
    }
  }

  //replaced with loops // cols 1-3
  for (i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i]; // store 1st item in the cols // if P1 or P2 wins
    }
  }

  // 2 diagonal straights
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0]; // 1st diagonal // 1st row 1st col
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0]; // 2nd diagonal // 3rd row 1st col
  }

  if (currentRound === 9) {
    return -1; // -1
  }
  return 0; // no winner yet
}

// 9

function endGame(theWinner) {
  // unique parameter only used here
  gameIsOver = true;
  gameOver.style.display = "block";

  if (theWinner > 0) {
    const winnerName = players[theWinner - 1].name; //the checkForGameOver() return 1, 2 or a -1 ! //minus 1 cuz name array in players is 0 and 1
    gameOver.firstElementChild.firstElementChild.textContent = winnerName;
    return;
  }
  if (theWinner === -1) {
    gameOver.firstElementChild.textContent = "Its a Draw"; //place a backward slash
    return;
  }
}
