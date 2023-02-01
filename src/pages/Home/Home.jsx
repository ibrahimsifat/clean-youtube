import React from "react";
import MobileNav from "../../components/Navbar/Mobile-navbar/MobileNav";
import Navbar from "../../components/Navbar/Navbar";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Home = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Navbar />
      {width < 636 && <MobileNav />}
    </>
  );
};

export default Home;
