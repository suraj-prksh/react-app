import React from "react";

const Input = (props) => {
  
  const inputChangeHandler = (event) => {
    props.change(event.target.value)
  }

  return (
    <div className="h-[37px] m-8">
      <div class="relative z-0">
        <input
          type={props.type}
          id={props.id}
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-[2px] focus:outline-none focus:ring-0 peer pl-2"
          placeholder=" "
          required
          onChange={inputChangeHandler}
        />
        <label
          for={props.id}
          class="absolute text-sm text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 ml-2"
        >
          {props.label}
        </label>
      </div>
    </div>
  );
};

export default Input;
