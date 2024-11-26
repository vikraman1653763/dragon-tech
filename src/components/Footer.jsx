import React from 'react';
import '../style/footer.css';
import facebook from '/assets/facebook.svg';
import youtube from '/assets/youtube.svg';
import twitter from '/assets/twitter.svg';
import instagram from '/assets/instagram.svg';
import linkedin from '/assets/linkedin.svg';
const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer_1">
                    <div className="part-1">
                        <div className="img-bg">
                            <img src="/assets/dtLogo.webp" alt="Company" />
                        </div>
                        <p>Company Private Limited</p>
                    </div>
                    <div className="part-2">
                        <div className="part-22">
                            <h3>Quick Links</h3>
                        <ul className="list_links">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/services">Service</a></li>
                                <li><a href="/Product">Product</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="part-23">
                            <h3>Product</h3>
                            <ul>
                            <li><a href="/product">Email Solutions</a></li>
                        <li><a href="/product">Servers & Storages</a></li>
                        <li><a href="/product">Network Appliances</a></li>
                        <li><a href="/product">Anti-Virus Solutions</a></li>

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
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/terms-of-service">Terms of Service</a>
                        <a href="/admin">Admin</a>
                        <a href="/site-map">Site Map</a>
                    </div>
                    <div className="right_content">

                    <img src={facebook} alt='facebook'/>
                    <img src={instagram}  alt='instagram'/>
                    <img src={linkedin} alt='linkedin'/>
                    <img className='tw' src={twitter} alt='twitter'/>
                    <img className='yt' src={youtube} alt='youtube'/>

                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
