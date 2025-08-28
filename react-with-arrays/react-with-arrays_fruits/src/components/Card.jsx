import "./Card.css";

export default function Card({ key, name, color }) {
  console.log(key);
  return (
    <p className="card" style={{ backgroundColor: { color } }}>
      {name}
    </p>
  );
}
