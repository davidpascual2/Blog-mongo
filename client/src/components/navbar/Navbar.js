import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import Delete from '../../assets/addPost.png'
import './navbar.css';

export default function Navbar() {
    
    const {user, dispatch} = useContext(Context);
    const PF = 'http://localhost:3001/images/'

    const handleLogout = () =>{
        dispatch({ type:"LOGOUT" })
    }

    return (
        <div className='top'>
            <div className="topLeft">
                <Link to='/' className='link'>
                    <b className='logo'>Chirp</b>
                </Link>
            </div>

            <div className="topCenter">
                {/* <ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to='/'>HOME</Link>
                    </li>
                    
                    <li className="topListItem" onClick={ handleLogout }>
                        {user && 'LOGOUT'}
                    </li>
                </ul> */}
            </div>

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
                
                {/* <span class="topPostContainer"> 
                        {user ? (
                            <Link className='link' to='/write'>
                                <span className='topPostIcon'>
                                    <b>Post</b>
                                </span>
                            </Link>
                        ) : (
                            <Link className='link' to='/login'>
                                <span className='topPostIcon'>
                                    <b>Post</b>
                                </span> 
                            </Link>
                        )}
                </span> */}
                <span className="topPostContainer" onClick={ handleLogout }> 
                        {user ? (
                            // <Link className='link' to=''>
                            //     <span className='topPostIcon'>
                            //         <b>Logout</b>
                            //     </span>
                            // </Link>
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
