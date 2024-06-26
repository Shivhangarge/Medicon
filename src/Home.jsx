import React from "react";
import web from "../src/images/home.gif";
import Common from "./Common";
import Navbar from "./Navbar";
import "./App.css";
import Footer from "./Footer";
import Footer2 from "./Footer2";

const Home = () => {
  return (
    <>
      <Navbar />
      <Common
        name="Get Your Appointment Booked on "
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
      <Footer2 />
    </>
  );
};

export default Home;