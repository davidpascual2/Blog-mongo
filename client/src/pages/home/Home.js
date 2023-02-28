import React, { useEffect, useState } from 'react';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { RightMenu } from '../../components/rightMenu/RightMenu';

export default function Home() {

  const apiUrl = 'https://chirp.herokuapp.com';

  const [posts, setPosts] = useState([]);
  const {search} = useLocation(); //take search property from console

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/posts` + search);
        setPosts(res.data); // update posts state with fetched data
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [search]); // fire useEffect once page opens

//============================================
  return (
    <div>
      <div className='home'>
        <Sidebar className='homeLeft'/>
        <Posts posts={posts} className='homeCenter'/>
        <RightMenu className='homeRight'/>
      </div>
    </div>
     
  )
}
