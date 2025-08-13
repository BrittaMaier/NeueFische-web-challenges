console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("click", (event) => {
  event.preventDefault();
  const formData = new FormData(event.targe);
  const data = Object.fromEntries(formData);
  event.target.reset();
  const firstName = document.getElementById("first-name");
  firstName.focus();
  console.log(data);
});
