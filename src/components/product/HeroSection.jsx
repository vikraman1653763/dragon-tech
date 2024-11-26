import React from "react";
import bgbanner from '/assets/banner5.webp';
const HeroSection = () => {
    return (
        <div className="hero-container" style={{ backgroundImage: `url(${bgbanner})` }}>
            <div className="hero-content">
                <h1 className="hero-title">Our Products</h1>
                <p className="hero-description">
                Empowering organizations globally with cutting-edge IT solutions, strategic partnerships, and expert support to stay ahead in the knowledge revolution.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
