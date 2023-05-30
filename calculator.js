let prevScreenValue = 0;
let preScreenVValue1 = 0;
let currentScreenValue = 0;
let operationType;
let lastOperationType = "=";
const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
const operationScreen = document.querySelector(
  ".current-operands-and-operator"
);
const clear = document.querySelector(".reset");
const deletee = document.querySelector(".delete");
clear.addEventListener("click", () => {
  operationScreen.textContent = 0;
});
deletee.addEventListener("click", () => {
  console.log("clicked");
  let str = operationScreen.textContent;
  operationScreen.textContent = str.slice(0, -1);
});
operationScreen.textContent += currentScreenValue;
const screen1 = (value) => {
  if (operationScreen.textContent == 0) {
    operationScreen.textContent = "";
  }
  operationScreen.textContent += value;
  //the following line of code is used for controlling the operation values written on the operation screen
  if (
    value == "+" ||
    value == "-" ||
    value == "X" ||
    value == "/" ||
    value == "="
  ) {
    let str = operationScreen.textContent;
    let last = str.charAt(str.length - 2);
    if (
      last == "+" ||
      last == "-" ||
      last == "X" ||
      last == "/" ||
      last == "="
    ) {
      str = str.slice(0, -2);
      operationScreen.textContent = str;
      operationScreen.textContent += value;
    }

    operationType = value;
  }
  if (
    operationScreen.textContent == "X" ||
    operationScreen.textContent == "-" ||
    operationScreen.textContent == "+" ||
    operationScreen.textContent == "/"
  ) {
    operationScreen.textContent = 0;
  }

  if (value == "=") {
  }
};
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    screen1(number.textContent);
  });
});
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    screen1(operator.textContent);
  });
});
console.log();
