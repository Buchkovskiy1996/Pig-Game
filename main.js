"use strict"
//selecting elements
const scoreEl1 = document.getElementById("score--0");
const scoreEl2 = document.getElementById("score--1");
const curent01 = document.getElementById("current--0");
const curent02 = document.getElementById("current--1");
const playerLeft = document.querySelector(".section__left");
const playerRight = document.querySelector(".section__right");
const diceEl = document.querySelector(".img__dice");
const btnNew = document.querySelector(".new__game");
const btnRoll = document.querySelector(".roll__dise");
const btnhold = document.querySelector(".hold");


const scores = [0, 0];
let scoreCurrent = 0;
let activePlayer = 0;


//Starting conditions
scoreEl1.textContent = 0;
scoreEl2.textContent = 0;
diceEl.classList.add("hidden");

//Rolling dice function

btnRoll.addEventListener("click", function() {
// 1 Generation random dice roll
const dice = Math.trunc(Math.random () * 6) + 1;
// 2 display roll
diceEl.classList.remove("hidden");
diceEl.src = `dice-${dice}.png`;
// 3 Cheak for rolled 1 if true switch to next player

if (dice !==1) {
 scoreCurrent+=dice;
 document.getElementById(`current--${activePlayer}`).textContent = scoreCurrent;
} else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    scoreCurrent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerLeft.classList.toggle("section--active");
    playerRight.classList.toggle("section--active");
}
})