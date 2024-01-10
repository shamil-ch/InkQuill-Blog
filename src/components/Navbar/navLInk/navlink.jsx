"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import styles from './navlink.module.css'
import Link from 'next/link'

const Navlink = ({ item }) => {

    const pathName = usePathname();
    
  return (
        <Link 
            href={item.path} 
            className={`${styles.container} ${pathName === item.path && styles.active}`}
            >
                {item.title}
        </Link>
  )
}

export default Navlink