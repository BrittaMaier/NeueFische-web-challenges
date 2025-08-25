export default function App() {
  return <Button text="Hello" color="blue" disabled={false} />;
}
function Button({ text, color, disabled }) {
  function handleClick() {
    console.log("You clicked me");
  }
  return (
    <button
      style={{ backgroundColor: color, border: "solid" }}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
