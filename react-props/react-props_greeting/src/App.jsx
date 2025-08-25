import Greeting from "../components/Greeting";
export default function App() {
  return (
    <>
      <Greeting name={"Gimena"} isCoach={true} />
      <Greeting name={"Britta"} isCoach={false} />
    </>
  );
}
