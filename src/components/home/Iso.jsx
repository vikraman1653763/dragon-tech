import React, { useEffect } from "react";
import organizationImage from "/assets/banner4.webp"; // Update with the path to your image
import AOS from "aos";
import "aos/dist/aos.css";

const Iso = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: false,
    });
  }, []);
  
  return (
    <div className="iso-container">
      <div className="iso-content">
        <div className="iso-header">
          <img src="/assets/logo.webp" className="logo-img" alt="Logo" data-aos="fade-down" />
          <img src="/assets/iso.webp" className="iso-img" alt="ISO Certificate" data-aos="fade-down" />
        </div>
        <p className="iso-description" data-aos="fade-up">
        Dragon TechSolutions is a leading ISO 27001:2002-certified IT services provider with a strong presence in Chennai, Hyderabad, and Bangalore. Renowned for our commitment to information security, we deliver tailored solutions in infrastructure management, cloud computing, data protection, and network security. Our expert in-house team ensures that your IT systems remain secure, efficient, and continuously monitored, minimizing risks and enhancing operational efficiency. With over a decade of experience, we have been a trusted partner to businesses across India, providing strategic IT audits and innovative improvements that empower seamless operations. Dragon TechSolutions is dedicated to safeguarding your business in a digital world.
        </p>
      </div>
      <div className="iso-image">
        <img src={organizationImage} alt="Organization" data-aos="fade-left" />
      </div>
    </div>
  );
};

export default Iso;
