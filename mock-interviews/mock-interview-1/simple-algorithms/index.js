/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Exercise 1<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Task: Find the maximum
*/
function maxOfTwoNumbers(num1, num2) {
  // TODO:  return biggest out of two numbers
  /*
  1) compare numbers using if 
  2) if condition is met return bigger number
  3) otherwise return other number
  As this will always only compare two numbers no looping or indices or storing variables are needed */
  if (num1 > num2) {
    return num1;
  }
  return num2;
}
//console.log(maxOfTwoNumbers(4, 2));

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Exercise 2<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Task: Find the longest word
*/

const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  // TODO: Return longest word
  /*
  1) create changeable variable longest with initial value of an empty string to store longest word
  2) Use for loop to check each element of an array by using a variable with an initial value of 0 representing the array index
  3) Use if to update longest in the case that the word of the index we are checking is longer than the one stored in longest
  4) return longest after loop is finished
   */
  let longest = "";
  if (words.length === 0) {
    console.log("Input Array is empty!");
    return null;
  }
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
//console.log(findLongestWord(words));

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Exercise 3<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Task: Calculate the sum
*/

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  // TODO:Return sum
  /*
  1) it seems that the input will always be an array
  2) we need to create a changeable variable called sum that
     stores the sum of the elements of the input array and is returned when sumNumbers is called
  3) as we want to address each element of the input array after another we need a loop suitable for
     arrays, e.g. for and a variable referring to the index
  4) We then should add to the sum variable each element (update sum) and return sum after loop is finished  */
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
//console.log(sumNumbers(numbers));

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Exercise 4<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Task: Calculate the average length of the words*/

const words2 = [
  "eclipse",
  "harmony",
  "cascade",
  "labyrinth",
  "quartz",
  "serendipity",
  "zenith",
  "ephemeral",
  "vortex",
  "mystique",
];
//const empty = [];

function averageWordLength(words) {
  // TODO: Return the average lenght of string elements of an input array
  /*
  1) Create changeable variable storing the sum of the element lengths
  2) use loop to go through input array and include each element after another
  3) Update sum by adding length of current element
  4) after loop is finished divide sum by array length (meaning the number of elements in the array)
  5) store this in a variable called average
  6) return average variable
  */
  let sum = 0;
  for (let i = 0; i < words.length; i++) {
    sum += words[i].length;
  }
  if (words.length === 0) {
    console.log("Input Array is empty!");
    return null;
  }
  const average = sum / words.length;
  return average;
}
//console.log(averageWordLength(empty));

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Exercise 5<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Task: Unique arrays - return an array without duplicates*/

const words3 = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(words) {
  // TODO: Return an array with words from the input array including every unique word only once
  /*
  - Create changeable variable uniqueArray initially referring to an empty array
  - use if to address the case of an empty array as the input and return null for this case
  - Go through input array one element at a time
    -->use for loop with index variable starting from 0, with condition of it being smaller than array length and increasing by one in the end
  - if current element is not included in uniqueArray already ...
    -->for this check if elements in uniqueArray equal current element using if
       Can be done using an additional loop or the array method includes() (had to look it up)
  - ...update uniqueArray by adding current element to uniqueArray 
    -->can be done using push array method (had to look it up) or by updating uniqueArray by defining new element
       by setting the element of uniqueArray with index uniqueArray.length (adds one position/index in the end of uniqueArray) to the current element
  - return unique array after loop ended
   */
  let uniqueArray = [];
  if (words.length === 0) {
    console.log("Input array is empty!");
    return uniqueArray;
  }
  for (let i = 0; i < words.length; i++) {
    if (!uniqueArray.includes(words[i])) {
      uniqueArray.push(words[i]);
    }
  }
  return uniqueArray;
}
//console.log(uniquifyArray(words3));
/*Alternative without using push and includes method given by Ecosia Chat AI:
function uniquifyArray(words) {
  let uniqueArray = [];

  if (words.length === 0) {
    console.log("Input array is empty!");
    return null;
  }
  
  for (let i = 0; i < words.length; i++) {
    let isDuplicate = false; // to check for duplicates
    
    // Check if the current word is already in uniqueArray
    for (let j = 0; j < uniqueArray.length; j++) {
      if (words[i] === uniqueArray[j]) {
        isDuplicate = true; // Set flag to true if a duplicate is found
        break; // Exit the inner loop since we found a duplicate
      }
    }
    
    // If it's not a duplicate, add it to uniqueArray
    if (!isDuplicate) {
      uniqueArray[uniqueArray.length] = words[i]; // Manually add the element
    }
  }
  
  return uniqueArray;
}


instead of break, this can be done:
for (let j = 0; j < uniqueArray.length; j++) {
      isDuplicate = isDuplicate || (words[i] === uniqueArray[j]);
    }
*/

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Exercise 6<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Task: Find elements*/

