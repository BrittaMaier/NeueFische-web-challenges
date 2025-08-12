console.clear();
const colorSlide = document.querySelector('[data-js="input-color"]');
const radiusSlide = document.querySelector('[data-js="input-radius"]');
const rotationSlide = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

colorSlide.addEventListener("input", () => {
  box.style.backgroundColor = `hsl(${colorSlide.value} 70% 60%)`;
});
