import { useState } from 'react'
import {baseUrl} from '../baseUrl';
import AppContext  from './AppContext'; 
import {useNavigate} from 'react-router-dom'



export default function AppContextProvider({children}){
    const [loading, setLoading]=useState(false)
    const [posts, setPosts]=useState([])
    const [page, setPage]=useState(1)
    const [totalPage, setTotalPage]=useState(null)
    const navigate=useNavigate();

    const fetchBlogPosts =async (page = 1, tag=null,category) => {
        setLoading(true);
        let url=`${baseUrl}?page=${page}`;
        if(tag) {
            url+=`&tag=${tag}`;
        }
        if(category) {
            url+=`&category=${category}`;
        }
        try {
            const result=await fetch(url)
            const data= await result.json()
              if(!data.posts || data.posts.length ===0)
                throw new Error("Something went  wrong");
             setPage(data.page)
             setPosts(data.posts)
             setTotalPage(data.totalPages)
        } catch (error) {
            console.log("Error in fetching Data")
            setPage(1)
            setPosts([])
            setTotalPage(null)
        }
        setLoading(false);
    }

    const handlePageChange=(page) =>{
        navigate({search: `?page=${page}`});
        setPage(page)
       
    }


    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPage,
        setTotalPage,
        fetchBlogPosts,
        handlePageChange,
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}