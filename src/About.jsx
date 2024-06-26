import React from "react";
import web from "../src/images/aboutus.webp";
import Common from "./Common";
import Navbar from "./Navbar";
import Footer2 from "./Footer2";

const About = () => {
    return (
        <>
            <Navbar />
             <Common 
             name = "Welcome to About Page" 
             imgsrc={web} 
             visit="/contact" 
             btname="Contact Now"
            /> 
            <Footer2/>
        </>
    );
};

export default About;