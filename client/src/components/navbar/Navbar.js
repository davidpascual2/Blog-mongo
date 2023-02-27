import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './navbar.css';

export default function Navbar() {
    
    const {user, dispatch} = useContext(Context);

    const handleLogout = () =>{
        dispatch({ type:"LOGOUT" })
    }

//============================================

    return (
        <div className='top'>
            <div className="topLeft">
                <Link to='/' className='link'>
                    <b className='logo'>Chirp</b>
                </Link>
            </div>

            <div className="topCenter"></div>

            <div className="topRight">
                {
                    user ? (
                        <Link to='/settings' className='link'>
                            <b>{user.username}</b>
                        </Link>

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
                
                <span className="topPostContainer" onClick={ handleLogout }> 
                        {user ? (
                            <span className='topPostIcon' onClick={ handleLogout }>
                                <b>Logout</b>
                            </span>
                        ) : (
                            <div></div>
                        )}
                </span>
            </div>
        </div>

    )
}
