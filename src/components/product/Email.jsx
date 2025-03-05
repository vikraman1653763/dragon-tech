import React from 'react';
import { useNavigate } from 'react-router-dom';

const Email = () => {
    const handleRedirect = () => {
        window.open("https://www.secureserver.net/?plid=569248&forwardedFrom=569248", "_blank");
    };
  
    return (
      <div className="email-container">
        <div className="email-content">
          <div className="email-text">
            <h2 className="email-title">Email Sent Successfully!</h2>
            <div className="email-img-container">
              <img 
                src="/assets/success.webp" 
                alt="Domain registration illustration" 
                className="email-img" 
              />
            </div>
            <p className="email-description">
            Thank you for reaching out to us! We have received your message and will get back to you shortly.
            </p>
           
            {/* <button className="email-button" onClick={handleRedirect}>
              Back to Home
            </button> */}
          </div>
        </div>
      </div>
    );
  };
  

export default Email;
