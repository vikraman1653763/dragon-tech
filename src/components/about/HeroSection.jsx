import React from "react";
import bgbanner from '/assets/banner5.webp';


const HeroSection = () => {
    return (
        <div className="hero-container" style={{ backgroundImage: `url(${bgbanner})` }}>
            <div className="hero-content">
                <h1 className="hero-title">About Us</h1>
                <p className="hero-description">
                Driving innovation and securing IT excellence to empower your business for the future.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
