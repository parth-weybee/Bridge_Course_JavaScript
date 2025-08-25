'use strict';
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    displayResults(fun) {
        fun(this.answers);
    },
    registerNewAnswer() {
        const ans = Number(prompt(`${this.question} \n ${poll.options.join(`\n`)} \n (Write option number)`));
        if (typeof (ans) == "number" && ans < 4) {
            this.answers[ans]++;
        }
        else{
            alert('Enter Valid Answer');
        }
        const type = prompt(`Answer Type String or Array`);
        type=="String"?this.displayResults(displayStr):this.displayResults(displayArray);
    }
}

const displayArray = (answers)=>
{
    alert(`Poll result is ${answers}`);
}

const displayStr = (answers)=>
{
    alert(`Poll result ${answers.join(' ')}`);
}

const pollBtn = document.querySelector('.poll');

pollBtn.addEventListener('click',poll.registerNewAnswer.bind(poll));