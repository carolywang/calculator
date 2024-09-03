function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstNumber;
let operator;
let secondNumber;

function operate(op, num1, num2) {
  op(num1, num2);
}

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".num");
for (const num of numbers) {
  num.addEventListener("click", () => {
    display.textContent = num.innerText;
  });
}
