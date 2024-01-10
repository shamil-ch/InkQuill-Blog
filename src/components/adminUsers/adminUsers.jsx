import { deleteUser } from '@/lib/action';
import { getUsers } from '@/lib/data'
import Image from 'next/image';
import React from 'react'
import styles from './adminUsers.module.css'

const AdminUsers = async () => {

  const users = await getUsers();
  return (
       <div className={styles.container}>
      <h1>users</h1>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image src={user.img || "/noavatar.png"} alt="avatar" width={50} height={50}/>
            <span className={styles.postTitle}>{user.username}</span>
          </div>
          <form action={deleteUser}>
             <input type="hidden" name='id' value={user.id} /> 
            <button className={styles.userButton}>Delete</button>
          </form>
          </div>
      ))}
    </div>
  )
}

export default AdminUsers