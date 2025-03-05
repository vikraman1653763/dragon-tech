import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100vw" : "-100vw",
    opacity: 1,
    transition: {
      x: { ease: "linear", duration: 0.3 },
      opacity: { duration: 0.3 },
    },
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { ease: "linear", duration: 0.3 },
      opacity: { duration: 0.3 },
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? "100vw" : "-100vw",
    opacity: 1,
    transition: {
      x: { ease: "linear", duration: 0.3 },
      opacity: { duration: 0.3 },
    },
  }),
};

const wrap = (min, max, value) => {
  const range = max - min;
  return (((value - min) % range + range) % range + min);
};

const Section1 = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const cards = [
    {
      title: "Innovation Meets Expertise in IT Management",
      content:
        "Operating from Chennai, Hyderabad, and Bangalore, we provide comprehensive IT support that keeps your business operations uninterrupted, efficient, and future-ready.",
      image: "/assets/card3.webp",
    },
    {
      title: "Seamless IT Integration for Every Industry",
      content:
        "From virtualization to cloud solutions, our in-house experts ensure your IT environment is reliable, scalable, and secure. Stay ahead in the knowledge revolution with Dragon Techsolutions.",
      image: "/assets/card2.webp",
    },
    {
      title: "Empowering Your Business with Tailored IT Solutions",
      content:
        "With over a decade of excellence, Dragon Techsolutions specializes in delivering cutting-edge IT services, from infrastructure management to advanced cybersecurity. Your growth is our mission.",
      image: "/assets/card1.webp",
    },
  ];

  const cardIndex = wrap(0, cards.length, page);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setPage(page + newDirection);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [page]);

  return (
    <div className="carousel-container">
      <button className="prev-btn" onClick={() => paginate(-1)}>
        &#9664;
      </button>
      <div className="carousel">
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="carousel-card"
            style={{
              backgroundImage: `url(${cards[cardIndex].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="carousel-card-container">
              <h2>{cards[cardIndex].title}</h2>
              <p>{cards[cardIndex].content}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <button className="next-btn" onClick={() => paginate(1)}>
        &#9654;
      </button>
    </div>
  );
};

export default Section1;
