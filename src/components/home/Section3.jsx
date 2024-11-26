import React ,{useEffect}from 'react';
import { useNavigate } from 'react-router-dom';
import { VscWorkspaceTrusted } from "react-icons/vsc";
import videoSrc from '/assets/video1.webm';
import AOS from "aos";
import "aos/dist/aos.css";

function Section3() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/services'); // Adjust the path to match your routes
  };
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can adjust the duration as needed
  }, []);
  return (
    <div className="home-sec-3-container">
      <div className="home-sec-3-content">
        {/* Left Content */}
        <div className="home-sec-3-text">
          <h2 className="home-sec-3-title">What We Do</h2>
          <p className="home-sec-3-description">
            At Dragon TechSolutions, we specialize in delivering complete IT solutions that empower businesses to thrive. With over a decade of experience, our expert team offers:
          </p>
          <ul className="home-sec-3-list">
            <li><VscWorkspaceTrusted /> IT Infrastructure Management</li>
            <li><VscWorkspaceTrusted /> Cloud Services</li>
            <li><VscWorkspaceTrusted /> Security Solutions</li>
            <li><VscWorkspaceTrusted /> Systems Management</li>
            <li><VscWorkspaceTrusted /> Unified Communications</li>
          </ul>
          <button className="home-sec-3-button" onClick={handleNavigate}>
            Learn More
          </button>
        </div>

        {/* Right Video Content */}
        <div className="home-sec-3-video" data-aos='fade-left'>
        <video
            src={videoSrc} // Use imported video source
            loop autoPlay muted className="home-sec-3-video-player"
          />
        </div>
      </div>
    </div>
  );
}

export default Section3;
