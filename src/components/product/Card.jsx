import React from 'react';
import './Card.css';
import AOS from "aos";
import "aos/dist/aos.css";

function Card({ image, title }) {
  return (
    <div className="card-container" data-aos="fade-up">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
}

export default Card;
