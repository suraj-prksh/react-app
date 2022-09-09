import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import axios from "axios";

const LoginForm = (props) => {
  const [enteredEmail, setenteredEmail] = useState("");
  const [enteredPassword, setenteredPassword] = useState("");

  const formChangeHandler = () => {
    props.onSlider("slider-to-right");
  };

  const emailInputChangeHandler = (inputEmail) => {
    console.log(inputEmail, "emailInputChangeHandler");
    setenteredEmail(inputEmail);
    console.log(enteredEmail, "entered email emailInputChangeHandler");
  };

  const passwordInputChangeHandler = (inputPassword) => {
    setenteredPassword(inputPassword);
  };

    // When want to run the call for first page render
  // useEffect(() => {
  //   axios.get('url/url.com').then((res) => console.log(res.data));

  // }, [])
  

  const submitHandler = (event) => {
    event.preventDefault();
    // Axios post method call
    const url = 'http://127.0.0.1:8000/auth/login/'
    const payload = {
      "email": enteredEmail,
      "password": enteredPassword
    }
    axios.post(url, payload).then(res => console.log("postinf data", res)).catch(err => console.log(err))
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
