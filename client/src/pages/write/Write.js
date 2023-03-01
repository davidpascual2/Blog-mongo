import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import './write.css'

export default function Write() {

    const [desc, setDesc] = useState("");
    const { user } = useContext(Context);
    const handleSubmit =  async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            desc,

        };
        try {
            
            const res = await axios.post('/api/posts', newPost);
            window.location.replace('http://localhost:3000/post/' + res.data._id); //CHANGES WINDOW LOCATION ON CLIENT SIDE (PORT!!!)
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

//=============================================
  return (
    <div className='write'>
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
            </div>

            <div className="writeFormGroup">
                <textarea 
                    autoFocus={true}
                    placeholder='tell your story...' 
                    type='text' 
                    className='writeInput writeText'
                    onChange={e=>setDesc(e.target.value)}
                >
                </textarea>
            </div>
            <button className="writeSubmit" type='submit'>Publish</button>
        </form>
    </div>
  )
}
