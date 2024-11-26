import React from 'react';
import HeroSection from './product/HeroSection.jsx';
import Section2 from './product/Section2.jsx';
import '../style/product.css';
import Banner from "./Banner";

function Product() {

    return (
        <>
            <Banner 
        heading="Our Products" 
        description="Your one-stop destination for IT rentals and sales, from laptops to networking solutions – Dragon Techsolutions has you covered!" 
      />
           <Section2/>
        </>
    );
}

export default Product;