import React, { Suspense } from 'react'
import AdminPosts from '@/components/adminPosts/adminPosts'
import AdminPostForum from '@/components/adminPostForum/adminPostForum'
import AdminUsers from '@/components/adminUsers/adminUsers'
import AdminUserForum from '@/components/adminuserForum/adminUserForum'
import styles from './admin.module.css'
import { auth } from '@/lib/auth'

const Admin = async () => {

  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.row}>
      <div className={styles.col}>
        <Suspense fallback={<div>Loading...</div>}>
          <AdminPosts />
        </Suspense>
      </div>
      <div className={styles.col}>
          <AdminPostForum userId = {session.user.id}/>
      </div>
      </div>

      <div className={styles.row}>
      <div className={styles.col}>
        <Suspense fallback={<div>Loading...</div>}>
          <AdminUsers />
        </Suspense>
      </div>
      <div className={styles.col}>
          <AdminUserForum />
      </div>
      </div>

    </div>
  )
}

export default Admin