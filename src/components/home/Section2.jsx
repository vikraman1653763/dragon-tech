import React from 'react';

const Section2 = () => {
  return (
    <section className="home-sec-2-container">
        <img src='/assets/dragon.svg' className='home-dragon'/>
      <div className="home-sec-2-content">
        <div className='home-sec-2-content-box-1'>

        <h2 className="home-sec-2-title">Why Choose Dragon Tech Solutions?</h2>
        <p className="home-sec-2-description">
          At Dragon TechSolutions, we are committed to providing innovative IT solutions that enable businesses to grow and succeed in a rapidly changing world. Here's why we stand out:
        </p>
        <div className="home-sec-2-cards">
          <div className="home-sec-2-card">
            <h3>Expert Team</h3>
            <p>Our professionals bring years of experience to help businesses succeed.</p>
          </div>
          <div className="home-sec-2-card">
            <h3>Custom Solutions</h3>
            <p>We tailor our services to meet your specific needs, ensuring the best outcomes.</p>
          </div>
        </div>
        </div>
        <div className="home-sec-2-cards">
        <div className='home-sec-2-content-box-2'>
          <div className="home-sec-2-card">
            <h3>Comprehensive Support</h3>
            <p>From infrastructure to security, we offer end-to-end IT solutions.</p>
          </div>
          <div className="home-sec-2-card">
            <h3>Proven Results</h3>
            <p>We have a track record of delivering successful IT solutions to businesses across various industries.</p>
          </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
