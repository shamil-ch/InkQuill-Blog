import React from 'react'
import styles from './postImages.module.css'
import Image from 'next/image'

const getImages = async (userId) => {
    const res = await fetch (`https://jsonplaceholder.typicode.com/photos/${userId}`)
    if(!res.ok) {
        throw new Error("Images can't be fetched:")
  }
    return res.json()
}

const PostImages = async ({ userId }) => {

    const photo = await getImages(userId);

  return (
    <div className={styles.container}>
    <Image 
      src={photo.url} 
      alt="post" 
      fill 
      className={styles.img} 
    />
  </div>
  )
}

export default PostImages