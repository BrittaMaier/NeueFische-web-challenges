export function getRandomColor() {
  const randomColor = `hsl(${Math.floor(Math.random() * 360)} 80% 55%)`;
  return randomColor;
}
