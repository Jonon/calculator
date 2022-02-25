function add(num, num2) {
  return num + num2;
}

let subtract = (num, num2) => {
  return num - num2;
};

let multiply = (num, num2) => {
  return num * num2;
};

let divide = (num, num2) => {
  return num / num2;
};

let operate = (operator, num, num2) => {
  // calls one of the operators
  switch (operator) {
    case "add":
      return add(num, num2);
    case "subtract":
      return subtract(num, num2);
    case "multiply":
      return multiply(num, num2);
    case "divide":
      return divide(num, num2);
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
