import React from 'react'
import Section3 from './contact/Section3.jsx';
import Section1 from './contact/Section1.jsx';
import '../style/service.css';
import Section2 from './contact/Section2.jsx';
import Section4 from './contact/Section4.jsx';
import Banner from "./Banner";

function Contact() {
  return (
    <div>
       <Banner 
        heading="Contact Us Today" 
        description="Reach out for tailored IT solutions and expert guidance. We're here to help you achieve your business goals." 
      />
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  )
}

export default Contact
