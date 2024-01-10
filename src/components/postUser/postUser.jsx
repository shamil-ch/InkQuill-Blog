import { getUser } from '@/lib/data'
import React from 'react'
import styles from './postUser.module.css'
import Image from 'next/image'


/* Fetch data with an API
const userName = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if(!res.ok) {
        throw new Error("Somthing went wrong")
       }
       return res.json()
}
*/


const PostUser =  async ({ userId }) => {

  // Fetch data with an api
    //const user = await userName(userId)

      // Fetch data without an api
      const user = await getUser(userId);


  return (
    <div className={styles.container}>
      <div className={styles.details}>
      <Image 
            src={user.img ? user.img : "/noavatar.png"} 
            alt="poto" 
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.det}>
          
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
        </div>
        </div>
    </div>
  )
}

export default PostUser