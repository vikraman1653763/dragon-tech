import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { VscWorkspaceTrusted } from "react-icons/vsc";
import videoSrc from '/assets/video2.webm';
import AOS from "aos";
import "aos/dist/aos.css";
function Section5() {
  const navigate = useNavigate();
  
  useEffect(() => {
     AOS.init({ duration: 1000 }); // You can adjust the duration as needed
   }, []);
  const handleNavigate = () => {
    navigate('/product'); // Adjust the path to match your routes
  };

  return (
    <div className="home-sec-3-container">
      <div className="home-sec-3-content">
        {/* Left Content */}
        <div className="home-sec-3-video" data-aos='fade-right'>
        <video
            src={videoSrc} // Use imported video source
            loop autoPlay muted className="home-sec-3-video-player"
            />
        </div>
            {/* Right Video Content */}

        <div className="home-sec-3-text">
          <h2 className="home-sec-3-title">Our Products</h2>
          <p className="home-sec-3-description">
          At Dragon TechSolutions, we empower businesses with a range of innovative IT products and services tailored to meet modern organizational needs. From ensuring secure communication and robust data management to providing seamless network connectivity and advanced cybersecurity solutions, we deliver reliable, scalable technologies that drive efficiency and success.          </p>          
          <ul className="home-sec-3-list">
            <li><VscWorkspaceTrusted /> Email Solutions</li>
            <li><VscWorkspaceTrusted /> Servers and Storage</li>
            <li><VscWorkspaceTrusted /> Network Appliances</li>
            <li><VscWorkspaceTrusted /> Antivirus Solutions</li>
          </ul>
          <button className="home-sec-3-button" onClick={handleNavigate}>
            Learn More
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default Section5;
