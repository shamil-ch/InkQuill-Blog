"use client"

import React from 'react'
import styles from './adminPostForum.module.css'
import { useFormState } from "react-dom"
import { addPost } from '@/lib/action'

const AdminPostForum = ({ userId }) => {

  const [state, formAction] = useFormState(addPost,undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add new Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder='title' />
      <input type="text" name="slug" placeholder='slug' />
      <input type="text" name="img" placeholder='img' />
      <textarea type="text" name="desc" placeholder='desc' />
      <button>Add </button>
      {state?.error}
    </form>
  )
}

export default AdminPostForum