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

const displayMovements = function (account, sort = false) {
  // With inner HTML we can easly clear the elements value
  containerMovements.innerHTML = '';
  console.log('test');
  const moves = sort
    ? account.movements.slice().sort(function (a, b) {
        return a - b;
      })
    : account.movements;
  moves.forEach(function (value, i) {
    const type = value > 0 ? 'deposit' : 'withdrawal';
    // This is called template literall
    const html = `
          <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${value}€</div>
          </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

let isSorted = false; // Przechowuje stan sortowania
btnSort.addEventListener('click', function () {
  isSorted = !isSorted; // Przełączanie stanu
  displayMovements(currentAccount, isSorted);
});

const displayIN = function (account) {
  const totalIN = account.movements
    .filter(function (value) {
      return value > 0;
    })
    .reduce(function (current, value) {
      return current + value;
    }, 0);
  labelSumIn.textContent = `${totalIN}€`;
  labelSumInterest.textContent = `${totalIN * (account.interestRate / 100)}€`;
};

const displayOUT = function (account) {
  const totalIN = account.movements
    .filter(function (value) {
      return value < 0;
    })
    .reduce(function (current, value) {
      return current + value;
    }, 0);
  labelSumOut.textContent = `${totalIN}€`;
};

// Adding username to objects
accounts.forEach(function (account) {
  account['username'] = account.owner
    .toLowerCase()
    .split(' ')
    .map(function (data) {
      return data[0];
    })
    .join('');
});
console.log(accounts);

// Function to count balance
const balance = function (account) {
  account.balance = account.movements.reduce(function (current, value, i) {
    return current + value;
  }, 0);
  labelBalance.textContent = account.balance + ' €';
};

// Update UI
function updateUI(acc) {
  // Display movements
  displayMovements(acc);
  // Display deposit
  displayIN(acc);
  // Display withdraw
  displayOUT(acc);
  // Display Balance
  balance(acc);
}

// login user
// Important to take out the current user of function inner scope
let currentAccount;
let receiver;

btnLogin.addEventListener('click', function (e) {
  // prevent button from submiting data
  e.preventDefault();

  let user = inputLoginUsername.value.toLowerCase();
  let pin = inputLoginPin.value;

  currentAccount = accounts.find(function (acc) {
    return acc.username === user && acc.pin === Number(pin);
  });

  if (currentAccount) {
    containerApp.style.opacity = '1';
    labelWelcome.textContent = `Good Day, ${
      currentAccount.owner.split(' ')[0]
    }!`;
    updateUI(currentAccount);
    inputLoginUsername.value = inputLoginPin.value = '';
    // Removal of blur
    inputLoginPin.blur();
  }
});

// money transfer
btnTransfer.addEventListener('click', function (e) {
  // prevent button from submiting data
  e.preventDefault();
  const receiverStrig = inputTransferTo.value;
  receiver = accounts.find(function (user) {
    return user.username === receiverStrig.toLowerCase();
  });
  const transferAmount = Number(inputTransferAmount.value);
  if (receiver) {
    if (currentAccount.balance > transferAmount) {
      currentAccount.movements.push(-transferAmount);
      receiver.movements.push(transferAmount);
      updateUI(currentAccount);
      // Receiver gets money
    } else {
      alert(`${transferAmount} is greater than account balance.\Try again.`);
    }
  } else {
    alert(`${receiverStrig} user doesn't exist.\nTry again`);
  }
});

// closing accout
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // findIndex return us index number of object in array
    const index = accounts.findIndex(function (acc) {
      return acc.username === currentAccount.username;
    });
    if (index !== -1) {
      accounts.splice(index, index + 1);
      containerApp.style.opacity = 0;
      inputClosePin.blur();
      labelWelcome.textContent = 'Log in to get started';
    }
  }
});

// taking loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanValue = Number(inputLoanAmount.value);
  if (
    currentAccount.movements.some(function (data) {
      return data * 1.1 > loanValue;
    })
  ) {
    currentAccount.movements.push(loanValue);
    updateUI(currentAccount);
  }
});
