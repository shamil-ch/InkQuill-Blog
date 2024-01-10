import Image from 'next/image'
import React from 'react'
import styles from './contact.module.css'

export const metadata = {
  title: 'contact',
  description: 'Contact Page',
}

const contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/contact.png" alt="contact" fill className={styles.img}/> 
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
          <textarea name='' id='' cols="30" rows="10" placeholder='Message'/>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default contact