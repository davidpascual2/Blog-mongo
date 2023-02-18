import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

export default function Sidebar() {
    const [cats, setCats] = useState([]);
    useEffect(()=>{
        const getCats = async () =>
        {
            const res = await axios.get('http://localhost:3001/api/categories')
            setCats(res.data)
        }
        getCats()
    },[])

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
                {cats.map((c)=>(
                    <Link to={`/?cat=${c.name}`} className='link'>
                        <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
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
