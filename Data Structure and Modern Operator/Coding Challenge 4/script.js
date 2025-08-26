'use strict';

document.body.append(document.createElement('textarea'));
 document.body.append(document.createElement('button'));
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

function underScoreToCamalCase()
{
    const str = textarea.value;
    console.log(str);
    textarea.value=""; 
    const rows = str.split('\n');
    let i=1;
    for(const row of rows)
    {
        const [first, second] = row.toLowerCase().trim().split('_');
        const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
        console.log(`${output.padEnd(20)}${'✔'.repeat(i++)}`);
    }
}
button.addEventListener('click',underScoreToCamalCase)
