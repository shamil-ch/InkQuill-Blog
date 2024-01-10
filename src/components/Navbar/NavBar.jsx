import React from 'react'
import Links from './links/links'
import styles from './navbar.module.css'
import Link from 'next/link'
import { auth } from '@/lib/auth'

const NavBar = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/" passHref className={styles.logo} Link>
        InkQuill
      </Link>

      <div>
       <Links session={session}/>
      </div>

    </div>
  )
}

export default NavBar