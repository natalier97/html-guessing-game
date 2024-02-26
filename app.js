console.log("HELLO PAPA PLATOON!");
// Your function(s) should go here that will interact with the webpage or DOM

let guessButton = document.getElementById("guessButton");

let output = document.getElementById("output");

let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

guessButton.addEventListener("click", guess);

function guess(event) {
  event.preventDefault();
  let userInput = document.getElementById("user-input").value;
  const oldGuesses = document.createElement("li");
  let oldGuessList = document.getElementById("oldGuessList");

  if (userInput == randomNumber) {
    oldGuessList.textContent = "You guessed right!";
    output.textContent = ''
  } else {
    oldGuesses.textContent = userInput;
    output.textContent = "You are wrong, guess again";
    oldGuessList.appendChild(oldGuesses);
    document.getElementById("user-input").value = "";
  }
}
