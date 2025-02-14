import Link from 'next/link';
import React from 'react'
const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return posts;
}
export default async function Posts() {
    const posts = await getPosts();
    return (
        <div className='bg-gray-100 p-4'>
            <h1 className='text-2xl text-center font-bold text-orange-600'>Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                {posts.map(post => (
                    <div key={post.id} className="card bg-base-100 w-96 shadow-xl  mx-auto">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.body}</p>
                            <button className="btn btn-secondary"><Link href={`/posts/${post.id}`}>Read More</Link></button>
                        </div>
                    </div>))}
            </div>
        </div>
    )
}
