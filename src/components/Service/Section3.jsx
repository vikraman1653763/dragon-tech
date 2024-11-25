import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure to import AOS styles

const servicesData = [
  {
    title: "IT Infrastructure Management",
    items: [
      {
        title: "Outsource and Consulting",
        description: "We provide expert consulting and outsourcing services to streamline your IT infrastructure, ensuring seamless operations and cost-effective solutions."
      },
      {
        title: "Virtualization Services",
        description: "Transform your IT environment with cutting-edge virtualization technologies that increase efficiency and reduce operational costs."
      },
      {
        title: "Cloud Services",
        description: "Our cloud services offer scalable and secure solutions, allowing you to manage your business operations with maximum flexibility."
      },
      {
        title: "Storage Management",
        description: "Ensure your data is secure and accessible with our comprehensive storage management solutions, tailored to your business needs."
      },
      {
        title: "Datacenter Services",
        description: "We design, implement, and manage data centers that optimize performance, reduce costs, and ensure high availability for your critical applications."
      },
      {
        title: "Networking",
        description: "Our networking solutions are built to ensure high-speed connectivity, security, and optimal performance across your organization."
      },
      {
        title: "Hosting Services",
        description: "We provide reliable and scalable hosting services that ensure uptime, security, and the flexibility to scale with your business."
      }
    ],
  },
  {
    title: "Infrastructure Security Architecture",
    items: [
      {
        title: "Application & Information Security Controls",
        description: "We implement robust security measures to safeguard your applications and sensitive data against unauthorized access and attacks."
      },
      {
        title: "Unified Threat Management",
        description: "A unified approach to protect your infrastructure from diverse threats through integrated solutions that enhance overall security."
      },
      {
        title: "Network Security",
        description: "Ensure the protection of your network with comprehensive security solutions designed to detect, prevent, and respond to malicious threats."
      },
      {
        title: "Endpoint Protection",
        description: "Protect all endpoints in your network from potential cyber threats, ensuring secure devices and user access across your organization."
      },
      {
        title: "Email & Web Security",
        description: "We provide advanced security for email and web traffic, preventing phishing, malware, and other cyberattacks."
      },
      {
        title: "Data Protection",
        description: "We implement stringent data protection policies to ensure compliance with regulations and safeguard critical business data."
      },
      {
        title: "Surveillance",
        description: "Continuous monitoring of your IT environment to identify and mitigate potential security threats."
      },
      {
        title: "Risk Management",
        description: "Our risk management solutions help you assess and mitigate risks, ensuring the protection of your IT infrastructure and business assets."
      }
    ],
  },
  {
    title: "Systems Management Services",
    items: [
      {
        title: "System Life-cycle Management",
        description: "Manage your IT systems throughout their entire life-cycle, from planning and installation to decommissioning."
      },
      {
        title: "System Optimization",
        description: "Maximize the performance of your IT systems through continuous optimization and fine-tuning for peak efficiency."
      },
      {
        title: "Capacity and Performance Planning",
        description: "Plan for future growth by ensuring your IT infrastructure can handle increased demands and performance requirements."
      },
      {
        title: "Migration Services",
        description: "We assist in migrating your IT systems, data, and applications to newer platforms with minimal disruption."
      },
      {
        title: "Automation",
        description: "Automate routine IT processes and tasks to improve efficiency, reduce human error, and streamline operations."
      },
      {
        title: "Patch Management and Deployment",
        description: "Ensure your systems are up-to-date and secure with regular patch management and timely deployment."
      },
      {
        title: "Hardware Management",
        description: "We provide comprehensive hardware management solutions, from procurement to maintenance and disposal."
      }
    ],
  },
  {
    title: "Communications Architecture",
    items: [
      {
        title: "Call Center Solutions",
        description: "We offer advanced call center solutions to improve customer interactions and streamline support processes."
      },
      {
        title: "Video Conference Solutions",
        description: "Our video conferencing solutions enable seamless communication, collaboration, and engagement across teams and locations."
      }
    ],
  },
  {
    title: "IT Security Operations",
    items: [
      {
        title: "Phishing Email Rollout",
        description: "We conduct simulated phishing attacks to raise awareness and improve your organization's defenses against phishing threats."
      },
      {
        title: "VA/PT Assessment and Audit",
        description: "We perform Vulnerability Assessment and Penetration Testing (VA/PT) to identify and mitigate potential security vulnerabilities."
      },
      {
        title: "Security Event Management",
        description: "Our event management solutions help you track, analyze, and respond to security incidents in real-time."
      },
      {
        title: "System Hardening",
        description: "We strengthen your IT systems by applying security patches and best practices to reduce vulnerabilities and mitigate potential risks."
      },
      {
        title: "Web Security",
        description: "We provide robust web security measures to protect your websites and online applications from cyber threats."
      },
      {
        title: "User Life-Cycle Management",
        description: "Our user life-cycle management solutions ensure secure user access throughout their employment, from onboarding to offboarding."
      }
    ],
  },
];

const ServiceSection = ({ sectionData }) => {
  return (
    <div className="service-sec-container" data-aos="fade-up">
      <h2 className="service-sec-title">{sectionData.title}</h2>
      <div className="service-sec-cards">
        {sectionData.items.map((item, index) => (
          <div className="service-sec-card" key={index} data-aos="flip-left">
            <h3 className="service-sec-card-title">{item.title}</h3>
            <p className="service-sec-card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Section3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can adjust the duration as needed
  }, []);

  return (
    <div className="section-3">
      {servicesData.map((service, index) => (
        <ServiceSection key={index} sectionData={service} />
      ))}
    </div>
  );
};

export default Section3;
