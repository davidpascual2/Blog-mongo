import React from 'react';
import { Link } from 'react-router-dom';
import './post.css'

export default function Post({post}) {
   {/* <img className='postImage' src='https://www.w3schools.com/css/img_mountains.jpg' alt=''
        /> */}

  const PF = 'http://localhost:3001/images/'

  return (
    
    <div className='post'>
      {post.photo && (
        <img 
          className='postImage' 
          src= {PF + post.photo} 
          alt=''
        />

      )}
      
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">
                  {post.categories.map((c)=>(
                  <span className="postCat">{c.name}</span>
                ))}</span>
            </div>
            <Link to={`/post/${post._id}`} className='link' >
            <span className="postTitle">{post.title}</span>

            </Link>
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>

        <p className='postDesc'>{post.desc}
        </p>
       
    </div>

  )
}
