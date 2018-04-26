let theNumber = 0;
let userGuess = 0;
let tries = 0;

var input = document.getElementById("userInput");
var guess = document.getElementById("guess");
var hint = document.getElementById('hint');


function init(){
  input.value = "";
  tries = 0;
  hint.innerHTML = "Hint - it is between 1 and 100";
  theNumber = Math.floor(Math.random() *100) +1;
  //random number
  //hint.innerHTML = theNumber;
}

guess.addEventListener('click', checkGuess, false);
function checkGuess(){
  tries += 1;
  if(parseInt(input.value) > theNumber) {
    hint.innerHTML = 'Hint - it is smaller than ' + input.value;
  }
  else if(parseInt(input.value) < theNumber) {
    hint.innerHTML = 'Hint - it is larger than ' + input.value;
  }
  else {
    displayWinningMessage();
  }
}

function playAgainfunc(){
  //remove youWon div
  var parent = document.getElementById("youWonDiv").parentNode;
  parent.removeChild(document.getElementById("youWonDiv"));
  //restart init
  init();
  //enable button Guess
  guess.style.pointerEvents = "auto";
}

function displayWinningMessage(){
  var youWon = document.createElement('div');
  youWon.id = "youWonDiv";
  youWon.className = "youWon";
  var winningMsg = document.createElement("h2");
  winningMsg.className = "winningMsg";
  winningMsg.innerHTML = input.value + ", that's the number <br> Tries: " + tries;
  youWon.appendChild(winningMsg);

  var playAgainBtn = document.createElement('button');
  playAgainBtn.innerHTML = "Play Again";
  playAgainBtn.className = "playAgain";
  playAgainBtn.addEventListener('click', playAgainfunc, false);
  youWon.appendChild(playAgainBtn);

  document.body.appendChild(youWon);
  guess.style.pointerEvents = "none";  //disable guess button
}

init();
