import React, { useEffect } from "react";
import Card from './Card.jsx';
import GoogleSuite from '/assets/gsuite.webp';
import Office365 from '/assets/msoffice.webp';
import Dell from '/assets/dell.webp';
import Hp from '/assets/hp.webp';
import Lenovo from '/assets/lenovo2.webp';
import Sonicwall from '/assets/sonicwall.webp';
import Fortinet from '/assets/fortinet.webp';
import Seqrite from '/assets/seqrite.webp';
import Bitdefender from '/assets/bitdefender.webp';
import Symantec from '/assets/symantec.webp';
import '../style/product.css';
import AOS from "aos";
import "aos/dist/aos.css";

function Section({ title, description, items }) {
  return (
    <div className="section-container">
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
      <div className="card-grid">
        {items.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
}

function Solutions() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sections = [
    {
      title: "Email Solutions",
      description: "Explore our professional email solutions to enhance communication and productivity for your organization.",
      items: [
        { image: GoogleSuite, title: 'Google Suite' },
        { image: Office365, title: 'MS Office 365' }
      ]
    },
    {
      title: "Servers and Storage",
      description: "Discover reliable servers and storage solutions from top brands to meet your organization’s IT infrastructure needs.",
      items: [
        { image: Dell, title: 'Dell' },
        { image: Hp, title: 'HP' },
        { image: Lenovo, title: 'Lenovo' }
      ]
    },
    {
      title: "Network Appliances",
      description: "Secure your network with advanced appliances from industry-leading brands, ensuring optimal performance and protection.",
      items: [
        { image: Sonicwall, title: 'SonicWall' },
        { image: Fortinet, title: 'Fortinet' }
      ]
    },
    {
      title: "Antivirus Solutions",
      description: "Protect your devices and data from cyber threats with robust antivirus solutions from trusted brands.",
      items: [
        { image: Seqrite, title: 'Seqrite' },
        { image: Bitdefender, title: 'Bitdefender' },
        { image: Symantec, title: 'Symantec' }
      ]
    }
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <Section 
          key={index} 
          title={section.title} 
          description={section.description} 
          items={section.items} 
        />
      ))}
    </div>
  );
}

export default Solutions;
