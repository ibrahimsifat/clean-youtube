import React from "react";

import LogoImage from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="inline-flex">
      <img src={LogoImage} alt="logo" className="lg:w-60 md:w-40 w-32" />
    </div>
  );
};

export default Logo;
