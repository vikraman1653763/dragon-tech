import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import q1 from '/assets/quote1.svg';
import q2 from '/assets/quote2.svg';
import AOS from "aos";
import "aos/dist/aos.css";
function Section4() {
  const reviews = [
    {
      text: "Dragon TechSolutions transformed our entire IT infrastructure. Their proactive support and innovative solutions have helped us streamline our operations, and we couldn't be happier with their service!",
      name: "John Smith",
      position: "CEO, Tech Innovations",
    },
    {
      text: "The team at Dragon TechSolutions is exceptional. They helped us migrate to the cloud seamlessly and ensured our systems are secure and up to date. Highly recommend!",
      name: "Aarti Sharma",
      position: "Director of Operations, GreenTech Solutions",
    },
    {
      text: "We've worked with several IT service providers, but Dragon TechSolutions stands out for their responsiveness, expertise, and commitment to our success.",
      name: "Suresh Reddy",
      position: "IT Manager, RetailMart India",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  // Automatically cycle through reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds
    return () => clearInterval(interval);
  }, [reviews.length]);

  const reviewAnimation = {
    initial: { opacity: 0, x: 50 }, // Start faded out and below
    animate: { opacity: 1, x: 0 }, // Fade in and move to position
    exit: { opacity: 0, x: -50 }, // Fade out and move above
  };
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can adjust the duration as needed
  }, []);
  return (
    <div className="home-sec-4-container">
      <img src={q1} className='quote1' data-aos='flip-right'/>
      <img src={q2} className='quote2' data-aos='flip-left'/>
      <h2 className="home-sec-4-title">What they say about us</h2>
      <div className="home-sec-4-reviews">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReview}
            className="home-sec-4-review"
            variants={reviewAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <p className="home-sec-4-review-text">"{reviews[currentReview].text}"</p>
            <p className="home-sec-4-review-author">
              – {reviews[currentReview].name}, {reviews[currentReview].position}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Section4;
