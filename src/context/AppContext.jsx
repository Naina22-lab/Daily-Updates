import  React, { children,createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


// creating appcontext 
export const AppContext = createContext();

export default function AppContextProvider({children}){
  
      const [loading,setLoading] =useState(false);
      const[posts, setPosts] = useState([]);
      const[page, setPage] =useState(1);
      const[totalPages, setTotalPages]=useState(null)

  async function fetchBlogPosts(page=1){
   setLoading(true);
    let url=`${baseUrl}?page=${page}`;
   try{
       const result = await fetch(url);
       const data= await result.json();
      //  console.log(data);
       setPage(data.page);
       setPosts(data.posts);
       setTotalPages(data.totalPages)
   }
   catch(error){
      setPage(1);
      setPosts([]);
      setTotalPages(null);
   }
   setLoading(false);
}


function handlePageChange(page){
    setPage(page);
    fetchBlogPosts(page);
}

      const value={
        loading,
        setLoading,
        posts ,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchBlogPosts,
      };


      return <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
}