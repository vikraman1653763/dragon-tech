import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section4 = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      mirror: true,
    });
  }, []);

  return (
    <div className="contact_form-right" data-aos="fade-up">
      <div className="email-right">
        <div className="contact_form-right_img-div">
          <img src="/assets/email.svg" alt="Email Icon" />
        </div>
        <h4>Email</h4>
        <p>We are excited to reach you</p>
        <a href="mailto:info@dragontechsolutions.com">info@dragontechsolutions.com</a>
      </div>
      <div className="moblie-right">
        <div className="contact_form-right_img-div">
          <img src="/assets/mobile.svg" alt="Phone Icon" />
        </div>
        <h4>Mobile</h4>
        <p>044 42108304 / 9751074995</p>
      </div>
      <div className="location-right">
        <div className="contact_form-right_img-div">
          <img src="/assets/pin.svg" alt="Pin Icon" />
        </div>
        <h4>CHENNAI</h4>
        <p>No.27, 2nd Floor, Thillai Nagar, 2nd Main Road, 200 Feet Road, Kolathur, Chennai, Tamil Nadu 600099
        </p>
        <a href="https://maps.app.goo.gl/gQsJEuFnWmznobWE6" target="_blank" rel="noopener noreferrer"
        >Get Directions</a>
      </div>
      <div className="location-right">
        <div className="contact_form-right_img-div">
          <img src="/assets/pin.svg" alt="Pin Icon" />
        </div>
        <h4>HYDERABAD</h4>
        <p>Plot No.66/A, Near Beerappa
Temple, Veeraswamy Nagar,
Quthbullapur, Hyderabad,
Telegana.
500055</p>
        <a href="https://maps.app.goo.gl/RMvibd3yYcxHYAEcA" target="_blank" rel="noopener noreferrer"
        >Get Directions</a>
      </div>
      <div className="location-right">
        <div className="contact_form-right_img-div">
          <img src="/assets/pin.svg" alt="Pin Icon" />
        </div>
        <h4>BENGALURU</h4>
        <p>No.39, 7th Cross, Naidu Layout,
Knankunte Cross, Vasanthapura Main
Road, Bengaluru Urban,
Karnataka.
560062
</p>
        <a href="https://maps.app.goo.gl/bjx6gaG3WY6Kx1Vm7" target="_blank" rel="noopener noreferrer"
        >Get Directions</a>
      </div>
      
    </div>
  );
};

export default Section4;
