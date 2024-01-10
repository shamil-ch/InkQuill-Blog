import React from 'react';
import styles from './blog.module.css'
import PostCard from '@/components/postCard/postCard';
// import { getPosts } from '@/lib/data';

  // Fetch data with an API
  const getData  = async () => {
    const res = await fetch("http://localhost:3000/api/blog")
    if(!res.ok) {
      throw new Error("Somthing went wrong")
    }
    return res.json()
  }

 

 export const metadata = {
  title: 'Blog',
  description: 'Blog Page',
}


const blog = async () => {

  // Fetch data with an API
  const posts = await getData();

    // Fetch data without an API
 // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
      <div className={styles.post} key={post.id}>
      <PostCard post={post}/>
      </div>
      ))}
    </div>
  )
}

export default blog