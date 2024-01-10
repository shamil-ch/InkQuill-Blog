import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'

export const metadata = {
  title: 'About',
  description: "About page",
}

const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We Create digital ideas that are bigger, bolder, braver and better</h1>
        <p className={styles.desc}>
          We belive in good ideas flexibility and precission we're world's our special team best consulting and finance solution provider.wide range of web and software development services
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10</h1>
            <p>year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 k</h1>
            <p>Customers</p>
          </div>
          <div className={styles.box}>
            <h1>10 M</h1>
            <p>No. of users</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/about.png" alt='about' fill className={styles.img}/>
      </div>
    </div>
  )
}

export default about