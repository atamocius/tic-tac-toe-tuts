import React from "react";

export default function Square(props) {
  return <button onClick={props.onClick}>{props.value}</button>;
}
