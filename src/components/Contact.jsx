import React from 'react'
import Section3 from './contact/Section3.jsx';
import Banner from './contact/Section1.jsx';
import '../style/service.css';
import Section2 from './contact/Section2.jsx';
import Section4 from './contact/Section4.jsx';

function Contact() {
  return (
    <div>
      <Banner/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  )
}

export default Contact
