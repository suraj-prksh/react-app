import React from "react";
import "./Auth.scss";
import LoginForm from "../../components/Loginform/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";

const Auth = () => {
  return (
    <>
      <div className="auth">
        <div className="signupform">
          <SignupForm />
        </div>
        <div className="loginform">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Auth;
