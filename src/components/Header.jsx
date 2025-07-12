import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
    <div className='w-full flex justify-evenly border shadow-md py-4 fixed bg-white top-0 '>
     <div className='flex '>
        <h1 className='text-3xl font-bold uppercase'>Codehelp Blogs</h1>
         
         <div className='gap-x-4 ml-60 flex '>
          <NavLink
          to="/"
          className='rounded-md border-2 px-4 py-1 gap-2.5'
          >Home</NavLink>
        </div>
        </div>
   
    </div>
  )
}

export default Header
