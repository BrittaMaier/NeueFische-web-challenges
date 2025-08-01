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
  console.log("2 euros per hotdog");
} else if (5 <= numberOfHotdogs < 100) {
  console.log("1.50 euros per hotdog");
} else if (100 <= numberOfHotdogs < 1000000) {
  console.log("1 euro per hotdog");
} else {
  console.log("0.10 euro per hotdog");
}

// Part 4: Daytime
const currentHour = 12;

const statement = "";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
