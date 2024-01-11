import Image from 'next/image'
import React from 'react'
import styles from './singlePost.module.css'
import PostUser from '@/components/postUser/postUser'
import { getPost } from '@/lib/data'
// import PostImages from '@/components/postimages/PostImages'

// Fetch data with an API
/* const getData  = async (slug) => {
  const res = await fetch(`https://ink-quill-blog.vercel.app/api/blog/${slug}`)
  if(!res.ok) {
   throw new Error("Somthing went wrong")
  }
  return res.json()
} */


export const generateMetadata = async ({params}) => {
  const {slug} = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  }

}

const SinglePost = async ({ params }) => {

  const {slug} = params;

  // Fetch data with an api
  // const post = await getData(slug)

    // Fetch data without an api
    const post = await getPost(slug);

  return (
    <div className={styles.container}>
         
     {post.img && ( 
      <div className={styles.imageContainer}>
        <Image 
          src={post.img}
          alt="post" 
          fill 
          className={styles.img} 
        />
      </div>
      )}
     
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          {post.title}
        </h1>
        <div className={styles.details}> 
         <PostUser userId = {post.userId}/>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>published</span>
            <span className={styles.detailvalue}>{post.createdAt.toString().slice(4,16)}</span>
          </div>
        </div>
        <div className={styles.conent}>{post.desc}</div>
      </div>
    </div>
  )
}

export default SinglePost
