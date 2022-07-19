// generate computer input using randomn
// compare with user input

var randomInteger = function () {
  var randomFloat = Math.random() * 3;
  var resultInteger = Math.floor(randomFloat);
  return resultInteger;
};

var main = function (input) {
  var computerOuts = ["rock", "paper", "scissors"];
  var computerOut = computerOuts[randomInteger()];

  var myOutputValue = "Please enter a valid input";

  if (input == computerOut) {
    myOutputValue = `draw! you: ${input} vs computer: ${computerOut}`;
  }

  if (
    (input == "rock" && computerOut == "scissors") ||
    (input == "paper" && computerOut == "rock") ||
    (input == "scissors" && computerOut == "paper")
  ) {
    myOutputValue = `win! you: ${input} vs computer: ${computerOut}`;
  }

  if (
    (input == "rock" && computerOut == "paper") ||
    (input == "paper" && computerOut == "scissors") ||
    (input == "scissors" && computerOut == "rock")
  ) {
    myOutputValue = `lose! you: ${input} vs computer: ${computerOut}`;
  }

  return myOutputValue;
};
