'use strict';
//  SELECTING ELEMENTS
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const current0 = document.querySelector('#current--0');
const score1El = document.getElementById('score--1');
const current1 = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHoldDice = document.querySelector('.btn--hold');
const diceImage = document.querySelector('.dice');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;

// Rolling the dice//

btnRoll.addEventListener('click', function () {
  // 1.GENERATING A RANDOM NUMBER
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2.DISPLAY DICE
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. CHECK FOR ROLLED 1: if true switch to next player.
  if (dice !== 1) {
    //Add dice to current score
    currentScore = currentScore + dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    //Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});
