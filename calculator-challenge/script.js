let num1, num2, operator;

function calculator(num1, num2, operator) {
  let result;
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
  return result;
}

function getInput() {
  try {
    num1 = parseFloat(prompt("Enter first number"));
    num2 = parseFloat(prompt("Enter second number"));
  } catch (error) {
    alert("Invalid input");
    console.log(error);
  }
  operator = prompt("Enter operator");
}

getInput();
if (!isNaN(num1) && !isNaN(num2)) {
  let result = calculator(num1, num2, operator);
  alert(`${num1}${operator}${num2} = ${result}`);
  console.log(`${num1}${operator}${num2} = ${result}`);
} else {
  alert("Invalid input");
  console.log("Invalid input");
}
