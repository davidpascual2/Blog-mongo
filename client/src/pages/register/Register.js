import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css'

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false);
    try{
      const res = await axios.post('http://localhost:3001/api/auth/register', {
        username: username,
        email: email,
        password: password,
      });
      res.data && window.location.replace('/login') //can navigate be used here?
    }catch(err){
      setError(true);
    }


  }

  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm" onSubmit={handleSubmit} >

            <label>Username</label>
            <input className='registerInput' type='text' placeholder='enter your username...' onChange={e=>setUsername(e.target.value)}
            />

            <label>Email</label>
            <input className='registerInput' type='text' placeholder='enter your email...' onChange={e=>setEmail(e.target.value)}/>

            <label>Password</label>
            <input className='registerInput' type='password' placeholder='enter your password...'onChange={e=>setPassword(e.target.value)}/>
            <button className="registerButton" type="submit">Register</button>
        </form>
        <button className="registerLoginButton">
          <Link className='link' to='/login'>Login</Link>
        </button>
        {error && <span className='registerErr'>Something Went Wrong!</span>} 

    </div>
  )
}
