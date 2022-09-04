import React from "react";
import Input from "../Input/Input";

const LoginForm = () => {
  return (
    <>
      <div className="flex w-full h-full">
        <div className="mx-auto my-auto w-[50%] h-[50%] flex-col ">
          <form onSubmit="">
            <div className="m-8">
              <p className="text-[30px]">Login</p>
            </div>
            <Input
              label="Email"
              type="email"
              id="email"
              className="bg-green-500"
            />
            <Input label="Password" type="password" id="password" />
            <button className="ml-8 bg-blue-700 text-white px-8 py-2 rounded-lg">
              Login
            </button>
            <div className="m-8 mt-16">
              <p className="text-[16px]">
                Don't have an account?
                <span className="text-[14px] underline text-blue-800 cursor-pointer ml-16">
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
