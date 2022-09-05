import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`bg-blue-700 text-white px-8 py-2 rounded-lg object-contain ${props.ml} `}
    >
      {props.children}
    </button>
  );
};

export default Button;
