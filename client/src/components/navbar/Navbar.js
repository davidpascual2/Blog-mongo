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
                {/* <i className="topIcon fa-brands fa-linkedin"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-pinterest"></i> */}
                <img src='' alt="" />
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
                <span class="topPostIcon"> 
                        {user ? (
                            <Link className='link' to='/write'><b>Post</b></Link>
                        ) : (
                            <Link className='link' to='/login'></Link>
                        )}
                </span>
                
            </div>
        </div>

    )
}
