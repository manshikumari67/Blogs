import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='w-full h-full max-w-[670px] flex flex-col ml-[600px]  justify-center items-center'>
      <NavLink to={`/blog/${post.id}`}>
        <span className='font-bold text-lg'>{post.title}</span>
      </NavLink>
      <p className='text-sm mt-[4px] '>
        By
        <span className='italic pl-1 pr-1'>
            {post.author}
        </span>
        on{""}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='underline font-bold pl-2 text-red-900'>{post.category}</span>
        </NavLink>
      </p>
       <p className='text-sm mt-[4px]'>Posts on {post.date}</p>
      <p className='text-md mt-[4px]'>{post.content}</p>
      <div  className='flex gap-x-3 flex-wrap'>
        {post.tags.map((tag,index) =>(
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
            <span  className='text-blue-700 underline font-bold text-xs mt-[5px]'>{`#${tag}`}</span>
          </NavLink>  
        ))}
      </div>
    </div>
  )
}

export default BlogDetails
