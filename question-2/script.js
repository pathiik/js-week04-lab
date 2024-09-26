let userScore = prompt("Enter your score");

function checkGrade(score) {
  let grade;
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
  return grade;
}

if (userScore >= 0 && userScore <= 100) {
  let userGrade = checkGrade(userScore);
  alert(`Your grade is ${userGrade}`);
  console.log(`Your grade is ${userGrade}`);
} else {
  alert("Invalid Input");
  console.log("Invalid Input");
}
