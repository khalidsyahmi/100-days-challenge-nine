// Logic of form and style Controls

function openPlayerConfig(playerID) {
  /* const clickedBtn = playerID.target.dataset.playerid; */
  editedPlayer = +playerID.target.dataset.playerid; // 4 // + number conversion

  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error"); // 3
  errorOutput.classList.remove("error");
  errorOutput.textContent = "";
  formElement.firstElementChild.lastElementChild.value = ""; // reset textbox // replace with getElementById("")
}

function savePlayerConfig(extractForm) {
  extractForm.preventDefault();
  const formData = new FormData(extractForm.target); // target html element property responsible the current event
  const enteredPlayerName = formData.get("playername").trim(); // get input
  /* console.log(enteredPlayerName); */
  /* !enteredPlayerName = falsy */
  if (!enteredPlayerName) {
    extractForm.target.firstElementChild.classList.add("error"); // 3
    errorOutput.classList.add("error");
    errorOutput.textContent = "Please don't leave an empty space!";
    return;
  } // 2
  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName; //store name in array players
  closePlayerConfig(); // .style.display = none;
} // 1 // parameter can be any names
