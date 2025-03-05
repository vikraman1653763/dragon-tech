import React, { useEffect} from 'react';
import organizationImage from "/assets/company.webp"; // Update with the path to your image
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      mirror: false,
    });
  }, []);
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2 className="about-us-heading">ABOUT <img src="/assets/logo.webp"/></h2>
        <p className="about-us-description" data-aos="fade-up">
        At Dragon TechSolutions, we are a passionate team of IT experts committed to delivering exceptional IT support and services. With offices in Chennai, Hyderabad, and Bangalore, we have been a trusted partner to businesses across India for over a decade. We specialize in infrastructure management, cloud solutions, data protection, and network security. Our in-house team ensures your IT infrastructure remains secure, efficient, and continuously monitored. We also provide strategic IT audits and improvements, helping your business operate seamlessly with minimal disruptions.
        </p>
      </div>
      <div className="about-us-image">
        <img src={organizationImage} alt="Organization" data-aos="fade-left" />
      </div>
    </div>
  );
};

export default AboutUs;
