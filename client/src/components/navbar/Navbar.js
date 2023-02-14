import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
            
        </div>
        <div className="topRight">
            <img className='topImg' src="https://www.w3schools.com/css/img_lights.jpg" alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            
        </div>
    </div>

  )
}
