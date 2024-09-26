// Declaring variables to store the input numbers
let startNumber, endNumber;

// Creating a function that takes two parameters and checks for conditions
function fizzBuzz(startNumber, endNumber) {
  // Checking if the number is divisible by 3 or 5 or both 3 and 5 or none
  for (let i = startNumber; i <= endNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Creating a function to get user input
function userInput() {
  // Converting the user input to a floating-point number after getting the input using a prompt
  startNumber = parseInt(prompt("Enter start number"));
  endNumber = parseInt(prompt("Enter end number"));

  // Checking if user input numbers are not numbers
  if (isNaN(startNumber) || isNaN(endNumber)) {
    alert("Invalid input");
    console.log("Invalid input");
  }

  // Calling the function while passing two arguments
  fizzBuzz(startNumber, endNumber);
  alert("Check the console for the result");
}

// Calling the main function
userInput();
