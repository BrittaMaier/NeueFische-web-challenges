console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --v-- write your code here --v--
const title = "The Lord of the Javascript";
const author = "Mario";
let rating = 4.2;
let sales = 120;
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

// --v-- write your code here --v--
console.log(
  "Title: " +
    title +
    "\nAuthor: " +
    author +
    "\nRating: " +
    rating +
    "\nSales: " +
    sales
);
/*Updated variables and console.log of updated variables*/
sales = sales + 4;
rating = rating - 1;
console.log(
  "Title: " +
    title +
    "\nAuthor: " +
    author +
    "\nRating: " +
    rating +
    "\nSales: " +
    sales
);

// --^-- write your code here --^--

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/

// --v-- write your code here --v--
/*Declaration of function using arguments (meaning variables defined outside of the function)*/
function logBookData(title, author, rating, sales) {
  console.log(
    "Title: " +
      title +
      "\nAuthor: " +
      author +
      "\nRating: " +
      rating +
      "\nSales: " +
      sales
  );
}
/*Second variable update*/
console.log();
sales = sales + 1;
rating = rating + 0.1;
console.log();
// --^-- write your code here --^--
