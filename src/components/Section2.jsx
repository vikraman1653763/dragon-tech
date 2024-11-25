import React from "react";
import '../style/service.css';

const servicesData = [
  {
    title: "IT Infrastructure Management",
    items: [
      "Outsource and Consulting",
      "Virtualization Services",
      "Cloud Services",
      "Storage Management",
      "Datacenter Services",
      "Networking",
      "Hosting Services",
    ],
  },
  {
    title: "Infrastructure Security Architecture",
    items: [
      "Application & Information Security Controls",
      "Unified Threat Management",
      "Network Security",
      "Endpoint Protection",
      "Email & Web Security",
      "Data Protection",
      "Surveillance",
      "Risk Management",
    ],
  },
  {
    title: "Systems Management Services",
    items: [
      "System Life-cycle Management",
      "System Optimization",
      "Capacity and Performance Planning",
      "Migration Services",
      "Automation",
      "Patch Management and Deployment",
      "Hardware Management",
    ],
  },
  {
    title: "Communications Architecture",
    items: ["Call Center Solutions", "Video Conference Solutions"],
  },
  {
    title: "IT Security Operations",
    items: [
      "Phishing Email Rollout",
      "VA/PT Assessment and Audit",
      "Security Event Management",
      "System Hardening",
      "Web Security",
      "User Life-Cycle Management",
    ],
  },
];

const Section2 = () => {
  return (
    <div className="service-container">
      <h2 className="service-heading">Our Comprehensive IT Services & Products</h2>
      <p className="service-description">
        We provide a wide range of IT solutions designed to meet the diverse needs of modern businesses. Our services cover everything from infrastructure management and security architecture to systems optimization and IT security operations. Explore the services we offer to enhance your business’s IT landscape.
      </p>
      {servicesData.map((service, index) => (
        <div className="service-card" key={index}>
          <h3 className="service-card-title">{service.title}</h3>
          <ul className="service-card-list">
            {service.items.map((item, i) => (
              <li className="service-card-list-item" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Section2;
