console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(
    `The age-badness-sum of ${event.target.firstName.value} is ${
      Number(event.target.age.value) + Number(event.target.badness.value)
    }`
  );
  event.target.reset();
  const firstName = document.getElementById("first-name");
  firstName.focus();
  console.log(data);
});
