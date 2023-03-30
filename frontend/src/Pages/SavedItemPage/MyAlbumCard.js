import React from 'react'
import styles from './MyAlbumCard.module.css'
import Logo from '../../Components/Logo/Logo'
import DeleteIcon from '../../assets/images/delete-icon.png'
import EditIcon from '../../assets/images/edit-icon-thin.png'
import RenameModal from './RenameModal'
import side1 from '../../assets/images/ProductImage/side-1.png'
import { useNavigate } from 'react-router-dom'
export default function MyAlbumCard({id,setShowRenamePopup,isEdited,style}) {
  const navigate = useNavigate()
  return (
    <div className={styles.cardContainer} style ={{...style}}>
      <div className = {styles.cardWrapper} >
      <div className={styles.cardItem}>
      <img src={side1} style={{width: '100%'}}></img>
      </div>
      <div className={styles.cardItem}>
      <img src={side1} style={{width: '100%'}}></img>
      </div>
      </div>
      <div className ={styles.albumInfo}>
      <div className={styles.collectionNameControl}>
        <div  style={{maxWidth:'70%'}} >Unique Collection</div>
        <div>
        <Logo onClick = {()=>setShowRenamePopup(prev=>!prev)} src={EditIcon}style={{width:'25px', visibility: isEdited? '': 'hidden'}}/>
        </div>
        </div>
      <div className={styles.collectionQuantity}><div>6 mẫu</div></div>
      <div className={styles.collectionControlBtn}>
        <div className={styles.collectionMoreBtn} onClick = {()=>{navigate('../saved/1')}} style={{visibility: isEdited?  'hidden' :''}} >Xem thêm </div>
        <Logo className={styles.collectionDeleteBtn}   src={DeleteIcon} style ={{width: '25px',visibility: isEdited?  '' :'hidden'}}></Logo>
        </div>
      </div>
    </div>
    
  )
}
