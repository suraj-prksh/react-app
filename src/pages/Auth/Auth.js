import React, { useRef, useState } from "react";
import "./Auth.scss";
import LoginForm from "../../components/Loginform/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";

const Auth = () => {
  const [sliderValue, setSliderValue] = useState('');
  const sliderHandler = (sliderData) => {
    setSliderValue(sliderData);
    console.log(sliderValue, "sliderValuesliderValue")
  };
  
  return (
    <>
      <div className={`slider ${sliderValue}`}>
        <div className="slider-inner">
          <h1>Welcome</h1>
          <p>Hi there</p>
        </div>
      </div>
      <div className="auth">
        <div className="signupform">
          <SignupForm onSlider={sliderHandler} />
        </div>
        <div className="loginform">
          <LoginForm onSlider={sliderHandler} />
        </div>
      </div>
    </>
  );
};

export default Auth;
