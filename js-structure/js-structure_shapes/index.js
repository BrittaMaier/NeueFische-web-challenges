import getRandomColor from "./utils/randomColor.js";
import Circle from "./components/Circle/Circle.js";
console.clear();

const root = document.getElementById("root");
const circleElement = Circle();

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  const randomColor = getRandomColor();
  square.style.backgroundColor = randomColor;
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  const randomColor = getRandomColor();
  pentagon.style.backgroundColor = randomColor;
});

root.append(circleElement, square, pentagon);
