import React from 'react'
import styles from './RenameModal.module.css'
import CloseIcon from '../../assets/images/close-icon-black.png'
import Logo from '../../Components/Logo/Logo'
export default function RenameModal({setShowRenamePopup}) {
  return (
    <div className={styles.RenameModalContainer}>
        <Logo src={CloseIcon} onClick = {()=> setShowRenamePopup(prev=> !prev)} style ={{width: '30px', position: 'absolute',top:'30px',left:'30px'}}></Logo>
       <div className={styles.controls}>
        <div className={styles.albumName}>Tên Album</div>
        <input  className={styles.albumInput}></input>
        <div><div className={styles.editBtn}>Hoàn thành</div></div>
        </div>
    </div>
  )
}
