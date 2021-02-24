'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

console.log(score0El, score1El, diceEl);
//Начальные значения;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
//Ролл кубина
btnRoll.addEventListener('click', function () {
  //1.Создание рандомного ролла 1-6
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //2. Показать кубик
  diceEl.classList.remove('hidden');
  diceEl.src = `img/dice-${dice}.png`;
  //3. Проверка на 1
  if (dice !== 1) {
    //Добавляет очки
    currentScore += dice;
    current0El.textContent = currentScore; //Change later
  } else {
    //Меняет на следующего игрока
  }
});
