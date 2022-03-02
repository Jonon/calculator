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
  }
}

let setOperator = (e) => {
  operator = e.target.value;
  // Create operator element everytime an operator button is clicked
  let OperatorNum = document.createElement("p");
  OperatorNum.textContent = operator;
  let display = document.querySelector(".display");
  display.appendChild(OperatorNum);
};

let calc = () => {
  // Check if numbers are set
  if (firstNum && secondNum !== "") {
    console.log(operate(operator, Number(firstNum), Number(secondNum)));
  }
};

numButtons.forEach((numButton) => {
  numButton.addEventListener("click", setNumber);
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", setOperator);
});

equalButton.addEventListener("click", calc);
