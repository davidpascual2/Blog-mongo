import React from 'react';
import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <form action="" className="loginForm">
            <label>Email</label>
            <input type='text' placeholder='enter your email' />

            <label>Password</label>
            <input type='password' placeholder='enter your password' />
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">Register</button>

    </div>
  )
}
