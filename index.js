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
