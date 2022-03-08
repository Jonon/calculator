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
    console.log(firstNum);
    displayValue.textContent = firstNum;
  } else {
    secondNum += number;
    displayValue.textContent += secondNum;
  }
}

let setOperator = (e) => {
  operator = e.target.value;
  displayValue.textContent += operator;
};

let calc = () => {
  // Check if numbers are set
  if (firstNum && secondNum !== "") {
    // Save sum
    sum = operate(operator, Number(firstNum), Number(secondNum));
    // display sum
    displayValue.textContent = sum;
    firstNum = sum;
    secondNum = "";
  }
};

let clear = () => {
  let display = document.querySelector(".display");

  // Remove all children of class display
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }

  // Create new p tag to show displayValue
  displayValue = document.createElement("p");
  displayValue.classList.add("display-value");
  firstNum = "";
  // Set operator value to default
  operator = "";
  displayValue.textContent = 0;

  display.appendChild(displayValue);
};

numButtons.forEach((numButton) => {
  numButton.addEventListener("click", setNumber);
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", setOperator);
});

equalButton.addEventListener("click", calc);

clearButton.addEventListener("click", clear);
