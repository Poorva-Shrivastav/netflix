import React from "react";
import { LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };

  return (
    <div className="w-screen absolute px-8 py-2  bg-gradient-to-b from-black z-30 flex justify-between">
      <img className="w-48 mx-28" src={LOGO} alt="logo" />
      {user && (
        <div className="w-1/12 flex self-center justify-between ">
          <img
            className="w-10"
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
            alt="icon"
          />

          <button className=" text-white" onClick={handleSignout}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
