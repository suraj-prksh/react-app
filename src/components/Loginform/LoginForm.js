import React, { useRef, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

const LoginForm = (props) => {
  const [enteredEmail, setenteredEmail] = useState("");
  const [enteredPassword, setenteredPassword] = useState("");

  const formChangeHandler = () => {
    props.onSlider("slider-to-right");
  };

  const [showPassword, setshowPassword] = useState(false);

  const emailInputChangeHandler = (inputEmail) => {
    console.log(inputEmail, "input EmailenteredEmail");
    setenteredEmail(inputEmail);
    console.log(enteredEmail, "entered email");
  };

  const passwordInputChangeHandler = (inputPassword) => {
    setenteredPassword(inputPassword);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredEmail, "eneteredEmail from submit handler");
    console.log(enteredPassword, "enteredPassword from submit handler");
  };

  return (
    <>
      <div className="flex w-full h-full">
        <div className="mx-auto my-auto w-[50%] h-[55%] flex-col ">
          <form onSubmit={submitHandler}>
            <div className="m-8">
              <p className="text-[30px]">Login</p>
            </div>
            <Input
              label="Email"
              type="email"
              id="email"
              change={emailInputChangeHandler}
            />
            <Input
              label="Password"
              type="password"
              id="password"
              change={passwordInputChangeHandler}
            />
            <Button type="submit" ml='ml-8'>Login</Button>
            <div className="m-8 mt-16 flex justify-between">
              <p className="text-[16px]">Don't have an account?</p>
              <p
                className="text-[14px] underline text-blue-800 cursor-pointer "
                onClick={formChangeHandler}
              >
                SIGNUP
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
