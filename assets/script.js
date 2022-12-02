var card = document.getElementById('card');
var cardHeading = document.createElement('h1');
var cardQ = document.createElement('p');
var cardBtn = document.createElement('div');
var cardDisplay = document.createElement('p');

var questionsArray = [
    "JavaScript data types include numbers, strings, boolean values, and objects.", 
    "A declared variable that does not have a value is undefined.",
    "Global variables must be declared inside a function.",
    "Prompt and alert allow the user to enter input.",
    "'1' == 1",
    "'True' === True",
    "The result of 2+2+'2'=42"
];

card.appendChild(cardHeading);
card.appendChild(cardQ);
card.appendChild(cardBtn);
card.appendChild(cardDisplay);

var trueBtn = document.createElement("button");
var falseBtn = document.createElement("button");
trueBtn.textContent = "True"
falseBtn.textContent = "False"
trueBtn.setAttribute("style", "width:80px; margin:20px; border:none; border-radius:10px; background-color:rgb(29, 255, 17); cursor:pointer");
falseBtn.setAttribute("style", "width:80px; margin:20px; border:none; border-radius:10px; background-color:rgb(29, 255, 17); cursor:pointer");

var time = document.getElementById("time");
time.textContent = "00";
var secondsLeft = 90;

var startBtn = document.createElement("button");
startBtn.textContent = "START!";
startBtn.setAttribute("style", "width:80px; margin:20px; border:none; border-radius:10px; background-color:rgb(29, 255, 17); cursor:pointer");

var secondsLeft = 90;
cardHeading.textContent = 'This is a timed quiz. Press start to begin.';
cardBtn.appendChild(startBtn);

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

function nextQ() {
    console.log('it worked');
}

function correctAnswers(){
    console.log('yes');
};
function incorrectAnswers(){
    console.log('no');
};

function questionSetUp() {
	cardHeading.textContent = "True or False?";
    cardBtn.textContent = ' ';
    cardBtn.appendChild(trueBtn);
	cardBtn.appendChild(falseBtn);
    
};

function askQ7() {
    var setUp = questionSetUp();
    cardQ.textContent = questionsArray[6];
    trueBtn.addEventListener('click', correctAnswers);
    trueBtn.addEventListener('click', nextQ);
    falseBtn.addEventListener('click', incorrectAnswers);
    falseBtn.addEventListener('click', nextQ);
};

function askQ6() {
    var setUp = questionSetUp();
    cardQ.textContent = questionsArray[5];
    trueBtn.addEventListener('click', incorrectAnswers);
    trueBtn.addEventListener('click', askQ7);
    falseBtn.addEventListener('click', correctAnswers);
    falseBtn.addEventListener('click', askQ7);
};

function askQ5() {
    var setUp = questionSetUp();
    cardQ.textContent = questionsArray[4];
    trueBtn.addEventListener('click', correctAnswers);
    trueBtn.addEventListener('click', askQ6);
    falseBtn.addEventListener('click', incorrectAnswers);
    falseBtn.addEventListener('click', askQ6);
};

function askQ4() {
    var setUp = questionSetUp();
    cardQ.textContent = questionsArray[3];
    trueBtn.addEventListener('click', incorrectAnswers);
    trueBtn.addEventListener('click', askQ5);
    falseBtn.addEventListener('click', correctAnswers);
    falseBtn.addEventListener('click', askQ5);
};

function askQ3() {
    var setUp = questionSetUp();
    cardQ.textContent = questionsArray[2];
    trueBtn.addEventListener('click', incorrectAnswers);
    trueBtn.addEventListener('click', askQ4);
    falseBtn.addEventListener('click', correctAnswers);
    falseBtn.addEventListener('click', askQ4);
};

function askQ2() {
    var setUp = questionSetUp();
    cardQ.textContent = questionsArray[1];
    trueBtn.addEventListener('click', correctAnswers);
    trueBtn.addEventListener('click', askQ3);
    falseBtn.addEventListener('click', incorrectAnswers);
    falseBtn.addEventListener('click', askQ3);
};

function askQ1() {
    var setUp = questionSetUp();
    cardQ.textContent = questionsArray[0];
    trueBtn.addEventListener('click', correctAnswers);
    trueBtn.addEventListener('click', askQ2);
    falseBtn.addEventListener('click', incorrectAnswers);
    falseBtn.addEventListener('click', askQ2);
};

function beginQuiz() {
    startTime();
    askQ1();
};

startBtn.addEventListener('click', beginQuiz);