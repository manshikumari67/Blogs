import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className='w-11/12 h-full max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px] justify-center items-center'>
      {loading ? (
        <Spinner />
      ) : !Array.isArray(posts) || posts.length === 0 ? (
        <div>
          <p>No Posts Found</p>
        </div>
      ) : (
        posts.map((post) => (
          // <div key={post.id}>
          //   <p className='font-bold text-lg'>{post.title}</p>
          //   <p className='text-sm mt-[4px]'>
          //     By <span className='italic'>{post.author}</span> on{' '}
          //     <span className='underline font-bold'>{post.category}</span>
          //   </p>
          //   <p className='text-sm mt-[4px]'>Posts on {post.date}</p>
          //   <p className='text-md mt-[4px]'>{post.content}</p>

          //   <div className='flex gap-x-3 flex-wrap'>
          //     {Array.isArray(post.tags) &&
          //       post.tags.map((tag, index) => (
          //         <span
          //           key={index}
          //           className='text-blue-700 underline font-bold text-xs mt-[5px]'
          //         >{`#${tag}`}</span>
          //       ))}
          //   </div>
          // </div>
          <BlogDetails key={post.id} post={post}/>
        ))
      )}
    </div>
  );
};

export default Blogs;
