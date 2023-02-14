import React from 'react';
import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <img 
            className='writeImg' 
            src="https://www.w3schools.com/css/img_5terre.jpg" 
            alt="" 
        />
        
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor='fileInput'>
                    <i className=" writeIcon fa-solid fa-plus"></i>
                </label>
                <input type='file' id='fileInput' style={{display:"none"}}/>
                <input type='text' placeholder='Title'id='fileInput' className='writeInput' autoFocus={true}/>

            </div>
            <div className="writeFormGroup">
                <textarea 
                    placeholder='tell your story' 
                    type='text' 
                    className='writeInput writeText'>
                </textarea>
            </div>
            <button className="writeSubmit">Publish</button>

        </form>
    </div>
  )
}
