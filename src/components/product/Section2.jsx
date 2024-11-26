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

import Servers from '/assets/server2.webp';
import Storage from '/assets/datastorage.webp';
import Desktop from '/assets/desktop.webp';
import Laptop from '/assets/laptopss.webp';
import Switches from '/assets/switch.webp';
import Gamepc from '/assets/gamepc.webp';
import Accesspt from '/assets/accespoint.webp';
import Firewall from '/assets/firewall.webp';
import Router from '/assets/router.webp';
import Andriod from '/assets/tablet.webp';
import Apple from '/assets/appleproducts.webp'
import system from '/assets/system.svg';
import sales from '/assets/sales.svg';

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

  const salesSections = [
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

  const rentalSections = [
    {
      items: [
        { image: Servers, title: 'Servers' },
        { image: Storage, title: 'Storages' },
        { image: Desktop, title: 'Desktops & Workstations' },
        { image: Laptop, title: 'Laptops' },
        { image: Switches, title: 'Switches' },
        { image: Gamepc, title: 'Gaming PCs' },
        { image: Accesspt, title: 'Access Points' },
        { image: Firewall, title: 'Firewalls' },
        { image: Router, title: 'Routers' },
        { image: Andriod, title: 'Android Tablets' },
        { image: Apple, title: 'All Apple Products' }
      ]
    }
  ];

 
  return (
    <div>
      {/* Sales Section */}
      <div className="main-section">
        <div className="product-section-title">
      <div>
        <img src={sales}/>
        <h1 className="section-main-title">Sales</h1>
        <p className="section-description">Our wide range of IT products ensures your business is equipped with the best technology.</p>
      </div>
        </div>
        {salesSections.map((section, index) => (
          <Section 
            key={index} 
            title={section.title} 
            description={section.description} 
            items={section.items} 
          />
        ))}
      </div>

      {/* Rental Section */}
      <div className="main-section">
      <div className="product-section-title">

<div>
<img src={system}/>

        <h1 className="section-main-title">Rental</h1>
        <p className="section-description">From servers to tablets, we offer rental solutions tailored to your operational demands.</p>
</div>
      </div>
        {rentalSections.map((section, index) => (
          <Section 
            key={index} 
            title={section.title} 
            description={section.description} 
            items={section.items.map(item => ({ image: item.image, title: item.title }))} 
          />
        ))}
      </div>
    </div>
  );
}

export default Solutions;
