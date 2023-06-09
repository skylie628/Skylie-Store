import React from 'react'
import styles from './NotFoundPage.module.css'
export default function NotFoundPage() {
  return (
    <div className={styles.container}>
    <div style ={{fontSize:'15vw',color: 'gray',margin:'50px auto'}}>404</div>
    <div style ={{fontSize:'20px'}}>Page not found</div>
    </div>
  )
}
