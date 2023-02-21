import React, { useContext, useState } from 'react';
import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Settings() {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false)

    const {user, dispatch} = useContext(Context);
    const PF = 'http://localhost:3001/images/'

    const handleSubmit =  async (e) => {
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const updatedUser = {
            userId: user._id,
            username, 
            email, 
            password,

        };
        // if (file){
        //     const data =new FormData();
        //     const filename= Date.now() + file.name; //prevents something with images with same name
        //     data.append('name', filename);
        //     data.append('file', file);
        //     updatedUser.profilePic = filename;
        //     try{
        //         await axios.post('http://localhost:3001/api/upload', data);
        //     } catch (err){
        //         console.log(err)
        //         //write user error
        //     }
        // }
        try {
            const res = await axios.put('http://localhost:3001/api/users/'+user._id, updatedUser);
            setSuccess(true);
            dispatch({type:"UPDATE_SUCCESS", payload: res.data })
        } catch (err) {
            console.log(err)
            dispatch({ type: "UPDATE_FAILURE"})
        }
    }

    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm" onSubmit={ handleSubmit }>
                    {/* <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img 
                            src={file ? URL.createObjectURL(file) : PF+user.profilePic}
                            alt="" 
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input 
                            type='file' 
                            id='fileInput' 
                            style={{display:"none"}}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div> */}

                    <label>Username</label>
                    <input type='text' placeholder={user.username} onChange={e=>setUsername(e.target.value)} />

                    <label>Email</label>
                    <input type='email' placeholder={user.email} onChange={e=>setEmail(e.target.value)} />

                    <label>Password</label>
                    <input type='password' onChange={e=>setPassword(e.target.value)} />

                    <button className="settingsSubmit" type='submit'>Update</button>
                    {success && <span className='success'>Profile has been updated!</span>}
                </form>
            </div>
            <Sidebar /> 
        </div>
    )
}
