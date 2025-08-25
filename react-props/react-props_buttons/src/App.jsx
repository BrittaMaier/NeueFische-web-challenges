export default function App() {
  return (
    <Button text="Hello" color="blue" disabled={false} onClick={handleClick} />
  );
}
function handleClick() {
  console.log("You clicked me");
}
function Button({ text, color, disabled, onClick }) {
  return (
    <button
      style={{ backgroundColor: color, border: "solid" }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
