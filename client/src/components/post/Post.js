import React from 'react';
import { Link } from 'react-router-dom';
import './post.css'

export default function Post({post}) {

  //============================================
  return (
    <div className='postContainer'>
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
