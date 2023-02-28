import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../../context/Context';
import './singlePost.css'

export default function SinglePost() {

  const apiUrl = 'https://chirp.herokuapp.com';

  const location = useLocation()
  const path = location.pathname.split('/')[2];// use two becase it is the third indexed item in path
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const [desc, setDesc ] = useState("");
  const [updateMode, setUpdateMode] = useState(false)

  useEffect(()=>{
    const getPost = async ()=>{
      const res = await axios.get(`${apiUrl}/api/posts/` + path);
      setPost(res.data);
      setDesc(res.data.desc)
      console.log(res)
    };
    getPost()
  }, [path])

  const handleDelete = async () => {
    try {
      await axios.delete(`${apiUrl}/api/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3001/api/posts/${post._id}`, 
        { username: user.username, 
          desc,
        });
      setUpdateMode(false) // window.location.reload();
    } catch (err) {}
  }
  
//============================================
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
          <h1 className="singlePostTitle"> 
            {post.username === user?.username && (
              <div className="singlePostEdit">
                  <i className=" singlePostIcon fa-solid fa-pen-to-square" onClick={() =>setUpdateMode(true)}></i>
                  <i className=" singlePostIcon fa-solid fa-trash" onClick={ handleDelete }></i>
              </div>
            )}
          </h1>
            
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
               <Link className='link' to={`/?user=${post.username}`}>
                <b> {post.username}</b>
               </Link>
            </span>
            <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
          </div>

          {updateMode ? ( 
            <textarea 
              className='singlePostDescInput' 
              value={desc} 
              onChange={(e) => setDesc(e.target.value)} 
              autoFocus={true}
            /> 
            ) : (
              <p className='singlePostDesc'>{desc}</p>
            )}
            {updateMode && (
            <button className="singlePostButton" onClick={ handleUpdate } >
              Update
            </button>
            )}
        </div>
    </div>
  )
}
