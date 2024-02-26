console.log("HELLO PAPA PLATOON!");
// Your function(s) should go here that will interact with the webpage or DOM

let guessButton = document.getElementById("guessButton");

let output = document.getElementById("output");

let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber); //let's see the random number

guessButton.addEventListener("click", guess);

function guess(event) {
  event.preventDefault();
  //get user input
  let userInput = document.getElementById("user-input").value;
  //create list of old guesses, giving it a class to reference is CSS
  const oldGuesses = document.createElement("li");
  oldGuesses.setAttribute("class", "guesslist");
  //calling the Unordered List
  let oldGuessList = document.getElementById("oldGuessList");
  //calling picture div
  const picture = document.querySelector(".picture");

  if (userInput == randomNumber) {
    picture.classList.add("punch");
    oldGuessList.textContent = "You guessed right!";
    output.textContent = "";
    
  } 
  
  else if (userInput < randomNumber) {
    picture.classList.add("joker"); //adding joker class name to add picture
    oldGuesses.textContent = userInput; //adding value to list item w/ the user input
    output.textContent = "You guessed too low!, guess again";
    oldGuessList.appendChild(oldGuesses); //adding wrong guess to list

    //letting input box be empty again
    document.getElementById("user-input").value = "";
  } 
  
  else {
    picture.classList.add("joker"); //adding joker class name to add picture

    oldGuesses.textContent = userInput; //adding value to list item w/ the user input
    output.textContent = "You guessed too high!, guess again";
    oldGuessList.appendChild(oldGuesses); //adding wrong guess to list
    //letting input box be empty again
    document.getElementById("user-input").value = "";
  }
}
