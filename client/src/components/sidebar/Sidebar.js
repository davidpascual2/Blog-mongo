import React from 'react';
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://www.w3schools.com/css/img_forest.jpg" alt='' />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis similique est, voluptas consequatur quod quia iste quisquam cum laudantium ducimus! Illo dicta at sequi libero! Temporibus debitis voluptatum ut voluptatem.
            </p>

        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">LIFE</li>
                <li className="sidebarListItem">MUSIC</li>
                <li className="sidebarListItem">STYLE</li>
                <li className="sidebarListItem">SPORT</li>
                <li className="sidebarListItem">TECH</li>
                <li className="sidebarListItem">CINEMA</li>
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-pinterest"></i>
            </div>

        </div>
    </div>
  )
}
