'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

for(const [num,playerName] of game.scored.entries())
{
    console.log(`Goal ${num+1}: ${playerName}`);
}
let total =0;
const score = Object.values(game.odds);
for(const i of score)
{
    total+=i;
}
const avg=total/score.length;
console.log('Average of Odds',avg);

for(const [team,result] of Object.entries(game.odds))
{
    console.log(`Odds of ${team=='x'?"draw":"victory"} ${game[team] ?? ""}: ${result}`);
}

game.scorers = {}

for(const player of (game.scored))
{
    game.scorers[player]=game.scorers[player] || 0;
    game.scorers[player]+=1;
}
console.log(game.scorers);