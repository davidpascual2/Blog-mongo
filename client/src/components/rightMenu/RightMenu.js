import React from 'react';
import { Link } from 'react-router-dom';
import './rightMenu.css';

export const RightMenu = () => {
  return (
    
    <div className="rightContainer">
      <div className='categories'>
        <span>
          <b>Categories</b>
        </span>
        <div className="rightCatList">
            <li className="rightCatItem">
                <Link className='link' to='/'>LIFE</Link>
            </li>
            <li className="rightCatItem" >
              <Link className='link' to='/settings'>MUSIC</Link>
            </li>
            <li className="rightCatItem">
              <Link className='link' to='/'>MOVIES</Link>
            </li>
            <li className="rightCatItem">
              <Link className='link' to='/write'>WORK</Link>
            </li>
            <li className="rightCatItem">
              <Link className='link' to='/write'>ADULTING</Link>
            </li>
            <li className="rightCatItem">
              <Link className='link' to='/write'>SCHOOL</Link>
            </li>
        </div>
      </div>     
    </div>
  )
}
