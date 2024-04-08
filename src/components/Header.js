import React, { useEffect } from "react";
import { LOGIN_ICON, LOGO } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/redux/slices/userSlice";
import {
  addSearchedMovie,
  addSearchedMovieName,
  clickedFromSearchPage,
  toggleSearchView,
} from "../utils/redux/slices/searchSlice";
import { changeLanguage } from "../utils/redux/slices/langSlice";
import { SUPPORTED_LANGUAGES } from "../utils/language/languageConstants";
import {
  addTrailerContent,
  addTrailerVideo,
  playMovie,
} from "../utils/redux/slices/moviesSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showSearchPage = useSelector(
    (store) => store.searchMovie.showSearchPage
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };

  const handleSearch = () => {
    dispatch(toggleSearchView());
    dispatch(addSearchedMovie(null));
    dispatch(addSearchedMovieName(null));
    dispatch(addTrailerVideo(null));
    dispatch(addTrailerContent([]));
    dispatch(playMovie(false));
  };

  const handleChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="w-screen absolute px-8 py-2  bg-gradient-to-b from-black z-30 flex justify-between ">
      <img className="w-48 mx-28" src={LOGO} alt="logo" />
      {user && (
        <div className="p-4 mx-4 flex self-center ">
          <button className=" text-white mx-2" onClick={handleSearch}>
            {showSearchPage ? "Home" : "🔍 Search"}
          </button>
          {showSearchPage && (
            <select
              className=" bg-black text-white mx-2"
              onChange={handleChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <img className=" mx-4 w-10 rounded-md" src={LOGIN_ICON} alt="icon" />
          <button className="mx-2 text-white" onClick={handleSignout}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
