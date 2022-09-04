import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className="ml-8 bg-blue-700 text-white px-8 py-2 rounded-lg"
    >
      {props.children}
    </button>
  );
};

export default Button;
