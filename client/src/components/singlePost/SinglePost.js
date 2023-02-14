import React from 'react'
import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
          <img  className='singlePostImg' src="https://www.w3schools.com/css/img_lights.jpg" alt="" />

          <h1 className="singlePostTitle"> 
            Lorem ipsum, dolor sit amet.
            <div className="singlePostEdit">
              <i className=" singlePostIcon fa-solid fa-pen-to-square"></i>
              <i className=" singlePostIcon fa-solid fa-trash"></i>
            </div>
          </h1>

          <div className="singlePostInfo">
            <span className="singlePostAuthor"> Author: <b>David</b></span>
            <span className="singlePostDate">1 hour ago</span>
          </div>
            <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt natus, similique excepturi quo vel obcaecati dolore laudantium.
              Harum dicta quis sed laborum earum, impedit cupiditate labore? Sapiente, soluta? Laborum, veritatis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt natus, similique excepturi quo vel obcaecati dolore laudantium. 
              Harum dicta quis sed laborum earum, impedit cupiditate labore? Sapiente, soluta? Laborum, veritatis?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt natus, similique excepturi quo vel obcaecati dolore laudantium.
                Harum dicta quis sed laborum earum, impedit cupiditate labore? Sapiente, soluta? Laborum, veritatis? 
            </p>
        </div>
    </div>
  )
}
