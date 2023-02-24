import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../../context/Context';
import './sidebar.css'

export default function Sidebar() {
    const {user, dispatch} = useContext(Context);
    // const location = useLocation()
    // console.log(location)
    // const [post, setPost] = useState({});
    // const [title, setTitle] = useState("");
    // const [desc, setDesc ] = useState("");
    // const path = location.pathname.split('/')[4];// use two becase it is the third indexed item in path

    // useEffect(()=>{
    //     const getPost = async ()=>{
    //       const res = await axios.get('http://localhost:3001/api/posts');
    //       setPost(res.data)
    //     };
    //     getPost()
    //   }, []);
    //=================== GET CATEGORIES ===========================//
    // const [cats, setCats] = useState([]);
    // useEffect(()=>{
    //     const getCats = async () =>
    //     {
    //         const res = await axios.get('http://localhost:3001/api/categories')
    //         setCats(res.data)
    //     }
    //     getCats()
    // },[])

    //==============================================//

  return (
    // <div className='sidebar'>
    //     <div className="sidebarItem">
    //         <span className="sidebarTitle">ABOUT ME</span>
    //         <img src="https://www.w3schools.com/css/img_forest.jpg" alt='' />
    //         <p>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis similique est, voluptas consequatur quod quia iste quisquam cum laudantium ducimus! Illo dicta at sequi libero! Temporibus debitis voluptatum ut voluptatem.
    //         </p>

    //     </div>
    //     <div className="sidebarItem">
    //         <span className="sidebarTitle">CATEGORIES</span>
    //         <ul className="sidebarList">
    //             {cats.map((c)=>(
    //                 <Link to={`/?cat=${c.name}`} className='link'>
    //                     <li className="sidebarListItem">{c.name}</li>
    //                 </Link>
    //             ))}
    //         </ul>
    //     </div>

    //     <div className="sidebarItem">
    //         <span className="sidebarTitle">FOLLOW US</span>
    //         <div className="sidebarSocial">
    //             <i className="sidebarIcon fa-brands fa-linkedin"></i>
    //             <i className="sidebarIcon fa-brands fa-instagram"></i>
    //             <i className="sidebarIcon fa-brands fa-twitter"></i>
    //             <i className="sidebarIcon fa-brands fa-pinterest"></i>
    //         </div>

    //     </div>
    // </div>
    <div className="leftContainer">
        <ul className="leftList">
            <li className="leftListItem">
                <Link className='link' to='/'>
                    <i class="fa-solid fa-house-user"></i>
                    Home
                </Link>
            </li>
    
            <li className="leftListItem" >
                {
                    user ? (
                        
                        <Link to={`/?user=${user.username}`} className='link'>
                            <i className="sidebarIcon fa-regular fa-user"></i>
                            Profile
                        </Link>

                    ) : (
                        <Link to={`/login`} className='link'>
                            <i className="sidebarIcon fa-regular fa-user"></i>
                            Profile
                        </Link>
                    )
                }
            </li>
            <li className="leftListItem">
                {/* <i className="sidebarIcon fa-regular fa-bookmark"></i> */}
                
                <Link className='link' to=''> 
                    <i className="sidebarIcon fa-regular fa-bookmark"></i>
                    Bookmarks
                </Link>
            </li>
            {/* <li className="leftListItem">
                <Link className='link' to='/write'>Chirp</Link>
            </li> */}
            {/* <li class="leftListItem2"> 
                        {user ? (
                            <Link className='link' to='/write'>
                                <span className='chirpButton'>
                                    <b>Post</b>
                                </span>
                            </Link>
                        ) : (
                            <Link className='link' to='/login'>
                                <span className='chirpButton'>
                                    <b>Chirp</b>
                                </span> 
                            </Link>
                        )}
            </li> */}
            
        </ul>

        <div class="leftListItem2"> 
            {user ? (
                <Link className='link' to='/write'>
                    <span className='chirpButton'>
                        <b>Chirp</b>
                    </span>
                </Link>
            ) : (
                <Link className='link' to='/login'>
                    <span className='chirpButton'>
                        <b>Chirp</b>
                    </span> 
                </Link>
            )}
        </div>
                
    </div>
  )
}
