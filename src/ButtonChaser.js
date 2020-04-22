var score = 0;
var width;
var height;
var timer;
var iterations = 0;

window.addEventListener("load", () => {
  width = innerWidth;
  height = innerHeight;
  width -= 22;
  height -= 97;
  document.getElementById("gameArea").style.width = width + "px";
  document.getElementById("gameArea").style.height = height + "px";
  document.getElementById("dot").addEventListener("click", detectHit);
  width -= 74;
  height -= 74;
  moveDot();
});

function detectHit() {
  score++;
  document.getElementById("scoreLabel").innerHTML = "Score: " + score;
}

function moveDot() {
  var x = Math.floor(Math.random() * width);
  var y = Math.floor(Math.random() * height);
  if (x < 10) x = 10;
  if (y < 10) y = 10;
  document.getElementById("dot").style.left = x + "px";
  document.getElementById("dot").style.top = y + "px";

  if (iterations < 30) timer = setTimeout("moveDot()", 1000);
  else {
    document.getElementById("scoreLabel").innerHTML += "     Game Over!";
    document.getElementById("dot").removeEventListener("click", detectHit);
    clearTimeout(timer);
  }
  iterations++;
}
