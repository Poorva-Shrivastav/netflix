import React, { useRef, useState } from "react";
import Header from "../components/Header";
import {
  checkValidFormData,
  checkValidNameData,
} from "../utils/loginFormValidation";
import Backdrop from "../components/Backdrop";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/slices/userSlice";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef();
  const password = useRef();
  const displayName = useRef();

  const signinToggleHandler = () => setIsSigninForm(!isSigninForm);

  const handleFormValidation = () => {
    const result = isSigninForm
      ? checkValidFormData(email.current.value, password.current.value)
      : checkValidFormData(email.current.value, password.current.value) &&
        checkValidNameData(displayName.current.value);

    setErrorMessage(result);
    if (result) return;

    if (!isSigninForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: displayName.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
              console.log(user);
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div className="relative">
      <Header />
      <Backdrop />
      <form
        className="absolute p-12 w-2/6 bg-black mx-auto my-28 right-0 left-0 text-white bg-opacity-70"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl p-2 mx-8">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        <div className="flex flex-col justify-center items-center">
          {!isSigninForm && (
            <input
              type="text"
              ref={displayName}
              placeholder="Full Name"
              className="p-4 mt-4 w-4/5 rounded-sm bg-gray-900 border border-gray-600 bg-opacity-50"
            />
          )}

          <input
            type="text"
            ref={email}
            placeholder="Email or phone number"
            className="p-4 my-6  w-4/5 rounded-sm bg-gray-900 border border-gray-600 bg-opacity-50"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 w-4/5 rounded-sm  bg-gray-900 border border-gray-600 bg-opacity-50"
          />
          <p className="text-red-500 p-2 mx-8 text-sm">{errorMessage}</p>
          <button
            className="p-2 my-4 rounded-sm w-4/5 bg-red-600 cursor-pointer"
            onClick={handleFormValidation}
          >
            {isSigninForm ? "Sign In" : "Sign Up"}
          </button>
          <p>Forgot password?</p>
        </div>
        <div className="m-10 text-gray-400">
          {isSigninForm ? (
            <p>
              New to Netflix?{" "}
              <span
                className="font-bold text-white cursor-pointer"
                onClick={signinToggleHandler}
              >
                Sign up now.
              </span>
            </p>
          ) : (
            <p>
              Already a user?{" "}
              <span
                className="font-bold text-white cursor-pointer"
                onClick={signinToggleHandler}
              >
                Sign In now.
              </span>
            </p>
          )}
          <p className="text-xs my-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <span className="text-blue-600 cursor-pointer">Learn more.</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
