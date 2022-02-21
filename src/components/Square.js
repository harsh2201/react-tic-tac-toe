import React from "react";

import "../styles/Square.css";

export default function Square({ index, children, boxClickCallback }) {
  // console.log(children);
  return (
    <div className="container">
      <button
        className="square-button"
        onClick={() => {
          boxClickCallback(index);
        }}
      >
        {children}
      </button>
    </div>
  );
}
