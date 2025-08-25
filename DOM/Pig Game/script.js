
'use strict';

const newGameBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
const players = document.querySelectorAll('.player');

let teamAScore =0;
let teamBScore =0;
let currentPlayer = 0;
let tempScore =0;
const winnerScore = 50;

const rollDice = ()=>{
    const random = Math.trunc(Math.random()*6)+1;
    diceImg.src = `images/dice-${random}.png`;
    if(random==1)
    {
        document.querySelector(`#current--${currentPlayer}`).textContent = 0;
        currentPlayer= currentPlayer==0?1:0;
        tempScore=-1;
        players.forEach((player)=> player.classList.toggle("player--active"));
    }
    tempScore+=random;
    document.querySelector(`#current--${currentPlayer}`).textContent = tempScore;
}

rollBtn.addEventListener('click',rollDice);

const holdScore = ()=>
{
    players.forEach((player)=> player.classList.toggle("player--active"));
    currentPlayer==0?teamAScore+=tempScore:teamBScore+=tempScore;
    document.querySelector(`#score--${currentPlayer}`).textContent = currentPlayer==0?teamAScore:teamBScore;
    if(teamAScore>=winnerScore || teamBScore>=winnerScore)
    {
        document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner'); 
    }
    tempScore=0;
    document.querySelector(`#current--${currentPlayer}`).textContent = tempScore;
    currentPlayer= currentPlayer==0?1:0;
    document.querySelector(`#current--${currentPlayer}`).textContent = tempScore;
    
}

holdBtn.addEventListener('click',holdScore);

const restart = ()=>
{
    teamAScore =0;
    teamBScore =0;
    tempScore=0;
    currentPlayer=0;
    document.querySelector(`#current--1`).textContent = 0;
    document.querySelector(`#current--0`).textContent = 0;
    document.querySelector(`#score--0`).textContent = 0;
    document.querySelector(`#score--1`).textContent = 0;
    if(document.querySelector('.player--1').classList.contains('player--active'))
    {
        players.forEach((player)=> player.classList.toggle("player--active")); 
    }
    players.forEach((player)=>
    {
        player.classList.remove('player--winner');
    })
}

newGameBtn.addEventListener('click',restart);