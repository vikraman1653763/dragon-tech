import React from 'react'
import '../style/home.css';

import Section1 from './home/Section1';
import Iso from './home/Iso.jsx';
import Section4 from './home/Section4';
import Section3 from './home/Section3';
import Section5 from './home/Section5';
import Section6 from './home/Section6';
import Section2 from './home/Section2';
function Home() {
  return (
    <div>
      <Section1/>
      <Iso />
      <Section2/>
      <Section3/>
      <Section5/>
      <Section4/>
      <Section6/>
    </div>
  )
}

export default Home
