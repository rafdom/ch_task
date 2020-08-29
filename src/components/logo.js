import React from "react";
import logo from "../assets/chefhero_logo_white.png";
import "../scss/components/logo.scss";

function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="chefhero_logo" />
    </div>
  );
}

export default Logo;
