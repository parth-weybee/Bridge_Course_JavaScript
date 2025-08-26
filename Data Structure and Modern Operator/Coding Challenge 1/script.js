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
    }
};

const [player1, player2] = [game.players[0], game.players[1]];

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const [gk,...fieldplayers] = player1;
console.log(gk,fieldplayers);

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const {team1,x:draw,team2} = game.odds;
console.log(team1,draw,team2);

const printGoals = (score,...players)=>
{
    console.log(`${players.join(", ")} scored score = ${score}`);
}

printGoals(game.score,game.scored);

team1<team2 && console.log('Team1 is more likely to win');
team1<team2 || console.log('Team2 is more likely to win');