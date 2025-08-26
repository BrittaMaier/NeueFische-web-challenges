import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    setIsActive(!isActive);
  }
  // Check that the value changes correctly.
  console.log(isActive);

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
/*Bonus:
I think that is because before clicking the initial value of isActive is set to be false. Therefore, the first two 
console logs log false to the console (first time for rendering the App component and second time for rendering the virtual
react tree). When the button is clicked this firstly adresses the onClick event calling the
handle click function starting the rendering of the App component from top to bottom?*/
