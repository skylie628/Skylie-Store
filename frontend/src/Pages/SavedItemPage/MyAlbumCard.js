import React, { useEffect } from 'react'
import styles from './MyAlbumCard.module.css'
import Logo from '../../Components/Logo/Logo'
import DeleteIcon from '../../assets/images/delete-icon.png'
import EditIcon from '../../assets/images/edit-icon-thin.png'
import RenameModal from './RenameModal'
import { deleteSavedAlbums } from '../../store/actions/savedAlbum'
import side1 from '../../assets/images/ProductImage/side-1.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
export default function MyAlbumCard({setSelectedAlbum,savedAlbum,isEdited,style}) {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleDelete = async() =>{
    dispatch(deleteSavedAlbums({id: savedAlbum.id}))
  }
  return (
    <div className={styles.cardContainer} style ={{...style}}>
      <div className = {styles.cardWrapper} >
      <div className={styles.cardItem}>
      <img src={savedAlbum.savedProduct.length>=1? savedAlbum.savedProduct[0].product.option.straight_img_thumbnail :''} style={{width: '100%'}}></img>
      </div>
      <div className={styles.cardItem}>
      <img src={savedAlbum.savedProduct.length>=2? savedAlbum.savedProduct[1].product.option.straight_img_thumbnail : ''} style={{width: '100%'}}></img>
      </div>
      </div>
      <div className ={styles.albumInfo}>
      <div className={styles.collectionNameControl}>
        <div  style={{maxWidth:'70%'}} >{savedAlbum?.name}</div>
        <div>
        <Logo onClick = {()=>{setSelectedAlbum(savedAlbum);}} src={EditIcon}style={{width:'25px', visibility: isEdited? '': 'hidden'}}/>
        </div>
        </div>
      <div className={styles.collectionQuantity}><div>{savedAlbum.savedProduct.length} Mẫu</div></div>
      <div className={styles.collectionControlBtn}>
        <div className={styles.collectionMoreBtn} onClick = {()=>{navigate(`../saved/${savedAlbum.id}`)}} style={{visibility: isEdited?  'hidden' :''}} >Xem thêm </div>
        <Logo className={styles.collectionDeleteBtn} onClick={handleDelete}  src={DeleteIcon} style ={{width: '25px',visibility: isEdited?  '' :'hidden'}}></Logo>
        </div>
      </div>
    </div>
    
  )
}
