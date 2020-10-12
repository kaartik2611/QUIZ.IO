const startButton = document.querySelector(".start-btn button");
const childStartButton = document.querySelectorAll(".quiz-btn-div a");
var i;
for (i = 0; i < childStartButton.length; i++) {
    childStartButton[i].style.opacity ="0";
  }
startButton.addEventListener("click", () => {
    for (i = 0; i < childStartButton.length; i++) {
        childStartButton[i].style.opacity ="1";
        childStartButton[i].style.transition = "all 0.5s ease";
      }
})
const createQuizBtn = document.querySelector(".create-quiz-btn");
const solveQuizBtn = document.querySelector(".solve-quiz-btn");

