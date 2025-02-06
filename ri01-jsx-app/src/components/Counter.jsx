import { useState } from "react";

function Counter() {
  let counter = 0;
  const [stateCounter, setStateCounter] = useState(0);
  const [deneme, setDeneme] = useState(["İstanbul", "İzmir", "Ankara"]);

  function handleClick() {
    console.log("handle click..");
    counter++;
    console.log(counter);
  }

//   function stateHandleClick() {
//     console.log("State Handle Click...");
//     setStateCounter(stateCounter + 1);
//   }
  function newCities() {
    setDeneme([...deneme, "Sakarya"]);
  }
  return (
    <>
      <h2>Counter : {counter}</h2>
      <h2>StateCounter : {stateCounter}</h2>
      <ul>
        {deneme.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button id="increment" onClick={() => console.log("Button click..")}>
        Increment
      </button>
      <button id="increment2" onClick={handleClick}>
        Increment2
      </button>

      <button
        id="stateIncrement"
        onClick={() => setStateCounter(stateCounter + 1)}
      >
        Increment3
      </button>
      <button id="stateIncrementDunction" onClick={newCities}>
        Increment4
      </button>
    </>
  );
}

export default Counter;
