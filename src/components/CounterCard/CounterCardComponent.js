import React from "react";
import "./CounterCardComponent.css";
import ButtonComponent from "../Button/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  setIdCounter,
} from "../../store/Counter/CounterSlise";
import { createSubscription } from "react-redux/es/utils/Subscription";

function CounterCardComponent({ idCard }) {
  let counter = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  const incrementCounter = () => {
    dispatch(increment());
  };
  const decrementCounter = () => {
    if (counter <= 0) {
      return (counter = 0);
    }
    dispatch(decrement());
  };
  return (
    <>
      <ButtonComponent
        className="btn btn-decrement"
        name="decrement-card"
        id={`decrement-card`}
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
        id={`increment-card`}
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
