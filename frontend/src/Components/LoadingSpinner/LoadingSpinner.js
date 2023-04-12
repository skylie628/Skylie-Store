import React from 'react'
import { CircularProgress } from '@mui/material'
import styles from './LoadingSpinner.module.css'
export default function LoadingSpinner({overlay}) {
  return (
    <div className ={styles.container} style ={overlay}>
        <CircularProgress></CircularProgress>
    </div>
  )
}
