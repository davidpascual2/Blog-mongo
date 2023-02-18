import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching } = useContext(context); //?

  const handleSubmit = async (e)=>{
    e.preventDefault()
    dispatch({type: "LOGIN_START"});
    try{
      const res = await axios.post('/auth/login', {
        
      })
    }catch(err){

    }

  }

  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input className='loginInput' type='text' placeholder='enter your username...' ref={userRef}/>

            <label>Password</label>
            <input className='loginInput' type='password' placeholder='enter your password...' ref={passwordRef} />
            <button  type='submit' className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton"><Link className='link' to='/register'>Register</Link></button>
        

    </div>
  )
}
