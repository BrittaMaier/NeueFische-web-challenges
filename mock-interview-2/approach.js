function count(string) {
  /*
  1) I can use array methods on a string if string is converted to an array
  2) Use for loop to go through string array one element at a time using a variable I define 
  3) for each element that equels the element I compare it to the counter I define increases by one
  4) 
  */
  const stringArray = string.split("");
  let resultObject = {};
  for (let i = 0; i < stringArray.length; i++) {
    const counterString = stringArray.filter(
      (element) => element === stringArray[i]
    );
    Object.defineProperty(resultObject, `${stringArray[i]}`, {
      value: counterString.length,
      enumerable: true,
    });
  }
  return resultObject;
}
console.log(count("hallihallo"));
