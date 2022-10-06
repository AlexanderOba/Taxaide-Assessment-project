import React, { useEffect } from 'react';
import './home.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header/header';
import AOS from 'aos';
import "aos/dist/aos.css";
import section1img from "../../images/fairlady.png"
import section2img from "../../images/section2img.png"
import step1img from "../../images/step1img.png";
import step2img from "../../images/step2img.png";
import step3img from "../../images/step3img.png";
import car from "../../images/car.png";
import time from "../../images/time.png";
import sheild from "../../images/sheild.png";
import control from "../../images/control.png";
import { NavLink } from 'react-router-dom';
import Burger from '../Header/burger';
import logo from "../../images/tpay_logo.png";
import "../Header/header.css";

const Business = () => {
   useEffect(() => {
      AOS.init({
         duration: 1500,
      });
      AOS.refresh();
   }, []);

   return (
      <>
         <nav>
            <div className="logo">
               <img src={logo} alt="logo" />
               <NavLink to="/">
                  <div className="logolinks">For Individuals</div>
               </NavLink>
               <NavLink to="/business" activeClassName="activelink">
                  <div className="logolinks">For Businesses</div>
               </NavLink>
            </div>
            <Burger />
         </nav>
         <Container fluid>
            <Row className='section1'>
               <div className='section1_col1'>
                  <h4>Secure & seamless online transactions</h4>
                  <p data-aos='fade-down'>
                     Providing you with the best online payment experience
                  </p>
                  <span className='sgupbtn'>Create free account</span>
               </div>
               <div className='section1_col2'>
                  <img src={section1img} data-aos='zoom-in-up' className='img-fluid section1img' />
               </div>
            </Row>
            <Row className='section5'>
               <div className='rightsdiv'>
                  © 2020 Whichride - All rights reserved.
               </div>
               <div>
                  <span className='policyspan'>Privacy Policy</span>
               </div>
               <div> Terms and Conditions</div>
            </Row>
         </Container>
      </>
   )
}
export default Business;