import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function Home() {

  const [posts, setPosts] = useState([]);
  const {search} = useLocation(); //take search property from console

  

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/posts' + search);
        // console.log(res)
        setPosts(res.data); // update posts state with fetched data
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [search]); // fire useEffect once page opens

  return (
    <div>

      <Header />
      <div className='home'>
        <Posts posts={posts}/>
        {/* <Sidebar /> */}
        
      </div>

    </div>
     
  )
}
