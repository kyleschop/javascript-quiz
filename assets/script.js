var time = document.getElementById("time");
var card = document.getElementById("card");
var buttonDiv = document.createElement("div");
var questionsBox = document.createElement("div");
var startBtn = document.createElement("button");
var trueBtn = document.createElement("button");
var falseBtn = document.createElement("button");
var secondsLeft = 90;

//Quiz Questions
var q1 = "JavaScript data types include numbers, strings, boolean values, and objects.";
var q2 = "A declared variable that does not have a value is undefined.";
var q3 = "Global variables must be declared inside a function.";
var q4 = "Prompt and alert allow the user to enter input.";
var q5 = "'1' == 1";
var q6 = "'True' === True";
var q7 = "The result of 2+2+'2'=42"

time.textContent = "00";
card.textContent = "This is a timed quiz. Press start to begin.";
startBtn.textContent = "START!";
trueBtn.textContent = "True"
falseBtn.textContent = "False"

startBtn.setAttribute("style", "width:80px; margin:20px; border:none; border-radius:10px; background-color:rgb(29, 255, 17); cursor:pointer");
trueBtn.setAttribute("style", "width:80px; margin:20px; border:none; border-radius:10px; background-color:rgb(29, 255, 17); cursor:pointer");
falseBtn.setAttribute("style", "width:80px; margin:20px; border:none; border-radius:10px; background-color:rgb(29, 255, 17); cursor:pointer");

card.appendChild(buttonDiv);
buttonDiv.appendChild(startBtn);

//The count down timer
function startTime(){
    var timerInterval= setInterval(function(){
        secondsLeft--;
        time.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
};

function correct() {
    card.textContent = "Correct";
}

function incorrect() {
    card.textContent = "Incorrect";
}

function question1(){
    card.textContent = "True or False?"
    card.appendChild(questionsBox);
    card.appendChild(buttonDiv);
    buttonDiv.textContent = " ";
    buttonDiv.appendChild(trueBtn);
    buttonDiv.appendChild(falseBtn)
    questionsBox.textContent = q1
    questionsBox.setAttribute("style", "font-weight:bold")

    if(trueBtn.addEventListener("click", correct)) {
        console.log(correct)
    } else if (falseBtn.addEventListener("click", incorrect));
};

function question2(){
    card.textContent = "True or False?"
    card.appendChild(questionsBox);
    card.appendChild(buttonDiv);
    buttonDiv.textContent = " ";
    buttonDiv.appendChild(trueBtn);
    buttonDiv.appendChild(falseBtn)
    questionsBox.textContent = q2
    questionsBox.setAttribute("style", "font-weight:bold")

    if(trueBtn.addEventListener("click", question2)) {
    } else if (falseBtn.addEventListener("click", question2));

};

function beginQuiz() {
    startTime();
    question1();
};

startBtn.addEventListener("click", beginQuiz);
