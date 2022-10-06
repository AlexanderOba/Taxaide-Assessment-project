import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
    list-style: none;
    display:flex;
    justify-content: space-around;
    width: 42%;
    font-size: 16px;
    font-weight:600;
    align-items:  baseline;
    margin-bottom: 2px;
    color: #ECF1F0;
    
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
      <li className="navlinks">About Us</li>
      <li className="navlinks">Contact</li>
      <li className="navlinks loginlink">Login</li>
      <li className="navlinks sgupbtn">Create free account</li>
    </Ul>
  );
};
export default Navlist;
