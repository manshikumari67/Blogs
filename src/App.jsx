import './App.css'
import { useContext, useEffect } from 'react'
import  AppContext  from './context/AppContext'
import { Route ,Routes, useLocation} from 'react-router-dom'
import Home from './Pages/Home'
import BlogPage from './Pages/BlogPage'
import TagPage from './Pages/TagPage'
import CategoryPage from './Pages/CategoryPage'
import { useSearchParams } from 'react-router-dom'



export default function App(){
  const {fetchBlogPosts}=useContext(AppContext);

  const[searchParams, setSearchParams]=useSearchParams();
  const location=useLocation();

  useEffect(() =>{
   const page= searchParams.get("page") ?? 1;

   if(location.pathname.includes("tags")) {
    const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
    fetchBlogPosts(Number(page),tag);
   }
   else if(location.pathname.includes("categories")){
     const category=location.pathname.split("/").at(-1).replaceAll("-"," ");
       fetchBlogPosts(Number(page),null,category);
   } 
   else{
    fetchBlogPosts(Number(page));
   }
  },[]);

 return (


  <Routes>

     <Route path='/' element={<Home/>}></Route>
     <Route path='/blog/:blogId' element={<BlogPage/>}></Route>
     <Route path='/tags/:tag' element={<TagPage/>}></Route>
     <Route path='/categories/:category' element={<CategoryPage/>}></Route>


  </Routes>
  //   <div className='w-full h-full flex flex-col gap-y-1  justify-center items-center'>
  //    <Header/>
  //    <Blogs/>
  //    <Pagination/>

  //   </div>
 )
}


