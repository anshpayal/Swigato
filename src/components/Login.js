import React from "react";
import { useState, useRef} from "react";
import Logo from "../../Login-Logo.png";
import { validationCheck } from "../utils/validationCheck";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import LoginBtnContext from "../utils/LoginBtnContext";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();


  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleValidation = () => {
    const message = validationCheck(
      email.current.value,
      password.current.value,
      fullName?.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("sign up successful", user);
          setSignIn(true);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          console.log(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("sign in successful", user);
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          console.log(errorMessage);
        });
    }
  };
  const handleClick = () => {
    setSignIn(!signIn);
  };
  return (
    <div className=" flex items-center bg-login-background bg-center bg-cover-fit h-screen">
      <div className="h-[500px] w-[450px] mx-auto rounded-2xl bg-blur-gray-800 p-4">
        <div className=" h-[60px] ">
          <img
            className="w-4/12 h-[60px] mx-auto"
            alt="login-logo"
            src={Logo}
          ></img>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="px-4"
        >
          <h1 className="text-3xl my-4 text-white font-bold">
            {signIn ? "Login" : "Sign Up"}
          </h1>
          {!signIn && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="my-2 px-2 py-3 w-full rounded-lg outline-none "
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="my-2 px-2 py-3 w-full rounded-lg outline-none "
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="my-2 px-2 py-3 w-full rounded-lg outline-none "
          />
          <p className="text-red-600 font-semibold my-1">{errorMessage}</p>
          <button
            className=" bg-orange-500 rounded-lg shadow-lg text-white text-lg font-bold py-3 my-4 w-full"
            onClick={handleValidation}
          >
            {signIn ? "Login" : "Sign Up"}
          </button>
          <p className="text-white cursor-pointer" onClick={handleClick}>
            {signIn ? "New to Swigato? Sign Up Now" : "Already a user Login!"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
