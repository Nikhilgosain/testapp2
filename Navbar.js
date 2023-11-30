import React from 'react'
import photo from './assets/Screenshot 2023-11-18 191912.png'
import moon from  './assets/moon.png'
import { useState } from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
    <img src={photo} alt="" className="image2"/> 
    <ul>
        <li>
            <a href="#">Features</a>
         
        </li>
        <li><a href="#">Company</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Open Account </a></li>
        <li><a href="#"><i className="fa fa-search"></i></a></li>
    </ul>
     <img src={moon} id="icon"/> 
</nav>
  )
}
