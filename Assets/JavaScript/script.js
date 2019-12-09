var questionBtns = document.querySelector(".buttonQuestions .col-sm-3");
listOfScoresDiv = document.querySelector(".listOfScore");
startBtn = document.querySelector(".starBtn");
questionDiv = document.getElementById("questionDiv");
addInitialsId = document.getElementById("addInitialsId");
highScoreDiv = document.getElementById("highScoreWrapper");
scoreWrapper = document.getElementById("scoreWrapper");
goBackBtn = document.getElementById("goBackBtn");
clearBtn = document.getElementById("clearBtn");
viewHighScoreBtn = document.getElementById("viewHighScoreBtn");
timerSpan = document.getElementById("timerSpan");
answerCheckDiv = document.getElementById("answerCheckDiv");
highScoreItemsDiv = document.querySelector(".listOfScores");

var highScores = [];
questionIndex = 0;
correctAnswers = 0;
timerTotal = 75;
timeElapsed = 0;
var time;


// Seting up event listeners

startBtn.addEventListener("click", function (event) {
    event.preventDefault()
    startBtn.classList.add("hideClass")
    questionBtns.parentElement.classList.remove("hideClass")
    creatBtns();
    startTimer();
});


questionBtns.addEventListener("click", function (event) {
    event.stopPropagation();
    checkAnswer(event);

    if (questionIndex == question.length) {
        displayScore();
    }
    else {
        createBtns(event);
    }
    return
});

addInitialsId.addEventListener("click", function (e) {
    e.preventDefault();
    storeScores();
    viewHighScores();
});

goBackBtn.addEventListener("click", function (e) {
    location.reload();

});

clearBtn.addEventListener("click", function (e) {
    highScoreItemsDiv.innerHtml = "";
    localStorage.clear();
    highScores = [];
});

viewHighScoreBtn.addEventListener("click", function (e) {
    startBtn.classList.add("hideClass")
    viewHighScores();
});


// Button functionality settings
