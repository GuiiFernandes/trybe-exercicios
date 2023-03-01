let balance = 1000;

function addBalance (value) {
  return balance + value;
}

function subtractBalance (value) {
  return balance - value;
}

function multiplyRateBalance (rate) {
  return balance * rate;
}

function dividedBalance (value) {
  return balance / value;
}

balance = addBalance(500);
console.log(`Saldo atual: R$${balance.toFixed(2)}`);
balance = subtractBalance(200);
console.log(`Saldo atual: R$${balance.toFixed(2)}`);
balance = multiplyRateBalance(1.10);
console.log(`Saldo atual: R$${balance.toFixed(2)}`);
balance = dividedBalance(2);
console.log(`Saldo atual: R$${balance.toFixed(2)}`);