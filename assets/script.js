var time = document.getElementById("time");
var card = document.getElementById("card");
var startBtnDiv = document.createElement("div");
var startBtn = document.createElement("button");


time.textContent = "60";
card.textContent = "This is a timed quiz. Press start to begin.";
startBtn.textContent = "START!";

startBtn.setAttribute("style", "width:80px; margin:20px; border:none; border-radius:10px; background-color:rgb(29, 255, 17); cursor:pointer");

card.appendChild(startBtnDiv);
startBtnDiv.appendChild(startBtn);
