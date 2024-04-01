import React from "react";
import { LOGIN_BACKDROP } from "../utils/constants";

const Backdrop = () => {
  return (
    <div className="absolute h-full brightness-50">
      <img src={LOGIN_BACKDROP} alt="background image" />
    </div>
  );
};

export default Backdrop;
