import React from 'react';
import { useNavigate } from 'react-router-dom';

const Section3 = () => {
    const handleRedirect = () => {
        window.open("https://www.secureserver.net/?plid=569248&forwardedFrom=569248", "_blank");
    };
  
    return (


      <div className="sec-3-container">
      <div className="sec-3-content">
        {/* Left Content */}
        <div className="sec-3-text">
          <h2 className="sec-3-title">Buy Your Domain Today</h2>
          <p className="sec-3-description">
          Secure your unique web address and establish your online presence. 
     With our hassle-free domain registration, you're just a few steps away 
    from owning your dream domain. Don’t wait—domains are limited!
          </p>
          <button className="sec-3-button" onClick={handleRedirect}>
            Buy a Domain
          </button>
        </div>

        {/* Right Video Content */}
        <div className="sec-3-imgcontainer" data-aos='fade-left'>
        <img 
              src="/assets/domain.webp" 
             alt="Domain registration illustration" 
               className="sec-3-img" 
              />
        </div>
      </div>
    </div>
      // <div className="sec-3-container">
      //   <div className="sec-3-content">
      //     <div className="sec-3-text">
      //       <h2 className="sec-3-title">Buy Your Domain Today</h2>
      //       <p className="sec-3-description">
      //         Secure your unique web address and establish your online presence. 
      //         With our hassle-free domain registration, you're just a few steps away 
      //         from owning your dream domain. Don’t wait—domains are limited!
      //       </p>
      //       <div className="sec-3-img-container">
      //         <img 
      //           src="/assets/domain.webp" 
      //           alt="Domain registration illustration" 
      //           className="sec-3-img" 
      //         />
      //       </div>
      //       <button className="sec-3-button" onClick={handleRedirect}>
      //         Buy a Domain
      //       </button>
      //     </div>
      //   </div>
      // </div>
    );
  };
  

export default Section3;
