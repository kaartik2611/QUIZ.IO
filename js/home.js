const startButton = document.querySelector(".start-btn button");
const childStartButton = document.querySelectorAll(".quiz-btn-div a");
var i;
for (i = 0; i < childStartButton.length; i++) {
    childStartButton[i].style.opacity ="0";
  }
startButton.addEventListener("click", () => {
    for (i = 0; i < childStartButton.length; i++) {
        childStartButton[i].style.opacity ="1";
        startButton.style.margin = "50px 0";
        startButton.style.backgroundColor = "snow";
        startButton.style.color = "#3282b8"
        childStartButton[i].style.transition = "all 1s ease";
      }
})

