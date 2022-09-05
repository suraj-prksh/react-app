import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

const SignupForm = (props) => {
  const formChangeHandler = () => {
    props.onSlider("slider-to-left");
  };

  const submithandler = (event) => {
    event.preventDefault();

    console.log("submitted aksjdhkajdshk");
  };
  return (
    <>
      <div className="flex w-full h-full">
        <div className="mx-auto my-auto w-[50%] h-[70%] flex-col ">
          <form onSubmit={submithandler}>
            <div className="m-8">
              <p className="text-[30px]">Sign Up</p>
            </div>
            <Input label="Name" type="text" id="name" />

            <Input label="Email" type="email" id="email" />
            <Input label="Password" type="password" id="password" />
            <Input
              label="Confirm Password"
              type="password"
              id="confirm_password"
            />
            <Button type="submit" ml='ml-8'>Sign Up</Button>
            <div className="m-8 mt-16 flex justify-between">
              <p className="text-[16px]">Already have an account?</p>
              <p
                className="text-[14px] underline text-blue-800 cursor-pointer "
                onClick={formChangeHandler}
              >
                LOGIN
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
