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
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
  }
};

let numButtons = document.querySelectorAll(".btn-num");

let displayValueOne = document.querySelector(".display-value_one");

displayValueOne.textContent = 0;

let displayArrayValue = [];

function getNumber(e) {
  // Push Number into the array
  displayArrayValue.push(e.target.value);
  // Loop through all numbers of the array
  let getNumbersArray = displayArrayValue.map((num) => {
    return num;
  });
  // Create number
  getNumbersArray = getNumbersArray.join("");
  // Update displayValue
  displayValueOne.textContent = getNumbersArray;
}

numButtons.forEach((numButton) => {
  numButton.addEventListener("click", getNumber);
});

let operatorButtons = document.querySelectorAll(".operator");

let setOperator = (e) => {};

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", setOperator);
});
