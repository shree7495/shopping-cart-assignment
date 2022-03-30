import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <button onClick={props.HandleOnClick} className="button-container">
      {props.children}
    </button>
  );
}
