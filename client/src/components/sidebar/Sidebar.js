import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './sidebar.css'

export default function Sidebar() {
    const {user, dispatch} = useContext(Context);

//==============================================//

  return (
    <div className="leftContainer">
        <ul className="leftList">
            <li className="leftListItem">
                <Link className='link' to='/'>
                    <div className='iconContainer'>
                        <i class="fa-solid fa-house-user"></i>
                        <p className='sidebarName'>Home</p>
                    </div>
                </Link>
            </li>
    
            <li className="leftListItem" >
                {
                    user ? (
                        
                        <Link to={`/?user=${user.username}`} className='link' >
                            <div className='iconContainer'>
                                <i className="sidebarIcon fa-regular fa-user"></i>
                                <p className='sidebarName'>Profile</p>
                            </div>
                        </Link>

                    ) : (
                        <Link to={`/login`} className='link'>
                            <div className='iconContainer'>
                                <i className="sidebarIcon fa-regular fa-user"></i>
                                <p className='sidebarName'>Profile</p>
                            </div>
                        </Link>
                    )
                }
            </li>
            <li className="leftListItem">
                <Link className='link' to=''> 
                    <div className='iconContainer'>
                        <i className="sidebarIcon fa-regular fa-bookmark"></i> 
                        <p className='sidebarName'>Saved</p>
                    </div>
                </Link>
            </li>
        </ul>

        <div class="leftListItem2"> 
            {user ? (
                <Link className='link' to='/write'>
                    <span className='chirpButton'>
                        <b className='buttonText'>Chirp</b>
                    </span>
                </Link>
            ) : (
                <Link className='link' to='/login'>
                    <span className='chirpButton'>
                        <b>Chirp</b>
                    </span> 
                </Link>
            )}
        </div>   
    </div>
  )
}
