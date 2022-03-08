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

let displayValueOne = document.querySelector(".display-value_one");

displayValueOne.textContent = 0;

function setNumber(e) {
  // Check if operator is set
  if (operator === "") {
    firstNum += e.target.value;
    console.log(firstNum);
    displayValueOne.textContent = firstNum;
  } else {
    secondNum += e.target.value;
    displayValueOne.textContent += secondNum;
  }
}

let setOperator = (e) => {
  operator = e.target.value;
  displayValueOne.textContent += operator;
};

let calc = () => {
  // Check if numbers are set
  if (firstNum && secondNum !== "") {
    console.log(operate(operator, Number(firstNum), Number(secondNum)));
  }
};

let clear = () => {
  let display = document.querySelector(".display");

  // Remove all children of class display
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }

  // Create new p tag to show displayValue
  displayValueOne = document.createElement("p");
  displayValueOne.classList.add("display-value_one");
  firstNum = "";
  // Set operator value to default
  operator = "";
  displayValueOne.textContent = 0;

  display.appendChild(displayValueOne);
};

numButtons.forEach((numButton) => {
  numButton.addEventListener("click", setNumber);
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", setOperator);
});

equalButton.addEventListener("click", calc);

clearButton.addEventListener("click", clear);
