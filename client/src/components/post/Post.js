import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { Context } from '../../context/Context';
import './post.css'

export default function Post({post}) {
  // const {user, dispatch} = useContext(Context);
  // const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc ] = useState("");
  const location = useLocation()
  const path = location.pathname.split('/')[2];// use two becase it is the third indexed item in path

  useEffect(()=>{
    const getPost = async ()=>{
      const res = await axios.get('http://localhost:3001/api/posts/' + path);
      // setPost(res.data);
      setTitle(res.data.title)
      setDesc(res.data.desc)
    };
    getPost()
  }, [path])

  const PF = 'http://localhost:3001/images/'

  return (
    
    // <div className='post'>
    //   {post.photo && (
    //     <img 
    //       className='postImage' 
    //       src= {PF + post.photo} 
    //       alt=''
    //     />

    //   )}
      
    //     <div className="postInfo">
    //         {/* <div className="postCats">
    //             <span className="postCat">
    //               {post.categories.map((c)=>(
    //               <span className="postCat">{c.name}</span>
    //             ))}</span>
    //         </div> */}

    //         <Link to={`/post/${post._id}`} className='link' >
    //           <span className="postTitle">
    //             {/* {post.title} */}
    //             {post.username}
    //           </span>
    //         </Link>
    //         {/* <hr /> */}
    //         <span className="postDate">
    //           {new Date(post.createdAt).toDateString()}
    //         </span>
    //     </div>

    //     <p className='postDesc'>{post.desc}
    //     </p>
       
    // </div>



    <div className='postContainer'>
      {/* {post.photo && (
        <img 
          className='postImage' 
          src= {PF + post.photo} 
          alt=''
        />
      )} */}
      
        {/* <div className="postInfo">
            <div className="postCats">
                <span className="postCat">
                  {post.categories.map((c)=>(
                  <span className="postCat">
                    {c.name}
                  </span>
                  ))}
                </span>
            </div>
        </div> */}

            <Link to={`/post/${post._id}`} className='link' >
              <div className='post'>
                <div className="postInfo">
                  <Link to={`/?user=${post.username}`} className='link'> 
                  <span className="postUsername">
                    {post.username}
                  </span>
                  </Link>
                  
                  <span className="postDate">
                    {new Date(post.createdAt).toDateString()}
                  </span>
                </div>
                <p className='postDesc'>
                  {post.desc}
                </p>
              </div>
            </Link>
       
    </div>

  )
}
