import React, { lazy, Suspense} from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Service from "./components/Service.jsx";
import Product from "./components/Product.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Success from "./components/Success.jsx";
import ScrollToTop from './components/ScrollToTop.jsx';
import './style/App.css';
import Top from './components/Top.jsx';

const App = () => {
  
  return (
    <Router>
      <Top/>
      <Navbar/>
      <div className='main'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/success' element={<Success/>}/>
      
      </Routes>
      </div>
      <Footer/>
      <ScrollToTop/>
    </Router>
  );
};

export default App;