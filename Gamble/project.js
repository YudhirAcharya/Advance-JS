//npm init -for pakage json
//npm i prompt-sync -for user input

// 1. deposite money
// 2. determine lines to bet
// 3. collect bet amount
// 4. spin slot machine
// 5. check if user win
// 6. give/take money
// 7. play again

//get input
const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;
const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};
const SYMBOLS_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

//1
let deposit = () => {
  while (true) {
    const depositAmount = prompt(
      "Enter a deposit amount- "
    );
    //change to float
    const numberDepositAmount = parseFloat(depositAmount);
    //validation
    if (
      isNaN(numberDepositAmount) ||
      numberDepositAmount < 0
    ) {
      console.log("invalid amount");
    } else {
      return numberDepositAmount;
    }
  }
};
let balance = deposit();

//2
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt(
      "Enter a number of lines for bet- "
    );
    //change to float
    const numberOfLines = parseFloat(lines);
    //validation
    if (
      isNaN(numberOfLines) ||
      numberOfLines < 0 ||
      numberOfLines > 3
    ) {
      console.log("invalid line");
    } else {
      return numberOfLines;
    }
  }
};
const numberOfLines = getNumberOfLines();

//3
const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter total bet per line- ");
    //change to float
    const numberBet = parseFloat(bet);
    //validation
    if (
      isNaN(numberBet) ||
      numberBet <= 0 ||
      numberBet > balance / lines
    ) {
      console.log("invalid bet");
    } else {
      return numberBet;
    }
  }
};
const bet = getBet(balance, numberOfLines);

//4
const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(
    SYMBOLS_COUNT
  )) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(
        Math.random() * reelSymbols.length
      );
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
};

const reels = spin();

//5
//transpose to determine rows
const transpose = (reels) => {
  const rows = [];
  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
};
const rows = transpose(reels);

//
const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of rows.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

printRows(rows);

//
const getWinnings = (rows, bet, lines) => {
  let winnings = 0;
  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }
    if (allSame) {
      winnings += bet * SYMBOLS_VALUES[symbols[0]];
    }
  }
  return winnings;
};
const winnings = getWinnings(rows, bet, numberOfLines);
console.log("you win " + winnings);
