var score = 0;

var question = document.querySelector(".question");
var answers = document.querySelector(".answers");
var result = document.querySelector(".result");
var questionNumber = document.querySelector(".question-number");
var userInit = document.querySelector(".playername");
var high = document.querySelector(".high");
var allotedtime = document.querySelector(".timealot");

function quiz() {
  var time = setInterval(timer, 120000);
  high.innerText = "";
  allotedtime.innerText = "You have TWO MINUTES! GO!";
  question1();
}

function timer() {
  endGame();
}

answers.addEventListener("click", function (e) {
  if (e.target.classList.contains("answer")) {
    isTrue(e.target.classList);
  } else {
    false;
  }
});

function isTrue(userAnswer) {
  if (userAnswer.contains("true")) {
    result.innerText = "CORRECT!";
    score++;
  } else {
    result.innerText = "WRONG!";
  }
  nextQuestion();
}

function nextQuestion() {
  var its = questionNumber.innerText;
  switch (its) {
    case "Question One":
      question2();
      break;
    case "Question Two":
      question3();
      break;
    case "Question Three":
      question4();
      break;
    case "Question Four":
      endGame();
      break;
  }
}

function question1() {
  questionNumber.innerText = "Question One";
  question.innerText = "WHO invented JavaScript?";
  answers.innerHTML =
    "<button class='btn btn-primary answer'>Douglas Crockford</button><button class='btn btn-primary answer'>Sheryl Sandberg</div><button class='btn btn-primary answer true'>Brendan Eich</div>";
}

function question2() {
  questionNumber.innerText = "Question Two";
  question.innerText = "WHY would they do that?";
  answers.innerHTML =
    "<button class='btn btn-primary answer'>Spite</button><button class='btn btn-primary answer'>No one knows</button><button class='btn btn-primary true answer'>The internet was without an object-oriented computer programming language that could be used to create interactive effects within web browsers.</button>";
}

function question3() {
  questionNumber.innerText = "Question Three";
  question.innerText = "WHICH of these tools allow you to ensure code quality?";
  answers.innerHTML =
    "<button class='btn btn-primary answer'>Angular</button><button class='btn btn-primary answer'>jQuery</button><button class='btn btn-primary answer'>RequireJS</button><button class='btn btn-primary true answer'>ESLint</button>";
}

function question4() {
  questionNumber.innerText = "Question Four";
  question.innerText = "WHAT is a variable?";
  answers.innerHTML =
    "<button class='btn btn-primary true answer'>Containers for storing data values.</button><button class='btn btn-primary true answer'>That which is not consistent or having a fixed pattern; liable to change.</button><button class='btn btn-primary true answer'>That which is able to be changed or adapted.</button><button class='btn btn-primary answer'>A small, spiky mammal.</button>";
}

function endGame() {
  questionNumber.innerText = "";
  question.innerText = "";
  answers.innerHTML = "";
  allotedtime.innerText = "";
  result.innerText = "GAME IS OVER. YOUR SCORE IS " + score + ".";
  var highscore = localStorage.getItem("highscore");

  if (highscore === null || score > highscore) {
    alert(
      "OH MY GOD YOU SET THE HIGH SCORE. PREPARE TO ENTER YOUR INITIALS AND STEP INTO HISTORY, CHAMPION!"
    );
    document.querySelector(".hidden").classList.remove("hidden");
  } else {
    displayHighScore();
  }
}

function updateScores() {
  result.innerText = "";
  document.querySelector("#submit-form").classList.add("hidden");
  var inits = userInit.value;
  localStorage.setItem("highscore", score);
  localStorage.setItem("inits", inits);
  displayHighScore();
}

function displayHighScore() {
  high.innerText =
    "Highest score was " +
    localStorage.getItem("highscore") +
    ", which was set by the venerable " +
    localStorage.getItem("inits").toUpperCase();
}
