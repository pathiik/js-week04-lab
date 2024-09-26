// Getting the user input using a prompt
let userScore = prompt("Enter your score");

// Creating a function that checks the grade based on the score
function checkGrade(score) {
  let grade;

  // Checking the score and assigning the grade
  if (score >= 80) {
    grade = "A\nAwesome!";
  } else if (score >= 70) {
    grade = "B\nGood Job!";
  } else if (score >= 60) {
    grade = "C\nNot bad!";
  } else if (score >= 50) {
    grade = "D\nCould be better!";
  } else if (score < 50) {
    grade = "F\nUgh!!!";
  } else {
    grade = "Invalid";
  }
  return grade; // Returning the gradex
}

// Checking if the user input is a number between 0 and 100
if (userScore >= 0 && userScore <= 100) {
  // Calling the function and storing the result in a variable
  let userGrade = checkGrade(userScore);
  alert(`Your grade is ${userGrade}`); // Displaying the output in an alert box
  console.log(`Your grade is ${userGrade}`); // Logging the output to the console
} else {
  alert("Invalid Input");
  console.log("Invalid Input");
}
