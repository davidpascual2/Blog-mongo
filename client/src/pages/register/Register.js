import React from 'react';
import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm">

            <label>Username</label>
            <input className='registerInput' type='text' placeholder='enter your username...' />

            <label>Email</label>
            <input className='registerInput' type='text' placeholder='enter your email...' />

            <label>Password</label>
            <input className='registerInput' type='password' placeholder='enter your password...' />
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">Login</button>

    </div>
  )
}
