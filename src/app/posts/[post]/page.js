import React from 'react'
export const getSinglePost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}
export default async function SinglePost({params}) {
    const p = await params;
    const post = await getSinglePost(p.post);
  return (
    <div className='bg-gray-100 p-4  text-center'>
      <p className='my-4 font-semibold text-2xl'> Single Post : {post.id}</p>
      <div className="card bg-base-100 w-96 shadow-xl  mx-auto p-4 text-justify">
        <h1 className='font-bold text-center my-2 text-red-400'>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  )
}