const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];
/* For my first two Approaches I wrongfully assumed that
 we should check if two words are included in the given 
 array and didn't get that the array should be the haystack argument
 and the needle should be the word we want to find in the array...
 // TODO:Return boolean result of comparison of array elements and arguments passed in function call
/*
  A) Define Requirements:
     - What we already have: 
        - example of an array the function should compare it's input to:
          - variable wordsFind assigned to an array including strings/words as elements
        - function declaration of doesWordExist function with two (placeholder) parameters (haystack and needle)
          and empty function body
    - Input: Presumably two words/strings are passed to function doesWordExist() as arguments when it's called
    - Function Body Goal: Check if input words (referred to as haystack and needle inside of the function) 
                          are included in exemplary array/list of words (wordsFind)
    - Output (desired return): Return true if arguments are included in exemplary array and false if not

    Question: Should true only be returned if both arguments are included? Or also if one of them is included?

  B) Approach:
    First:
    - Go through exemplary Array one element at a time and compare current element to input (first to one word than the other?)
      -->using loop
    - Under the condition that it is included in the array return true after loop has ended
    - for all other cases return false
      --> use if
    - either true for the case that both arguments are included (both conditions have to be met) or if one of them is include (one condition or the other has to be met)
    Second:
    - use includes to check if arguments are included as elements in exemplary array

//First Approach:
function doesWordExist(haystack, needle) {
  let Included = [0, 0];
  if (wordsFind.length === 0) {
    console.log("Input Array is empty");
    return null;
  }
  if (haystack === undefined || needle === undefined) {
    console.log("Argument(s) not defined");
    return undefined;
  }
  for (let i = 0; i < wordsFind.length; i++) {
    if (wordsFind[i] === haystack) {
      Included[0] = 1;
    }
    if (wordsFind[i] === needle) {
      Included[1] = 1;
    }
  }
  if (Included[0] === 1 && Included[1] === 1) {
    console.log("Both words are included");
  } else if (Included[0] === 1 && Included[1] === 0) {
    console.log(`Only ${haystack} is included`);
  } else if (Included[0] === 0 && Included[1] === 1) {
    console.log(`Only ${needle} is included`);
  } else {
    console.log("None of the words are included");
  }
  // TODO:Return boolean result of comparison of array elements and arguments passed in function call
}
doesWordExist("starting", "needle");

//Second Approach:
function doesWordExist(haystack, needle) {
  let Included = [0, 0];
  if (wordsFind.length === 0) {
    console.log("Input Array is empty");
    return null;
  }
  if (haystack === undefined || needle === undefined) {
    console.log("Argument(s) not defined");
    return undefined;
  }
  if (wordsFind.includes(haystack)) {
    Included[0] = 1;
  }
  if (wordsFind.includes(needle)) {
    Included[1] = 1;
  }
  if (Included[0] === 1 && Included[1] === 1) {
    console.log("Both words are included");
  } else if (Included[0] === 1 && Included[1] === 0) {
    console.log(`Only ${haystack} is included`);
  } else if (Included[0] === 0 && Included[1] === 1) {
    console.log(`Only ${needle} is included`);
  } else {
    console.log("None of the words are included");
  }
}
// TODO:Return boolean result of comparison of array elements and arguments passed in function call

doesWordExist("starting", "needle");
*/

//Third Approach:
// TODO:Return boolean result of comparison of array elements and arguments passed in function call
/*
  A) Define Requirements:
     - What we already have: 
        - example of an array the function should receive as as an input/argument when calling the function:
          - variable wordsFind assigned to an array including strings/words as elements
        - function declaration of doesWordExist function with two (placeholder) parameters (haystack and needle)
          and empty function body, haystack refers to array we want to search a word (needle) in
    - Input: An array of words and a word are passed to function doesWordExist() as arguments when it's called
    - Function Body Goal: Check if input word (referred to as needle placeholder parameter inside of the function) 
                          is included in input array of words (referred to as haystack with wordsFind being an example)
    - Output (desired return): Return true if input word is included in input array and false if not


  B) Approach:
    First:
    - Go through input Array one element at a time and compare current element to input word
      -->using loop
    - Under the condition that it is included in the array (meaning that current element for some i equals input word) return true after loop has ended
    - for all other cases return false
      --> use if
    Second:
    - use includes to check if input word is included as element in input array
   */
function doesWordExist(haystack, needle) {
  let included = null;
  if (haystack.length === 0) {
    console.log("Input Array is empty!");
    return null;
  }
  if (haystack === undefined || needle === undefined) {
    console.log("Argument(s) is/are undefined");
    return undefined;
  }
  if (haystack.includes(needle)) {
    return true;
  }
  return false;
}
//console.log(doesWordExist(wordsFind, "machine"));

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Exercise 7<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Task: Count repetition */
// TODO:Return boolean result of comparison of array elements and arguments passed in function call
/*
  A) Define Requirements:
     - What we already have: 
        - example of an array the function should receive as as an input/argument when calling the function:
          - variable wordsCount assigned to an array including strings/words as elements
        - function declaration of howManyTimes function with two (placeholder) parameters (haystack and needle)
          and empty function body, haystack refers to array we want to search a word (needle) and if it's included count how many
          times it's there
    - Input: An array of words and a word are passed to function howManyTimes() as arguments when it's called
    - Function Body Goal: Check if input word (referred to as needle placeholder parameter inside of the function) 
                          is included in input array of words (referred to as haystack with wordsFind being an example)
                          and if yes count how often it's there
    - Output (desired return): Return how often word is included in array as a number


  B) Approach:
    - Define changeable counter variable with initial value of 0
    - use includes to check if input word is included as element in input array
    - if yes go through array one element at a time (for loop) and increase counter by one if
      current element equals input word
    - return counter variable
   */
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(haystack, needle) {
  // TODO:return counter variable value of times needle is included in haystack
  let counter = 0;
  if (haystack.includes(needle)) {
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle) {
        counter++;
      }
    }
  }
  return counter;
}
//console.log(howManyTimes(wordsCount, "matter"));

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   Bonus  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Bonus 1 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Task: A generic sum function 
      - for strings use the length of the string, for booleans use 1 and 0
*/
const mixedArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  42,
  7,
  1995,
  23,
  true,
  false,
];

function sum(array) {
  // TODO:
}

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Bonus 2 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Task: Write a function that calculates the greatest product of four 
      - numbers that is either horizontally or vertically in the array
*/

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct(matrix) {
  // TODO:
}

module.exports = {
  maxOfTwoNumbers,
  findLongestWord,
  sumNumbers,
  averageWordLength,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  sum,
  greatestProduct,
};
