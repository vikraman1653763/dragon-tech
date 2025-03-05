import React, { useState } from 'react';
import '../style/footer.css';
import facebook from '/assets/facebook.svg';
import youtube from '/assets/youtube.svg';
import instagram from '/assets/instagram.svg';;
import watsapp from '/assets/watsapp.svg';
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const Footer = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopupOpen = () => setShowPopup(true);
    const handlePopupClose = () => setShowPopup(false);

    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer_1">
                        <div className="part-1">
                            <div className="img-bg">
                                <img src="/assets/logo.webp" alt="Company" />
                            </div>
                            <p>ISO Certified Company</p>
                        </div>
                        <div className="part-2">
                            <div className="part-22">
                                <h3>Quick Links</h3>
                                <ul className="list_links">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/product">Products</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="part-23">
                                <h3>Products</h3>
                                <ul>
                                    <li><Link to="/product">Email Solutions</Link></li>
                                    <li><Link to="/product">Servers & Storages</Link></li>
                                    <li><Link to="/product">Network Appliances</Link></li>
                                    <li><Link to="/product">Anti-Virus Solutions</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="part-4">
                            <h3>Map Location</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.08271968421!2d80.18310697622177!3d13.09394387929062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526409d09c9d55%3A0xc1a8a858e27b9c6!2sGokul%20Nivas%2C%20extn2%2C%2069%2C%20Dr%20Rajendra%20Prasad%20St%2C%20Kumaran%20Nagar%20Extention%202%2C%20Kumaran%20Nagar%2C%20Sakthi%20Nagar%2C%20Padi%2C%20Chennai%2C%20Tamil%20Nadu%20600050!5e0!3m2!1sen!2sin!4v1732520310551!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                style={{ border: 0, aspectRatio: '16/9' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Location"
                            ></iframe>
                        </div>
                    </div>
                    <hr className="custom_hr" />
                    <div className="footer_2">
                        <div className="left_content">
                            <p>&copy; 2024. All rights reserved.</p>
                            <div className="design-dev">
                                <span onClick={handlePopupOpen} style={{ cursor: 'pointer', color: 'blue' }}>
                                    Designed and Developed by <b style={{color:'#68cbd2'}}>DevZen</b>
                                </span>
                            </div>
                        </div>
                        <div className="right_content">
                            <a href="https://www.facebook.com/profile.php?id=100064042804858" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></a>
                            <a href="https://www.instagram.com/dragon_techsolutions/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" /></a>
                            <a href="http://wa.me/919342252587" target="_blank" rel="noopener noreferrer"><img src={watsapp} alt="watsapp" /></a>
                            <a href="https://www.youtube.com/@DragonTechsolutions-q9r" target="_blank" rel="noopener noreferrer"><img className="yt" src={youtube} alt="youtube" /></a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Popup Modal */}
            {showPopup && (
                <div className="popup-modal">
                    <div className="popup-content">
                        <h2>About DevZen</h2>
                        <p>
                            DevZen specializes in web and app development, delivering high-quality solutions tailored to your business needs.
                        </p>
                        <p>
                            This website was developed by&nbsp;
                            <a href="https://vikramang.netlify.app" target="_blank" rel="noopener noreferrer">
                                Vikraman G
                            </a>,&nbsp;
                            <a href="https://pavithra-m.netlify.app/" target="_blank" rel="noopener noreferrer">
                                Pavithra M
                            </a>, and&nbsp;
                            <a href="https://karthick-sakthivel.netlify.app/" target="_blank" rel="noopener noreferrer">
                                Karthikeyan S
                            </a>.
                        </p>
                        <button onClick={handlePopupClose}>X</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Footer;
