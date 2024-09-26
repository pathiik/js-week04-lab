// Getting the user input using a prompt
userInput = prompt("Enter a number");

if (userInput % 5 == 0) {
  console.log(`You entered ${userInput}\n${userInput} is divisible by 5`); // Logging the output to the console
  alert(`${userInput} is divisible by 5`); // Displaying the output in an alert box
} else {
  console.log(`You entered ${userInput}\n${userInput} is not divisible by 5`);
  alert(`${userInput} is not divisible by 5`);
}
