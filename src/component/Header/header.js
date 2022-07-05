import React, { Component } from 'react';
import './header.css';
import Burger from './burger';
import logo from "../../images/Logo.png"



class Header extends Component {
    render(){
        return(
            
              <nav>
               <div className="logo">
                  <img src={logo} alt="logo"/>
               </div>
               <Burger/>
            </nav>

        )
    }
}
export default Header;