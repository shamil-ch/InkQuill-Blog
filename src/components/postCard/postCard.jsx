import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './postCard.module.css'

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
           <div className={styles.imageContainer}>
            <Image src={post.img} alt="post" fill className={styles.img} />
            </div> 
            <span className={styles.date}>{post.createdAt.toString().slice(4,16)}</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>
               {post.title}
            </h1>
            <p className={styles.desc}>
                {post.body}
            </p>
            <Link href={`/blog/${post.slug}`} 
            className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default PostCard