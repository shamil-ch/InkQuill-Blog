"use client"

import React from 'react'
import styles from './adminUserForum.module.css'
import { useFormState } from "react-dom"
import { addUser } from '@/lib/action'

const AdminaddUserForum = () => {

  const [state, formAction] = useFormState(addUser,undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add new User</h1>
      <input type="text" name="username" placeholder='username' />
      <input type="text" name="email" placeholder='email' />
      <input type="text" name="password" placeholder='password' />
      <input type="text" name="img" placeholder='img' />
      <select name="isAdmin">
      <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">yes</option>
      </select>
      <button>Add </button>
      {state?.error}
    </form>
  )
}

export default AdminaddUserForum