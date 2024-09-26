// Declaring variables to store the input values
let num1, num2, operator;

// Creating a function that takes three parameters and calculates the result
function calculator(num1, num2, operator) {
  let result;

  // Checking the operator and performing the calculation using a switch-case statement
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operator";
      break;
  }
  return result; // Returning the result
}

// Creating a function to get the user input
function getInput() {
  // Using a try-catch block to handle invalid input
  try {
    // Converting the user input to a floating-point number after getting the input using a prompt
    num1 = parseFloat(prompt("Enter first number"));
    num2 = parseFloat(prompt("Enter second number"));
  } catch (error) {
    alert("Invalid input");
    console.log(error);
  }
  operator = prompt("Enter operator");
}

// Calling the function to get the user input
getInput();

// Checking if user input numbers are actually numbers
if (!isNaN(num1) && !isNaN(num2)) {
  let result = calculator(num1, num2, operator); // Calling the function and storing the result in a variable
  alert(`${num1}${operator}${num2} = ${result}`);
  console.log(`${num1}${operator}${num2} = ${result}`);
} else {
  alert("Invalid input");
  console.log("Invalid input");
}
