import React from 'react';
import Post from '../post/Post';
import './posts.css'

export default function Posts({posts}) {

//============================================
  return (
    <div className='posts'>
      {posts.length === 0 ? (
        <p>No Chirps yet!</p>
      ) : (
        posts.map((p) => <Post post={p} />)
      )}
    </div>
  )
}
