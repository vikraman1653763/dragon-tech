import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Mission = () => {
  const missionPoints = [
    {
      title: "Integrity",
      description: "We maintain transparency and uphold the highest ethical standards in all our dealings.",
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every service we provide, delivering quality and reliability in every solution.",
    },
    {
      title: "Customer-Centricity",
      description: "We put our clients first, offering customized solutions that meet their unique business needs and goals.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, mirror: false });
  }, []);

  return (
    <section className="mission-section">
      <h2 className="mission-heading" data-aos="fade-up">
        OUR MISSION
      </h2>
      <div className="mission-cards">
        {missionPoints.map((point, index) => (
          <div
            key={index}
            className="mission-card"
            data-aos="fade-up"
            data-aos-delay={index * 200} // Staggered animation for each card
          >
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
