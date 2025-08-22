let randNum = Math.trunc(Math.random()*20)+1;
let score = 20;
let highestScore = 0;

const guessNumContainer = document.querySelector('.guess');
const messageContainer = document.querySelector('.message');
const labelScore = document.querySelector('.label-score');
const labelHighScore = document.querySelector('.label-highscore');
const button = document.querySelector('.check');
const body = document.querySelector('body');
const again = document.querySelector('.again');
const number = document.querySelector('.number');

const compareNum = (guessNum)=>{
    if(guessNum==randNum)
    {
        messageContainer.textContent = "Correct number!";
        labelHighScore.textContent = `🥇 Highscore: ${highestScore<=score?score:highestScore}`;
        body.style.backgroundColor= 'green';
        number.textContent = randNum;
    }
    else if(guessNum>randNum)
    {
        messageContainer.textContent = "Too High!!";
        score--;
    }
    else
    {
        messageContainer.textContent = "Too Low!!";
        score--;
    }
    labelScore.textContent =  `💯 Score: ${score}`;
}

button.addEventListener('click',()=>
{
    const guessNum = Number(guessNumContainer.value);
    guessNumContainer.value = '';
    console.log(guessNum);
    compareNum(guessNum,randNum);
});

again.addEventListener('click',()=>
{
    randNum = Math.trunc(Math.random()*20)+1;
    body.style.backgroundColor= '#222';
    messageContainer.textContent = "Let's Play Again";
    score = 20;
    labelScore.textContent =  `💯 Score: ${score}`;
    number.textContent = '?';
})