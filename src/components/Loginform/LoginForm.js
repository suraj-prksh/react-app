import React, { useRef, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

const LoginForm = (props) => {
  const formChangeHandler = () => {
    props.onSlider("slider-to-right");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitted aksjdhkajdshk")
    console.log(event.target.value,"venvnent")
   
  };
  return (
    <>
      <div className="flex w-full h-full">
        <div className="mx-auto my-auto w-[50%] h-[55%] flex-col ">
          <form onSubmit={submitHandler}>
            <div className="m-8">
              <p className="text-[30px]">Login</p>
            </div>
            <Input label="Email" type="email" id="email" />
            <Input label="Password" type="password" id="password" />
            <Button type="submit">Login</Button>
            {/* <button className="ml-8 bg-blue-700 text-white px-8 py-2 rounded-lg">
              Login
            </button> */}
            <div className="m-8 mt-16">
              <p className="text-[16px]">
                Don't have an account?
                <span
                  className="text-[14px] underline text-blue-800 cursor-pointer ml-24"
                  onClick={formChangeHandler}
                >
                  SIGNUP
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
