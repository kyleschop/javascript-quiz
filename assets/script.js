var time = document.getElementById("time");
var card = document.getElementById("card");
var startBtnDiv = document.createElement("div");
var startBtn = document.createElement("button");


time.textContent = "00";
card.textContent = "This is a timed quiz. Press start to begin.";
startBtn.textContent = "START!";

startBtn.setAttribute("style", "width:80px; margin:20px; border:none; border-radius:10px; background-color:rgb(29, 255, 17); cursor:pointer");

card.appendChild(startBtnDiv);
startBtnDiv.appendChild(startBtn);

var secondsLeft = 90;
function startTime(){
    var timerInterval= setInterval(function(){
        secondsLeft--;
        time.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}
function beginQuiz() {
    startTime();
    card.textContent = "Question 1"
}


startBtn.addEventListener("click", beginQuiz)
