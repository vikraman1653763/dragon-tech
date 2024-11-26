import React from 'react';
import HeroSection from './about/HeroSection.jsx';
import AboutUs from './about/AboutUs.jsx';
import Vision from './about/Vision.jsx';
import Mission from './about/Mission.jsx';
import '../style/about.css';
import Banner from "./Banner.jsx";


function About() {

    return (
        <>
        <Banner 
            heading="About Us" 
            description="Driving innovation and securing IT excellence to empower your business for the future."
        />
            <AboutUs />
            <Vision />
            <Mission />
        </>
    );
}

export default About;