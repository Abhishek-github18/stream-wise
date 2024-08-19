import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateFields } from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firesbase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Home_Bg_Image, User_Avatar } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

 
  const handleFormSubmit = () => {

    // console.log("Email", email)
    // console.log("password", password);
    // console.log("Name", name?.current?.value);
    var message;
    message = validateFields(
      email.current.value,
      password.current.value,
      name?.current?.value,
      isSignInForm
    );

    setErrorMessage(message);
    if (message !== null) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              User_Avatar,
          })
            .then(() => {
              dispatch(
                addUser({
                  uid: user.uid,
                  email: user.email,
                  displayName: user.displayName,
                  photoURL: user.photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      // sign in api
      
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    // console.log(message);
  };

  const handleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="w-screen h-screen absolute flex justify-center">
        <img className="w-full h-full object-cover" src={Home_Bg_Image} alt="Bg-Image"/>
      </div>
      <div className="absolute mx-auto right-4 left-4 my-36 bg-black bg-opacity-80 md:w-3/12">
        <h1 className="text-white font-semibold md:font-bold text-xl md:text-4xl m-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col justify-center"
        >
          {!isSignInForm && (
            <input
              ref={name}
              className="border-1 mx-auto my-4 w-8/12 h-10 rounded-sm bg-gray-200 p-2"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="border-1 mx-auto my-4 w-8/12 h-10 rounded-sm bg-gray-200 p-2"
            type="text"
            placeholder="Email Address"
          />
          <input
            ref={password}
            className="border-1 mx-auto my-4 w-8/12 h-10 rounded-sm bg-gray-200 p-2"
            type="password"
            placeholder="password"
          />
          {errorMessage && (
            <p className="font-bold ml-16 text-red-600">{errorMessage}</p>
          )}
          <button
            className="border-1 mx-auto my-4 bg-red-600 text-white w-8/12 h-10 rounded-sm"
            onClick={handleFormSubmit}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <p
          className="mx-12 my-8 md:mx-16 text-white cursor-pointer"
          onClick={handleForm}
        >
          {isSignInForm
            ? "Not a User ? Register now"
            : "Already a user ? Sign In"}
        </p>
      </div>
    </div>
  );
};

export default Login;
