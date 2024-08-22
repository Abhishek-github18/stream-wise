import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firesbase";
import { languages, Netflix_Logo } from "../utils/constants";
import { setGptView } from "../utils/useGptSlice";
import { setGptLanguage } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const gptView = useSelector((state) => state.useGpt.showGpt);

  const handleGptLanguage = (e) => {
    console.log(e.target.value);

    dispatch(setGptLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
    dispatch(removeUser());
  };
  const handleGptView = () => {
    dispatch(setGptView());
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL, uid } = user;
        dispatch(
          addUser({
            email: email,
            displayName: displayName,
            uid: uid,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="flex justify-between w-full z-10 absolute bg-gradient-to-b from-black">
      <div className="md:m-4 mx-4 md:mx-16 w-40 overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src={Netflix_Logo}
          alt="logo"
        />
      </div>
      {user && (
        <div className="flex md:m-4 my-4">
          <button
            className="rounded-sm bg-purple-800 text-white md:p-2 md:mx-4 mx-2 hover:bg-opacity-80"
            onClick={handleGptView}
          >
            {gptView ? "Browse" : "GPT Search"}
          </button>
          {gptView && (
            <select
              className="md:mr-4 mr-2 px-2 md:px-2 rounded-md bg-gray-200"
              name="Languages"
              onChange={handleGptLanguage}
            >
              {languages.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <div className="hidden md:block w-12 rounded-md mr-4 overflow-hidden">
            <img
              className="w-full h-full object-contain"
              alt="profile-logo"
              src={user.photoURL}
            />
          </div>
          <button
            className=" text-white bg-red-600 px-2 rounded-lg"
            onClick={handleSignOut}
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
