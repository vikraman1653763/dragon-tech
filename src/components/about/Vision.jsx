import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Vision = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      mirror: false,
    });
  }, []);

  const visionPoints = [
    {
      title: "Empower Businesses",
      description: "Provide businesses with the IT tools and support they need to scale and succeed.",
    },
    {
      title: "Drive Innovation",
      description: "Continually adapt and innovate, ensuring that our clients always have access to the latest technologies.",
    },
    {
      title: "Customer Satisfaction",
      description: "Focus on delivering personalized, high-quality services that exceed client expectations.",
    },
  ];

  return (
    <section className="vision-section">
      <h2 className="vision-heading">OUR VISION</h2>
      <div className="vision-cards">
        {visionPoints.map((point, index) => (
          <div
            key={index}
            className="vision-card"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`} // Add delay for staggered animations
          >
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
