import React from 'react'
import { CircularProgress } from '@mui/material'
import styles from './LoadingSpinner.module.css'
export default function LoadingSpinner({overlay,children,isLoading}) {
  return (
    <div style={{position:'relative',padding: '5px'}}>
    {children}
    {isLoading &&<div className ={styles.container} style ={overlay}>
       <div className ={styles.spinner} >
      <CircularProgress size={20}></CircularProgress>
        </div>
    </div>}
    </div>
  )
}
