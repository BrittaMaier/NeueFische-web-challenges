/*export default function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}*/
//conditional rendering with props:
export default function Greeting({ name, isCoach }) {
  return <h1>Hello, {isCoach ? "Coach" : name}!</h1>;
}
