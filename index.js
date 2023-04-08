let guessInput = document.getElementById("guess");
let submitButton = document.getElementById("submit");
let resetButton = document.getElementById("reset");

let messages = document.getElementsByClassName("message");

let tooHighMessage = document.getElementById("too-high");
let tooLowMessage = document.getElementById("too-low");
let correctMessage = document.getElementById("correct");

let numberOfGuessesMessage = document.getElementById("number-of-guesses");
let maxGuessesMessage = document.getElementById("max-guesses");

let belowMin = document.getElementById("below-min");
let aboveMax = document.getElementById("over-max");

let targetNumber;
let attempts = 0;
let maxNumberOfAttempts = 6;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  // Get value from guess input element
  let guess = Number(guessInput.value, 10);
 

  hideAllMessages();


  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = "";
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

    correctMessage.style.display = "";
    correctMessage.innerHTML = `Congratulations, You guessed correctly! <br> Would you like to play again?`;

    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  if (guess !== targetNumber) {
    if (guess < targetNumber) {
      tooLowMessage.style.display = "";
    } else {
      tooHighMessage.style.display = "";
    }
    attempts = attempts + 1;

    let remainingAttempts = maxNumberOfAttempts - attempts;
    
    numberOfGuessesMessage.style.display = "";
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
  }

  if (attempts === maxNumberOfAttempts) {
   maxGuessesMessage.style.display = "";
    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  guessInput.value = "";
  resetButton.style.display = "";
  //submitButton.disabled = true;

}

function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display = "none";
  }
}

function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  maxNumberOfAttempts = 5;

  // Enable the input and submit button
  submitButton.disabled = false;
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = "none";
}

submitButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", setup);

setup();
