console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";
if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;
const check = number % 2;
if (check === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;
if (numberOfHotdogs < 5) {
    totalPrice=numberOfHotdogs*2;
  console.log("You have to pay:",totalPrice);
} else if (5 <= numberOfHotdogs < 100) {
  totalPrice=numberOfHotdogs*1.5;
  console.log("You have to pay:",totalPrice);
} else if (100 <= numberOfHotdogs < 1000000) {
  totalPrice=numberOfHotdogs*1;
  console.log("You have to pay:",totalPrice);
} else {
  totalPrice=numberOfHotdogs*0.1;
  console.log("You have to pay:",totalPrice);
}

// Part 4: Daytime
const currentHour = 12;

let statement = "";

console.log(statement=currentHour< 17 ? "Still need to learn..." : "Hello Coach!";);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
