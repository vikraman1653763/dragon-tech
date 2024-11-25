import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section4 = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
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
        <a href="mailto:info@xagrotortek.in">info@dragontechsolutions.com</a>
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
        <p>No.38, Gokul Nivas,Kumaran Nagar Extn,Kolathur, Chennai,TamilNadu.600099
        </p>
        <a href="" target="_blank" rel="noopener noreferrer"
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
        <a href="" target="_blank" rel="noopener noreferrer"
        >Get Directions</a>
      </div>
      <div className="location-right">
        <div className="contact_form-right_img-div">
          <img src="/assets/pin.svg" alt="Pin Icon" />
        </div>
        <h4>BANGALURU</h4>
        <p>No.39, 7th Cross, Naidu Layout,
Knankunte Cross, Vasanthapura Main
Road, Bangaluru Urban,
Karnataka.
560062
</p>
        <a href="" target="_blank" rel="noopener noreferrer"
        >Get Directions</a>
      </div>
      
    </div>
  );
};

export default Section4;
