import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';
import './login.css';

export default function Login() {

  const navigate = useNavigate()
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching, error} = useContext(Context); //?

  const handleSubmit = async (e)=>{
    e.preventDefault();
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
    }
  };
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm" onSubmit={ handleSubmit }>
            <label>Username</label>
            <input 
              className='loginInput' 
              type='text' 
              placeholder='enter your username...' 
              ref={userRef}
            />

            <label>Password</label>
            <input 
              className='loginInput' 
              type='password' 
              placeholder='enter your password...' 
              ref={passwordRef} 
            />
            <button  type='submit' className="loginButton" disabled={isFetching}>
              Login
            </button>
        </form>
        <button className="loginRegisterButton">
          <Link className='link' to='/register'>Register</Link>
        </button>
        

    </div>
  )
}

//========================================

// export default function Login() {
//   const userRef = useRef();
//   const passwordRef = useRef();
//   const { dispatch, isFetching } = useContext(Context);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "LOGIN_START" });
//     try {
//       const res = await axios.post("http://localhost:3001/api/auth/login", {
//         username: userRef.current.value,
//         password: passwordRef.current.value,
//       });
//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//     } catch (err) {
//       dispatch({ type: "LOGIN_FAILURE" });
//     }
//   };

//   return (
//     <div className="login">
//       <span className="loginTitle">Login</span>
//       <form className="loginForm" onSubmit={handleSubmit}>
//         <label>Username</label>
//         <input
//           type="text"
//           className="loginInput"
//           placeholder="Enter your username..."
//           ref={userRef}
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           className="loginInput"
//           placeholder="Enter your password..."
//           ref={passwordRef}
//         />
//         <button className="loginButton" type="submit" disabled={isFetching}>
//           Login
//         </button>
//       </form>
//       <button className="loginRegisterButton">
//         <Link className="link" to="/register">
//           Register
//         </Link>
//       </button>
//     </div>
//   );
// }
