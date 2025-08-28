import "./Card.css";

export default function Card({ key, name }) {
  console.log(key);
  return <p className="card">{name}</p>;
}
