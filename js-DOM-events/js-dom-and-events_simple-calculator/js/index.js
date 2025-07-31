console.clear();

let operand1 = 12;
let operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.
let addButton = document.querySelector('[data-js="add"]');
let subtractButton = document.querySelector('[data-js="subtract"]');
let multiplyButton = document.querySelector('[data-js="multiply"]');
let divideButton = document.querySelector('[data-js="divide"]');
let exponentButton = document.querySelector('[data-js="exponent"]');
let moduloButton = document.querySelector('[data-js="modulo"]');
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
let sum = addButton.addEventListener("click", () => {
  operand1 + operand2;
});
console.log(sum);
let subtraction = addButton.addEventListener("click", () => {
  operand1 - operand2;
});
console.log(multiplication);
let multiplication = addButton.addEventListener("click", () => {
  operand1 * operand2;
});
console.log(multiplication);
let division = addButton.addEventListener("click", () => {
  operand1 / operand2;
});
console.log(division);
let exponential = addButton.addEventListener("click", () => {
  operand1 ** operand2;
});
console.log(exponential);
let remainder = addButton.addEventListener("click", () => {
  operand1 % operand2;
});
console.log(remainder);
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
let increaseByOne = document.querySelector('[data-js="increase-by-one"]');
let increasedByOne = increaseByOne.addEventListener("click", () => {
  operand1++;
});
console.log(increasedByOne);
let increaseByFive = document.querySelector('[data-js="increase-by-five"]');
let increasedByFive = increaseByFive.addEventListener("click", () => {
  operand1 = operand1 + 5;
});
console.log(increasedByFive);
let decreaseByOne = document.querySelector('[data-js="decrease-by-one"]');
let decreasedByOne = decreaseByOne.addEventListener("click", () => {
  operand1--;
});
console.log(decreasedByOne);
let decreaseByFive = document.querySelector('[data-js="decrease-by-five"]');
let decreasedByFive = decreaseByFive.addEventListener("click", () => {
  operand1 = operand1 - 5;
});
console.log(decreasedByFive);
let multiplyByTwo = document.querySelector('[data-js="multiply-by-two"]');
let multipliedByTwo = multipliedByTwo.addEventListener("click", () => {
  operand1 * 2;
});
console.log(multipliedByTwo);

// --v-- write your code here --v--

// --^-- write your code here --^--
