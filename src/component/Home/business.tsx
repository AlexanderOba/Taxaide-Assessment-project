import React, { useEffect, useState } from 'react';
import './home.css';
import { Container, Row, Col } from 'react-bootstrap';
import right_panel from "../../images/right_panel.png";
import money_transfer from "../../images/money_transfer.png";
import sponsors from "../../images/sponsors.png"
import time from "../../images/EMI.png";
import sheild from "../../images/Security.png";
import control from "../../images/Money.png"
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";
import people from "../../images/people.png";
import Burger from '../Header/burger';
import logo from "../../images/tpay_logo.png";
import "../Header/header.css";
import Footer from '../Footer/footer';
import { TextAnimationBusiness } from './textanimation';


const Business = () => {
   const [state, setState] = useState({
      pay_bills: true,
      buy_airtime: false,
      transfer: false,
      toll: false
   })
   const {
      pay_bills,
      buy_airtime,
      transfer,
      toll
   } = state

   const switchTab = (a: string) => {
      if (a === "pay_bills") {
         setState({
            ...state,
            pay_bills: true,
            buy_airtime: false,
            transfer: false,
            toll: false,
         })
      }
      if (a === "buy_airtime") {
         setState({
            ...state,
            pay_bills: false,
            buy_airtime: true,
            transfer: false,
            toll: false
         })
      }
      if (a === "transfer") {
         setState({
            ...state,
            pay_bills: false,
            buy_airtime: false,
            transfer: true,
            toll: false
         })
      }
      if (a === "toll") {
         setState({
            ...state,
            pay_bills: false,
            buy_airtime: false,
            transfer: false,
            toll: true
         })
      }
   }
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
               <div className="webnavlink">
                  <NavLink to="/">
                     <div className="logolinks">For Individuals</div>
                  </NavLink>
                  <NavLink to="/business" activeClassName="activelink">
                     <div className="logolinks">For Businesses</div>
                  </NavLink>
               </div>
            </div>
            <Burger />
         </nav>
         <Container fluid>
            <Row className='businesssection1'>
               <div className='businesspgcol'>
                  <h4>Manage payroll, compliance & HR in real time</h4>
                  <TextAnimationBusiness />
                  <span className='sgupbtn  bsnessbtn'>Create free account</span>
               </div>
            </Row>
            <div className='businscnimgwrap'>
               <div>
                  <img src={people} className='img-fluid' />
               </div>
            </div>
            <Row className='section2'>
               <Col md={7}>
                  <h2 className='section2_header'>Payments tools designed for you</h2>
                  <p className='section2_para'>
                     Explore payment features that provides you with every possible solution
                  </p>
               </Col>
               <div className='section2contentwrap'>
                  <div className='section2content'>
                     <img src={control} data-aos='flip-left' />
                     <div className='choicescontent'>
                        <h6>User Friendly</h6>
                        <p>
                           Highly responsive and easy to navigate
                        </p>
                     </div>
                  </div>
                  <div className='section2content'>
                     <img src={sheild} data-aos='flip-left' />
                     <div className='choicescontent' >
                        <h6>Secure</h6>
                        <p>
                           Your data is secure. It is continuously monitored, audited, and stored in an encrypted form.
                        </p>
                     </div>
                  </div>
                  <div className='section2content'>
                     <img src={time} data-aos='flip-left' />
                     <div className='choicescontent'>
                        <h6>Fast</h6>
                        <p>
                           Transacting takes only a few seconds - it's convenient and safe.
                        </p>
                     </div>
                  </div>
               </div>
            </Row>
            <Row className='section3'>
               <div className='billpaymentoptionswrap'>
                  {pay_bills ? (
                     <div className='billpaymentoptionscontent activepayment'>
                        <h5>Payments</h5>
                        <p>Paying your bills has never been so easy.</p>
                     </div>
                  ) : (
                     <div className='billpaymentoptionscontent' onClick={() => switchTab("pay_bills")}>
                        <h5>Payments</h5>
                        <p>Paying your bills has never been so easy.</p>
                     </div>
                  )}
                  <div className='billpaymentoptionsgap'></div>
                  {buy_airtime ? (
                     <div className='billpaymentoptionscontent activepayment'>
                        <h5>Pay Roll</h5>
                        <p>Never get caught with low airtime and data again!</p>
                     </div>
                  ) : (
                     <div className='billpaymentoptionscontent' onClick={() => switchTab("buy_airtime")}>
                        <h5>Pay Roll</h5>
                        <p>Never get caught with low airtime and data again!</p>
                     </div>
                  )}
                  <div className='billpaymentoptionsgap'></div>
                  {transfer ? (
                     <div className='billpaymentoptionscontent activepayment'>
                        <h5>Pay Slip</h5>
                        <p>Transferring money is now hassle-free.</p>
                     </div>
                  ) : (
                     <div className='billpaymentoptionscontent' onClick={() => switchTab("transfer")}>
                        <h5>Pay Slip</h5>
                        <p>Transferring money is now hassle-free.</p>
                     </div>
                  )}
                  <div className='billpaymentoptionsgap'></div>
                  {toll ? (
                     <div className='billpaymentoptionscontent activepayment'>
                        <h5>Reports</h5>
                        <p>Never worry about getting a toll ticket again.</p>
                     </div>
                  ) : (
                     <div className='billpaymentoptionscontent' onClick={() => switchTab("toll")}>
                        <h5>Reports</h5>
                        <p>Never worry about getting a toll ticket again.</p>
                     </div>
                  )}
               </div>
               <div className='section3col2'>
                  {pay_bills && (
                     <img src={right_panel} className='img-fluid' />
                  )}
                  {transfer && (
                     <img src={right_panel} className='img-fluid' />
                  )}
                  {buy_airtime && (
                     <img src={money_transfer} className='img-fluid' />
                  )}
                  {toll && (
                     <img src={money_transfer} className='img-fluid' />
                  )}
               </div>
            </Row>
            <Row className="section5">
               <div className='section5col1'>
                  <h5>
                     Send funds Remit taxes Buy utilities
                  </h5>
                  <span className='sgupbtn secn5btn'>Get Started</span>
               </div>
               <div className='section5col2'>
                  <img src={sponsors} className="img-fluid" />
               </div>
            </Row>
            <Footer />
         </Container>
      </>
   )
}
export default Business;