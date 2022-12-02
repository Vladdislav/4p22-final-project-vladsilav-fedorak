import React from "react";
import "./CounterCardComponent.css";

class CounterCardComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      counterField: 0,
    };
  }
  render() {
    return (
      <>
        <input
          className="card-counter"
          name="card-counter"
          id="card-counter"
          type="search"
          placeholder="Введите запрос"
          onChange={(e) => this.setState({counterField: e.target.value})}
        />
      </>
    );
  }
//   function changeCounter((prevState, nextState)=>{
//     let counter = document.getElementById('card-counter');
//     counter.addEventListener('click', ()=>{
//         if (prevState <= 0){
//             counter = 0;
//         }
//         if ()
//     })
    
    
//   });

}

export default CounterCardComponent;
