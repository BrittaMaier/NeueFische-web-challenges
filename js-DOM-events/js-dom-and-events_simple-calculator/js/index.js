console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');
// --v-- write your code here --v--

// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/
addButton.addEventListener("click", () => {
  const sum = operand1 + operand2;
});
console.log("Sum:", sum);
subtractButton.addEventListener("click", () => {
  const subtraction = operand1 - operand2;
});
console.log("Subtraction:", subtraction);
multiplyButton.addEventListener("click", () => {
  const multiplication = operand1 * operand2;
});
console.log("Multiplication:", multiplication);
divideButton.addEventListener("click", () => {
  const division = operand1 / operand2;
});
console.log("Division:", division);
exponentButton.addEventListener("click", () => {
  const exponential = operand1 ** operand2;
});
console.log("Exponential:", exponential);
moduloButton.addEventListener("click", () => {
  const remainder = operand1 % operand2;
});
console.log("Modulo:", remainder);
// --v-- write your code here --v--

// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/
const increaseByOne = document.querySelector('[data-js="increase-by-one"]');
increaseByOne.addEventListener("click", () => {
  operand1++;
});
console.log("Increased by One:", operand1);
const increaseByFive = document.querySelector('[data-js="increase-by-five"]');
increaseByFive.addEventListener("click", () => {
  operand1 = operand1 + 5;
});
console.log("Increased by Five:", operand1);
const decreaseByOne = document.querySelector('[data-js="decrease-by-one"]');
decreaseByOne.addEventListener("click", () => {
  operand1--;
});
console.log("Decreased by One:", operand1);
const decreaseByFive = document.querySelector('[data-js="decrease-by-five"]');
decreaseByFive.addEventListener("click", () => {
  operand1 = operand1 - 5;
});
console.log("Decreased by Five:", operand1);
const multiplyByTwo = document.querySelector('[data-js="multiply-by-two"]');
multipliedByTwo.addEventListener("click", () => {
  operand1 = operand1 * 2;
});
console.log("Multiplied by Two:", operand1);
const divideByTwo = document.querySelector('[data-js="divide-by-two"]');
divideByTwo.addEventListener("click", () => {
  operand1 = operand1 / 2;
});
console.log("Divided by Two:", operand1);
// --v-- write your code here --v--

// --^-- write your code here --^--
