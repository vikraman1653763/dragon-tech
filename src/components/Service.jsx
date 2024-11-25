import React from "react";
import '../style/service.css';
import Banner from "./Banner";
import Section3 from "./Service/Section3";
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

const Service = () => {
  return (
    <>
    <Banner/>
    {/* <Section2/> */}
    <Section3/>
    </>
  );
};

export default Service;
