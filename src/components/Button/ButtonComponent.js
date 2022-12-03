import "./ButtonComponent.css";
import React from "react";

function ButtonComponent({name, id, type, className, value, children, onClick = () => {} }) {

  const OnClickEvent =(event) => {
    onClick(event)
  }
  return (
    <>
      <button
        name={name}
        id={id}
        type={type}
        className={className}
        value={value}
        onClick={OnClickEvent}
      >
        {children}
      </button>
    </>
  );
}
export default ButtonComponent;
