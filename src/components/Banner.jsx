import React from "react";
import "../style/banner.css";

const Banner = ({ heading, description }) => {
  return (
    <section className="banner">
      <img src="/assets/banner5.webp" alt="Page Banner" />
      <div className="image-text">
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Banner;
