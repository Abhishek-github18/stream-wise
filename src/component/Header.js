import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firesbase";
import { Netflix_Logo } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const user = useSelector((state) => state.user);
  const handleSignOut = () =>{

    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      alert(error);
    });
    // debugger
    dispatch(removeUser());
    // navigate("/");  
  }
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
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="flex justify-between w-full z-10 absolute bg-gradient-to-b from-black">
      <div className="m-4 mx-4 md:mx-16 w-40 overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src={Netflix_Logo}
          alt="logo"
        />
      </div>
      {user && (
        <div className="flex m-4">
          <div className="w-12 rounded-md mr-4 overflow-hidden">
            <img className="w-full h-full object-cover" alt="profile-logo" src={user.photoURL} />
          </div>
          <button className="text-sm md:text-2xl font-bold text-white" onClick={handleSignOut}>SignOut</button>
        </div>
      )}
    </div>
  );
};

export default Header;
