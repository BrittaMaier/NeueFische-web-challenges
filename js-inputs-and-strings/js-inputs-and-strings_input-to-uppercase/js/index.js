console.clear();
const firstInput = document.querySelector('[data-js="first-input"]');
const button = document.querySelector('[data-js="button-uppercase"]');

button.addEventListener("click", () => {
  const value = firstInput.value;
  firstInput.value = value.toUpperCase();
});
