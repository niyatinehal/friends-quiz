var readlineSync = require("readline-sync");

var score = 0;

// data of high score


// array of objects
var questions = [{
  question: "Where do Rachel and Ross go on their first date?",
  answer: "Museum"
}, {
  question: "how many sisters does Joey has",
  answer: "7"
},
{
  question: "What is Chandler's middle name?",
  answer: "Murial"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + "! Are you a friends fan? Let's find out.");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

}


welcome();
game();
showScores();


