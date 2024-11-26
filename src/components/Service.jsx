import React from "react";
import '../style/service.css';
import Section3 from "./Service/Section3";
import Banner from "./Banner.jsx";

 
const Service = () => {
  return (
    <>
    <Banner 
        heading="Our Services" 
        description="Explore our wide range of IT services designed to empower your business and drive success." 
      />
    <Section3/>
    </>
  );
};

export default Service;
