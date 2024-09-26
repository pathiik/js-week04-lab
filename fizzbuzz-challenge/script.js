let startNumber, endNumber;

function fizzBuzz(startNumber, endNumber) {
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

function userInput() {
  startNumber = parseInt(prompt("Enter start number"));
  endNumber = parseInt(prompt("Enter end number"));

  if (isNaN(startNumber) || isNaN(endNumber)) {
    alert("Invalid input");
    console.log("Invalid input");
  }

  fizzBuzz(startNumber, endNumber);
  alert("Check the console for the result");
}

userInput();
