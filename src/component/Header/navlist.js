import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
    list-style: none;
    display:flex;
    justify-content: space-around;
    width: 25%;
    color: #000;
    font-size: 14px;
    align-items:  baseline;
    
    li a{
        list-style: none;
        text-decoration: none;
    }
@media screen and (max-width:1024px){
     width: 60%;
}
@media screen and (max-width:760px){
    position: fixed;
    left: -1px;
    height: 100vh;
    top: 9vh;
    background-color:  #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    z-index: 6;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.5s ease-in-out;


`;

const Navlist = ({ open }) => {
  return (
    <Ul open={open}>
      <li className="navlinks">The App</li>
      <li className="navlinks">About Us</li>
      <li className="navlinks">Get in Touch</li>
    </Ul>
  );
};
export default Navlist;
