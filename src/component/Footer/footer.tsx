import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';
import { Link } from 'react-router-dom';
import logo from "../../images/tpay_logo.png";
import twit from "../../images/twit.png";
import facebook from "../../images/facebook.png";
import insta from "../../images/insta.png";



const Footer = () => {
  return (
    <Row className="section-6">
      <div className='footcol1'>
        <img src={logo} alt="logo" className='footerlogo' />
        <div className='socialmdwrap'>
          <img src={insta} alt="logo" className='socialmdimg' />
          <img src={facebook} alt="logo" className='socialmdimg' />
          <img src={twit} alt="logo" />
        </div>
        <p>2015-2022 Taxaide Technologies Limited. All rights reserved</p>
      </div>
      <div className='footcol2'>
        <h5>About Us</h5>
        <p>About</p>
        <p>Legal & privacy</p>
      </div>
      <div className='footcol2'>
        <h5>Products</h5>
        <p>TBook®</p>
        <p>TaxiTWithhold®</p>
        <p>TaxiTPayroll®</p>
      </div>
    </Row>
  )
}
export default Footer;
