const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".op");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal-point");

let firstNumber = null;
let secondNumber = null;
let operator1 = "";
let operator2 = "";
let number = "";
let shouldReset = false;
let equalEvaluated = false;
let errorMessage = "Oops!";
display.textContent = "0";

// button click events
for (const num of numbers) {
  num.addEventListener("click", () => {
    return appendNumber(num);
  });
}

for (const op of operators) {
  op.addEventListener("click", () => {
    if (firstNumber === null) {
      firstNumber = storeNum();
      operator1 = op.innerText;
    } else if (equalEvaluated) {
      firstNumber = storeNum();
      operator1 = op.innerText;
      equalEvaluated = false;
    } else {
      secondNumber = storeNum();
      operator2 = op.innerText;
    }
    // console.log("first number: " + firstNumber);
    // console.log("second number: " + secondNumber);
    // console.log("first operator: " + operator1);
    // console.log("second operator: " + operator2);

    evaluate();
    shouldReset = true;
  });
}

decimal.addEventListener("click", () => {
  if (!display.textContent.includes(".")) {
    display.textContent += decimal.innerText;
  }
});

equal.addEventListener("click", () => {
  secondNumber = storeNum();
  //   console.log("second number: " + secondNumber);
  resetDisplay();
  evaluate();
  shouldReset = false;
  equalEvaluated = true;
});

clear.addEventListener("click", () => {
  display.textContent = "0";
  firstNumber = null;
  secondNumber = null;
  operator1 = "";
  operator2 = "";
  number = "";
  shouldReset = false;
  equalEvaluated = false;
});

// functions
function resetDisplay() {
  display.textContent = "";
}

function appendNumber(num) {
  if (display.textContent === "0" || shouldReset) {
    resetDisplay();
  }
  display.textContent += num.innerText;
  shouldReset = false;
}

function storeNum() {
  number = Number(display.textContent);
  return number;
}

function evaluate() {
  if (secondNumber != null) {
    result = operate(operator1, firstNumber, secondNumber);
    // console.log("result: " + result);
    result = Math.round(result * 1000) / 1000;
    display.textContent = result;
    firstNumber = Number(display.textContent);
    secondNumber = null;
    operator1 = operator2;
  }
}

function operate(op, num1, num2) {
  if (op === "+") {
    return num1 + num2;
  }
  if (op === "-") {
    return num1 - num2;
  }
  if (op === "x") {
    return num1 * num2;
  }
  if (op === "/") {
    if (num2 === 0) {
      console.log(errorMessage);
      return errorMessage;
    } else {
      return num1 / num2;
    }
  }
  if (op === "") {
    return 0;
  }
}
