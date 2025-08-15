console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write or modify code below this line --v--
for (const keyV in languages) {
  newOption = document.createElement("option");
  newOption.textContent = languages[keyV];
  select.append(newOption);
}
// --^-- write or modify code above this line --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write or modify code below this line --v--
for (const keyNav in nav) {
  newLi = document.createElement("li");
  newA = document.createElement("a");
  newA.textContent = nav[keyNav];
  for (const keyNavkey in nav[keyNav]) {
    newA.href = nav[keyNav][keyNavkey];
  }
  newLi.append(newA);
  ul.append(newLi);
}
// --^-- write or modify code above this line --^--
