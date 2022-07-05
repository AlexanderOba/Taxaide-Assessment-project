import React, { useEffect } from 'react';
import './home.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header/header';
import AOS from 'aos';
import "aos/dist/aos.css";
import section1img from "../../images/section1img.png"
import section2img from "../../images/section2img.png"
import step1img from "../../images/step1img.png";
import step2img from "../../images/step2img.png";
import step3img from "../../images/step3img.png";
import car from "../../images/car.png";
import time from "../../images/time.png";
import sheild from "../../images/sheild.png";
import control from "../../images/control.png"

const Home = () => {

   useEffect(() => {

      AOS.init({
         duration: 1500,
      });
      AOS.refresh();
   }, []);

   return (
      <>
         <Header />
         <Container fluid>
            <div className='section1'>
               <div className='section1_col1'>
                  <h4>Compare & book ride-hailing providers </h4>
                  <p data-aos='fade-down'>
                     Save money and time with WhichrRide.
                     Think Compare the market but for taxis.
                  </p>
               </div>
               <div className='section1_col2'>
                  <img src={section1img} data-aos='zoom-in-up' className='section1img'/>
               </div>
            </div>
            <Row className='section2'>
               <Col md={6}>
                  <h2 className='section2_header'>Whichride brings together multiple ride hailing providers and local taxi firms in one app</h2>
                  <p className='section2_para' data-aos='fade-down'>
                     Allowing riders to select the provider that offers the best price,
                     service or travel time, then seamlessly book within the app
                  </p>
               </Col>
               <Col md={8}>
                  <Row>
                     <Col md={6}>
                        <img src={section2img} data-aos='zoom-in-up' className='section1img'/>
                     </Col>
                     <Col md={6} className="section2col2wrap">
                        <div className='_stepswrap' data-aos='fade-right'>
                           <span><img src={step1img} /></span>
                           <div className='_stepswrapcontent'>
                              <h6>Enter location</h6>
                              <p>Enter your destination to see a list of taxi providers near you.</p>
                           </div>
                        </div>
                        <div className='_stepswrap' data-aos='fade-right'>
                           <span><img src={step2img} /></span>
                           <div className='_stepswrapcontent'>
                              <h6>Find the perfect ride</h6>
                              <p>Filter results by driver rating, driver sex, waiting times,
                                 price or speed. Reduce carbon footprint by only showing hybrid or electric cars.
                              </p>
                           </div>
                        </div>
                        <div className='_stepswrap' data-aos='fade-right'>
                           <span><img src={step3img} /></span>
                           <div className='_stepswrapcontent'>
                              <h6>Pay and Save</h6>
                              <p>Once you select a ride, we search the web for coupons to get you an even better deal,
                                 then book seemlessly within our app and earn points while you ride.
                              </p>
                           </div>
                        </div>
                     </Col>
                  </Row>
               </Col>
            </Row>
            <Row className='section3'>
            <span className='section3_heading'>Why Whichride</span>
               <Col md={6} className="section3_col1">
                  <div className='_choicewrap'>
                     <span><img src={car} data-aos='flip-left'/></span>
                     <div className='choicescontent' data-aos='fade-right'>
                        <h6>More choices</h6>
                        <p>WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.
                        </p>
                     </div>
                     <span><img src={time} data-aos='flip-left'/></span>
                     <div className='choicescontent' data-aos='fade-right'>
                        <h6>More choices</h6>
                        <p>
                           WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.
                        </p>
                     </div>
                  </div>
               </Col>
               <Col md={6} className="section3_col2" >
                  <div className='_choicewrap _choicewrap2'>
                     <span className='imgspan control' data-aos='flip-left'><img src={control} /></span>
                     <div className='choicescontent' data-aos='fade-down'>
                        <h6>More choices</h6>
                        <p>
                           WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.
                        </p>
                     </div>
                     <span className='imgspan sheildspan' data-aos='flip-left'><img src={sheild} /></span>
                     <div className='choicescontent' data-aos='fade-down'>
                        <h6>Safety first</h6>
                        <p>
                           WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.
                        </p>
                     </div>
                  </div>
               </Col>
            </Row>
            <Row className='section4'>
               <Col md={5}>
                  <form className='sctn4form'>
                     <h3>Sign up to our beta form</h3>
                     <p>
                        Sign up to our mailing list to find out more
                        information and keep up to date about our activities
                     </p>
                     <div>
                        <div className='inptwrap'>
                           <input type="text" placeholder="email" size={2} className='form-control inpt' />
                        </div>
                        <span className='frmbtn'>Subscribe</span>
                     </div>
                  </form>
               </Col>
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
export default Home;