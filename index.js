let score = 0;
var scoreDisplay = document.getElementById('score');

var holes = Array.from(document.getElementsByClassName("hole"));

var randomHoleIndex = Math.floor((Math.random() * 9));
setInterval(function() { holes[randomHoleIndex].classList.toggle("mole") }, 500);
