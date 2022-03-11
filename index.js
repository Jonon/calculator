function add(a, b) {
  return a + b;
}

let subtract = (a, b) => {
  return a - b;
};

let multiply = (a, b) => {
  return a * b;
};

let divide = (a, b) => {
  return a / b;
};

let operate = (operator, a, b) => {
  a = Number(a);
  b = Number(b);
  // calls one of the operators
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};

let numButtons = document.querySelectorAll(".btn-num");
let operatorButtons = document.querySelectorAll(".operator");
let equalButton = document.querySelector(".equal");
let clearButton = document.querySelector(".btn-clear");

let firstNum = "";
let secondNum = "";
let operator = "";
let sum = "";

let displayValue = document.querySelector(".display-value");
displayValue.textContent = 0;

function setNumber(e) {
  let number = e.target.value;
  // Check if operator is set
  if (operator === "") {
    firstNum += number;
    displayValue.textContent = firstNum;
  } else {
    secondNum += number;
    displayValue.textContent += number;
  }
}

let setErrorMessage = (errorMessage) => {
  displayValue.textContent = errorMessage;
};

let setOperator = (e) => {
  if (operator !== "") {
    displayValue.textContent += e.target.value;
    sum = operate(operator, firstNum, secondNum);
    firstNum = sum;
    secondNum = "";
    // Set new operator
    operator = e.target.value;
  } else if (operator === "") {
    operator = e.target.value;
    displayValue.textContent += operator;
  }
};

let calc = () => {
  // Check if numbers are set
  if (firstNum && secondNum !== "") {
    // Save sum
    sum = operate(operator, firstNum, secondNum);
    firstNum = sum;
    // display sum
    displayValue.textContent = firstNum;
    secondNum = "";

    // Check for infinity number
    if (!isFinite(sum)) {
      setErrorMessage("ERROR");
    }
  }
};

let clear = () => {
  firstNum = "";
  secondNum = "";
  // Set operator value to default
  operator = "";
  displayValue.textContent = 0;
};

numButtons.forEach((numButton) => {
  numButton.addEventListener("click", setNumber);
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", setOperator);
});

equalButton.addEventListener("click", calc);

clearButton.addEventListener("click", clear);
