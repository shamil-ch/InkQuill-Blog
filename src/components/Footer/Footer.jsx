import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>InkQuill</div>
      <div className={styles.text}>
        InkQuill Creative Thoughts Agency © All rights reserved.
      </div>

    </div>
  )
}

export default Footer