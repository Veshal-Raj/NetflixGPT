import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const handleButtonClick = () => {
    // validate data
    const message = checkValidData(name.current.value, email.current.value, password.current.value)
    setErrorMessage(message)
}

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          ref={name}
          placeholder="Full Name"
          className="p-4 my-4 w-full rounded bg-gray-700"
        />}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded bg-gray-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full rounded bg-gray-700"
        />
        <p className="text-red-700 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-4 rounded bg-red-700 w-full" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
