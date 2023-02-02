import React from "react";
import { Link } from "react-router-dom";

import LogoImage from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="inline-flex">
      <Link to="/">
        <img src={LogoImage} alt="logo" className="lg:w-60 md:w-40 w-32" />
      </Link>
    </div>
  );
};

export default Logo;
