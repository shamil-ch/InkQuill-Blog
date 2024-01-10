"use client"

import React from 'react'
import styles from './registerForm.module.css'
import { register } from '@/lib/action'
import { useFormState } from "react-dom"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'


const RegisterForm = () => {
    const [state, formAction] = useFormState(register, undefined)

    const router = useRouter();

    useEffect(() => {
    state?.success && router.push("/login")
    }, [state?.success, router])

  return (
    <form className={styles.form} action={formAction}>
            <input type="text" placeholder="username" name="username" />
            <input type="email" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <input type="password" placeholder="re-password" name="passwordRepeat" />
            <button>Register</button>
            {state?.error}
            <Link href="/login">have an account? <b> Login </b> </Link>
        </form>
  )
}

export default RegisterForm