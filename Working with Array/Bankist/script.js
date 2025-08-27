'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const calcDisplayBalance = (movements) => {
    const balance = movements.reduce((acc, mov, i) => {
        return acc += mov;
    }, 0);
    labelBalance.textContent = `${balance} EUR`;
    return balance;
}

let sort =false;

const displayMovements = function (movements,sort=false) {
    let tempMovement = [...movements];
    if(sort)
    {
        tempMovement.sort((a,b)=>a-b);
    }
    containerMovements.textContent = '';
    tempMovement.forEach((movement, i) => {
        const type = movement > 0 ? "deposit" : "withdrawal";
        const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">$${movement}</div>
        </div>`
        containerMovements.insertAdjacentHTML('afterbegin', html);
    })
}

const welcomeUser = (str) => {
    labelWelcome.textContent = `Welcome ${str.split(' ')[0]}`;
}

const calcDeposit = (movements) => {
    return movements.filter(mov => { return mov > 0 }).reduce((acc, mov) => {
        return acc += mov;
    });
}

const calcWithdrawal = (movements) => {
    return movements.filter(movement => movement < 0).reduce((acc, mov) => {
        return acc += Math.abs(mov);
    }, 0);
}

const calcInterest = (movements, interest) => {
    return movements.filter(movement => movement > 0).map((deposit) => {
        return (deposit * 1.2 )/100;
    }).filter((arr)=>arr>=1).reduce((acc, amount) => {
        return acc + amount;
    });
}

const displaySummary = (account) => {
    const totalDeposit = calcDeposit(account.movements);
    const totalWithdraw = calcWithdrawal(account.movements);
    const interest = calcInterest(account.movements, account.interestRate);
    labelSumIn.textContent = `${totalDeposit}€`;
    labelSumOut.textContent = `${totalWithdraw}€`;
    labelSumInterest.textContent = `${interest}€`;
}


const updateUI = (account) => {
    inputLoginUsername.value ='';
    inputLoginPin.value ='';
    inputLoginPin.blur();
    containerApp.style.opacity = 1;
    welcomeUser(account.owner);
    calcDisplayBalance(account.movements);
    displayMovements(account.movements);
    displaySummary(account);
}


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const createInitials = (str) => {
    return str.toLowerCase().split(' ').map((element) => {
        return element[0];
    }).join('');
}

let currentAccount;

const transerAmount = (transerTo,amount)=>
{
    const accountTransferTo = accounts.find(acc=>createInitials(acc.owner)===transerTo);
    console.log(accountTransferTo);
    if(!accountTransferTo || amount>calcDeposit(currentAccount.movements))
    {
        alert('Invalid Transaction');
        return;
    }
    currentAccount.movements.push(-amount);
    accountTransferTo.movements.push(amount);
    console.log(accountTransferTo.movements);
    updateUI(currentAccount);
}

//Button Events
btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    currentAccount=undefined;
    const userName = inputLoginUsername.value;
    const password = inputLoginPin.value;
    accounts.forEach((account) => {
        if (createInitials(account.owner) === userName && password == account.pin) {
            updateUI(account);
            currentAccount=account;
        }
    })
    currentAccount || alert("Invalid Username or Password");
});

btnTransfer.addEventListener('click',(e)=>
{
    e.preventDefault();
    const transferTo = inputTransferTo.value;
    const amount = Number(inputTransferAmount.value);
    transerAmount(transferTo,amount);
})

btnClose.addEventListener('click',(e)=>
{
    e.preventDefault();
    const userName = inputCloseUsername.value;
    const pin = inputClosePin.value;
    const accountsIndex = accounts.findIndex(acc=>createInitials(acc.owner)===userName);
    if(!accounts[accountsIndex] || pin!=accounts[accountsIndex].pin)
    {
        alert('Invalid Credentials');
        return;
    }
    accounts.splice(accountsIndex,1);
    containerApp.style.opacity =0;
    console.log(accounts);
    inputCloseUsername.value='';
    inputClosePin.value = '';
})

btnLoan.addEventListener('click',(e)=>
{
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);
    const giveLoan = currentAccount.movements.some(mov=>amount<=mov*10);
    if(!giveLoan)
    {
        alert("Sorry, We can't give you loan!! :(");
        return;
    }
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    inputLoanAmount.value = '';
    inputLoanAmount.blur();
})

btnSort.addEventListener('click',()=>
{
    sort = sort ? false:true;
    displayMovements(currentAccount.movements,sort); 
})