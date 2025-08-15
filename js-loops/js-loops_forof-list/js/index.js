console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];
/*Your task is to create a list item for each array item and add it to the ordered list. Each list item should display the value of the current array item. Use a `for...of` loop to accomplish this.

The following hints may guide you:

- Do you remember the property for setting the text of an HTML element?
- Be sure to append each list item to the ordered list.*/

// --v-- write or modify code below this line --v--
for (const elementArray of programmingLanguages) {
  newLi = document.createElement("li");
  newLi.textContent = elementArray;
  ol.appendChild(newLi);
}
// --^-- write or modify code above this line --^--
