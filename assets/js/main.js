const homeDisplay = document.querySelector(".homeScore");
let HomeScore = 0;
const awayDisplay = document.querySelector(".awayScore");
let awayScore = 0;
let home = document.getElementById("home");
let away = document.getElementById("away");
let inputhome = document.querySelector("#HomeName");
let inputaway = document.querySelector("#AwayName");

// ===============Funktionen ==============
function plusone() {
  HomeScore += 1;
  homeDisplay.innerHTML = HomeScore;
}
function plustwo() {
  HomeScore += 2;
  homeDisplay.innerHTML = HomeScore;
}
function plusthree() {
  HomeScore += 3;
  homeDisplay.innerHTML = HomeScore;
}

function plusoneAway() {
  awayScore += 1;
  awayDisplay.innerHTML = awayScore;
}
function plustwoAway() {
  awayScore += 2;
  awayDisplay.innerHTML = awayScore;
}
function plusthreeAway() {
  awayScore += 3;
  awayDisplay.innerHTML = awayScore;
}
function reset() {
  HomeScore = 0;
  awayScore = 0;
  awayDisplay.innerHTML = awayScore;
  homeDisplay.innerHTML = HomeScore;
  home.innerHTML = "Home";
  away.innerHTML = "Away";
}
function change() {
  home.innerHTML = inputhome.value;
  away.innerHTML = inputaway.value;
}

// ===========Modal=========

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
