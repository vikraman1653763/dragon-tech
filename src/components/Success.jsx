  import React from 'react';
  import '../style/success.css';

  const Email = () => {
     
    
      return (
        <div className="success-container">
          <div className="success-content">
            <div className="success-text">
              <h2 className="success-title">Email Sent Successfully!</h2>
              <div className="success-img-container">
                <img 
                  src="/assets/success.webp" 
                  alt="Domain registration illustration" 
                  className="success-img" 
                />
              </div>
              <p className="success-description">
              Thank you for reaching out to us! We have received your message and will get back to you shortly.
              </p>
            
            
            </div>
          </div>
        </div>
      );
    };
    

  export default Email;


  
/* Container for the Email */