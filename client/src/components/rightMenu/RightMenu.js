import React from 'react';
import { Link } from 'react-router-dom';
import './rightMenu.css';

export const RightMenu = () => {
  return (
    
    <div className="rightContainer">
        <ul className="rightList">
            <li className="rightListItem">
                <Link className='link' to='/'>Home</Link>
            </li>
            <li className="rightListItem" ><Link className='link' to='/settings'>Profile</Link></li>
            <li className="rightListItem"><Link className='link' to='/'>Bookmarks</Link></li>
            <li className="rightListItem"><Link className='link' to='/write'>Chirp</Link></li>
            {/* <li className="topListItem">
                {user ? (
                    <Link className='link' to='/write'>WRITE</Link>
                ) : (
                    <Link className='link' to='/login'>WRITE</Link>
                )}
            </li> */}
            
        </ul>
                
    </div>
  )
}
