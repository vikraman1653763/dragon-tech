import React from 'react';
import { useNavigate } from 'react-router-dom';

const Section6 = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  return (
    <div className="home-sec-6-container">
      <div className="home-sec-6-content">
        <div className="home-sec-6-text">
          <h2 className="home-sec-6-title">Get a Quote</h2>
          <p className="home-sec-6-description">
            Ready to take your business to the next level? Get a tailored quote for IT solutions that fit your needs.
            Contact us today, and let's explore how we can help you grow.
          </p>
          <button className="home-sec-6-button" onClick={handleNavigate}>
            Get in Touch
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default Section6;
