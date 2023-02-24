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
                    <p><b>Chirp</b></p>
                </Link>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to='/'>HOME</Link>
                    </li>
                    {/* <li className="topListItem" ><Link className='link' to='/'>ABOUT</Link></li> */}
                    {/* <li className="topListItem"><Link className='link' to='/'>CONTACT</Link></li> */}
                    {/* <li className="topListItem"><Link className='link' to='/write'>WRITE</Link></li> */}
                    {/* <li className="topListItem">
                        {user ? (
                            <Link className='link' to='/write'>WRITE</Link>
                        ) : (
                            <Link className='link' to='/login'>WRITE</Link>
                        )}
                    </li> */}
                    <li className="topListItem" onClick={ handleLogout }>{user && 'LOGOUT'}</li>
                </ul>
                
            </div>
            <div className="topRight">
                {
                    user ? (
                        <Link to='/settings' className='link'>
                            {/* <img 
                                className='topImg' 
                                src={PF+user.profilePic} 
                                alt="" 
                            /> */}
                            {user.username}
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
                {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
                <span class="topPostContainer"> 
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
                </span>
                
            </div>
        </div>

    )
}
