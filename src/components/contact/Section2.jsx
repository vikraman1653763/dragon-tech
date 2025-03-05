import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const enquiryData = [
    {
      "title": "IT Consulting",
      "description": "For expert advice on IT infrastructure, project management, and technology solutions tailored to your business needs, contact our IT Consulting team at info@dragontechsolutions.com or call us at 044 42108304.",
      "image": "/assets/handshake.svg"
    },
    {
      "title": "Technical Support",
      "description": "Need assistance with your IT systems? Our technical support team is available 24/7 to troubleshoot and resolve your issues. Reach us at info@dragontechsolutions.com or call +91 9751074995.",
      "image": "/assets/support.svg"
    },
    {
      "title": "Partnerships & Collaboration",
      "description": "Looking to collaborate on innovative IT solutions or explore partnership opportunities? Contact us at info@dragontechsolutions.com to discuss how we can work together.",
      "image": "/assets/partner.svg"
    }
  ];
  


const Enquiry = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      mirror: true,
    });
  }, []);

  return (
    <section id="enquiry"  >
      <div className="enquiries-heading">
        <h3 className="enquiry-header">FOR <br /><span>enquiries</span></h3>
        <h6>In terms of Sales, Help & service, New Ideas & collaboration and for more
          requirements contact us</h6>
      </div>
      <div className="enquiry-card" data-aos="fade-up">
        {enquiryData.map((enquiry, index) => (
          <div key={index} className="enquiry-adv-card-bg">
           
            <div className="enquiry-adv-card">
              <div className="enquiry-adv-card-content">
                <div className="enquiry-image_background">
                  <img src={enquiry.image} alt={enquiry.title} />
                </div>
              </div>
              <div className="content-div">
                <h4>{enquiry.title}</h4>
                <p>{enquiry.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Enquiry;
