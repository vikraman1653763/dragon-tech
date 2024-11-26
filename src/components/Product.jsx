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
        description="Discover our cutting-edge IT products built to meet your business's unique requirements." 
      />
           <Section2/>
        </>
    );
}

export default Product;