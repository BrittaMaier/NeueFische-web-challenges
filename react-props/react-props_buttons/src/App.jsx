export default function App() {
  return <Button text="Hello" color="blue" disabled={true} />;
}
function Button({ text, color, disabled }) {
  return (
    <button
      style={{ backgroundColor: color, border: "solid" }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
