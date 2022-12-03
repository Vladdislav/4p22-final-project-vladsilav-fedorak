import React from "react";
import "./CounterCardComponent.css";
import ButtonComponent from "../Button/ButtonComponent";
import { useState } from "react";

function CounterCardComponent() {
  let [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    
    setCounter((counter += 1));
  };
  const decrementCounter = () => {
    if(counter === 0){
      return setCounter(counter = 0)
    }
    setCounter((counter -= 1));
  };
  return (
    <>
      <ButtonComponent
        className="btn btn-decrement"
        name="decrement-card"
        id="decrement-card"
        type="button"
        value="decrement"
        onClick={decrementCounter}
      >
        -
      </ButtonComponent>
      <input
        readOnly
        className="card-counter"
        name="card-counter"
        id="card-counter"
        type="text"
        value={counter}
      />
      <ButtonComponent
        className="btn btn-increment"
        name="increment-card"
        id="increment-card"
        type="button"
        value="increment"
        onClick={incrementCounter}
      >
        +
      </ButtonComponent>
    </>
  );
}

export default CounterCardComponent;
