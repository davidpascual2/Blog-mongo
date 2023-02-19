import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './navbar.css';

export default function Navbar() {
    
    const {user, dispatch} = useContext(Context)

    const handleLogout = () =>{
        dispatch({ type:"LOGOUT" })
    }

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
                    <li className="topListItem">
                        <Link className='link' to='/'>HOME</Link>
                    </li>
                    <li className="topListItem" ><Link className='link' to='/'>ABOUT</Link></li>
                    <li className="topListItem"><Link className='link' to='/'>CONTACT</Link></li>
                    <li className="topListItem"><Link className='link' to='/write'>WRITE</Link></li>
                    <li className="topListItem" onClick={ handleLogout }>{user && 'LOGOUT'}</li>
                </ul>
                
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className='topImg' 
                            src={user.profilePic} 
                            alt="" 
                        />

                    ) : (
                        <ul className='topList'>
                            <li className='topListItem'>
                                <Link className='link' to='/login'>LOGIN</Link>
                            </li>
                            <li className='topListItem'>
                                <Link className='link' to='/register'>REGISTER</Link> 
                            </li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
                
            </div>
        </div>

    )
}
