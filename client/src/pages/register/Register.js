import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';

export default function Register() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false);
    try{
      const res = await axios.post('/api/auth/register', {
        username: username.toLowerCase(),
        email,
        password,
      });
      console.log(res)
      navigate('/login');
    } catch(err) {
      setError(true);
    }
  }
  
//============================================
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm" onSubmit={handleSubmit} >

            <input 
              className='registerInput' 
              type='text' 
              placeholder='enter a username...' 
              onChange={e=>setUsername(e.target.value)}
            />

            <input 
              className='registerInput' 
              type='text' placeholder='enter your email...' 
              onChange={e=>setEmail(e.target.value)}
            />

            <input 
              className='registerInput' 
              type='password' 
              placeholder='enter a password...'
              onChange={e=>setPassword(e.target.value)}
            />

            <button className="registerButton" type="submit">Register</button>
            {error && <span className='registerErr'>Something Went Wrong!</span>} 
            <span>Already have an account? <Link to='/login'>Login</Link></span>
        </form>
    </div>
  )
}
