// import { signIn } from '@/lib/auth'
import React from 'react'
import { handleGithubLogin } from '@/lib/action'
import LoginForm from '@/components/loginForm/loginForm'
import styles from './login.module.css'

const loginPage = async () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <form action={handleGithubLogin}>
  
      <button className={styles.github}>Login with github</button>
      </form>
      <LoginForm />
      </div>
    </div>
  )
}

export default loginPage