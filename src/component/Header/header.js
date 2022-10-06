import React, { Component } from "react";
import "./header.css";
import Burger from "./burger";
import logo from "../../images/tpay_logo.png";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
          <NavLink to="/" activeClassName="activelink">
            <div className="logolinks">For Individuals</div>
          </NavLink>
          <NavLink to="/business" activeClassName="activelink">
            <div className="logolinks">For Businesses</div>
          </NavLink>
        </div>
        <Burger />
      </nav>
    );
  }
}
export default Header;
