import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

const SignupForm = (props) => {
  const formChangeHandler = () => {
    props.onSlider('slider-to-left');
}
  return (
    <>
      <div className="flex w-full h-full">
        <div className="mx-auto my-auto w-[50%] h-[65%] flex-col ">
          <form onSubmit="">
            <div className="m-8">
              <p className="text-[30px]">Sign Up</p>
            </div>
            <Input
              label="Email"
              type="email"
              id="email"
              className="bg-green-500"
            />
            <Input label="Password" type="password" id="password" />
            <Input
              label="Confirm Password"
              type="password"
              id="confirm_password"
            />
            <Button type="submit">Sign Up</Button>
            <div className="m-8 mt-16">
              <p className="text-[16px]">
                Already have an account?
                <span className="text-[14px] underline text-blue-800 cursor-pointer ml-16" onClick={formChangeHandler}>
                  LOGIN
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
