import React from 'react';
import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form action="" className="settingsForm">
                <label htmlFor="">Profile Picture</label>
                <div className="settingsPP">
                    <img 
                        src="https://www.w3schools.com/css/img_mountains.jpg" 
                        alt="" 
                    />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type='file' id='fileInput' style={{display:"none"}}/>
                </div>

                <label>Username</label>
                <input type='text' placeholder='David' />

                <label>Email</label>
                <input type='email' placeholder='david@gmail.com' />

                <label>Password</label>
                <input type='password'  />

                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar /> 
    </div>
  )
}
