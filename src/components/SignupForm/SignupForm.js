import React from "react";
import Input from "../Input/Input";

const SignupForm = () => {
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
            <Input label="Confirm Password" type="password" id="confirm_password" />
            <button className="ml-8 bg-blue-700 text-white px-8 py-2 rounded-lg">
              Sign Up
            </button>
            <div className="m-8 mt-16">
              <p className="text-[16px]">
                Already have an account?
                <span className="text-[14px] underline text-blue-800 cursor-pointer ml-16">
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
