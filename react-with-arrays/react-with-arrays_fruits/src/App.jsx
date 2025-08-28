import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 3,
      name: "🍇 Grape",
      color: "purple",
    },
    {
      id: 4,
      name: "🍍 Pineapple",
      color: "yellow",
    },
    {
      id: 5,
      name: "🍒 Cherry",
      color: "red",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name }) => (
        <Card key={id} name={name} />
      ))}
    </div>
  );
}
