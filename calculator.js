let prevScreenValue = 0;
let prevScreenValue1 = 0;
let currentScreenValue = 0;
let operationType;
let prevOperation;
let prevOperation1;
let lastOperationType = "=";
const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
const operationScreen = document.querySelector(
  ".current-operands-and-operator"
);
const result = document.querySelector(".result");
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
  //the following line of code is used for controlling the operation types that needs to be performed written on the operation screen
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
  }
  if (
    operationScreen.textContent == "X" ||
    operationScreen.textContent == "-" ||
    operationScreen.textContent == "+" ||
    operationScreen.textContent == "/"
  ) {
    operationScreen.textContent = 0;
  }
  if (
    value == "-" ||
    value == "+" ||
    value == "X" ||
    value == "/" ||
    value == "="
  ) {
    if (prevScreenValue != 0) {
      prevScreenValue1 = parseInt(
        operationScreen.textContent.slice(
          prevScreenValue.toString().length + 1,
          -1
        )
      );
      console.log(prevScreenValue1);
    } else {
      prevScreenValue = parseInt(operationScreen.textContent.slice(0, -1));
      operationType = value;
    }
  }
  if (value == "=") {
    operate(operationType, prevScreenValue, prevScreenValue1);
    console.log(operate(operationType, prevScreenValue, prevScreenValue1));
    result.textContent = operate(
      operationType,
      prevScreenValue,
      prevScreenValue1
    );
  }
};
const operate = (type, a, b) => {
  console.log(type);
  console.log(a);
  console.log(b);
  switch (type) {
    case "+":
      console.log(a + b);
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "X":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
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
