import styles from './home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title }>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Are you passionate about sharing your thoughts, experiences, and stories with the world? Look no further! InkQuill is a user-friendly platform designed to empower individuals like you to create and publish compelling blogs effortlessly.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt='brands' fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt='hero' fill className={styles.heroImg}/>
      </div>
    </div>
  )
}
