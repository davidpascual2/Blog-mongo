import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';
import './login.css';

export default function Login() {

  const [loginError, setloginError] = useState(false); //can context handle this? (user error)
  const navigate = useNavigate()
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching, error} = useContext(Context); 

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setloginError(false)
    dispatch({ type:"LOGIN_START"});
    try{
      const res = await axios.post('http://localhost:3001/api/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(user)
      dispatch({ type:"LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    }catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setloginError(true)
    }
  };

//============================================
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm" onSubmit={ handleSubmit }>
            <input 
              className='loginInput' 
              type='text' 
              placeholder='username...' 
              ref={userRef}
            />

            <input 
              className='loginInput' 
              type='password' 
              placeholder='password...' 
              ref={passwordRef} 
            />
            <button  type='submit' className="loginButton" disabled={isFetching}>
              Login
            </button>
            {loginError && <span className='registerErr'>Something Went Wrong!</span>}
            <span>Dont have an account? <Link to='/register'>Register</Link></span>
        </form>
    </div>
  )
}
