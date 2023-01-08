"use strict"
//selecting elements
const scoreEl1 = document.getElementById("score--0");
const scoreEl2 = document.getElementById("score--1");
const curent01 = document.getElementById("current--0");
const curent02 = document.getElementById("current--1");
const playerLeft = document.querySelector(".player--0");
const playerRight = document.querySelector(".player--1");
const diceEl = document.querySelector(".img__dice");
const btnNew = document.querySelector(".new__game");
const btnRoll = document.querySelector(".roll__dise");
const btnhold = document.querySelector(".hold");

let scores, scoreCurrent, activePlayer, playing;


//Starting conditions


const init = function () {
     scores = [0, 0];
    scoreCurrent = 0;
    activePlayer = 0;
    playing = true;

    scoreEl1.textContent = 0;
    scoreEl2.textContent = 0;
    curent01.textContent = 0;
    curent02.textContent = 0;

    diceEl.classList.add("hidden");
    playerLeft.classList.remove("player__winner");
    playerRight.classList.remove("player__winner");
    playerLeft.classList.add("player__active");
    playerRight.classList.remove("player__active");
}


const switchPlayer = function (){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    scoreCurrent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerLeft.classList.toggle("player--active");
    playerRight.classList.toggle("player--active");
}


//Rolling dice function

btnRoll.addEventListener("click", function() {
    if(playing) {
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
    switchPlayer();
    }
        }
})

btnhold.addEventListener("click", function (){
    if(playing) {
 //add current score to active players score
 scores[activePlayer] += scoreCurrent;
 document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

 //Check if players score is >=100

 if(scores[activePlayer] >= 100) {
     playing = false;
     diceEl.classList.add("hidden");
     document.querySelector(`.player--${activePlayer}`).classList.add("player__winner");
     document.querySelector(`.player--${activePlayer}`).classList.remove("player__active");
 } else {
 //swich to next player
 switchPlayer();
 }
    }
})
 //reset
btnNew.addEventListener("click", init)