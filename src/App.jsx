import { useEffect, useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import { useContext } from 'react'
import { AppContext } from './context/AppContext'

function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  // console.log(fetchBlogPosts);


  useEffect(() =>{
    fetchBlogPosts();
  },[]);

  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center item-center' >
      
      <Header/>
      <Blogs/>
      <Pagination/>

    </div>
  );
}

export default App
