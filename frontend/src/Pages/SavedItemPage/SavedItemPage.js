import React, { useState } from 'react'
import styles from './SavedItemPage.module.css'
import MyAlbumCard from './MyAlbumCard'
import RenameModal from './RenameModal'
export default function SavedItemPage() {
  const [isEdited,setIsEdited] = useState(false)
  const [showRenamePopUp,setShowRenamePopup] = useState(false)
  return (
    <div className ={styles.SaveContainer}>
     { showRenamePopUp && <RenameModal setShowRenamePopup = {setShowRenamePopup}/>}
    <div className ={styles.SaveHeader}>
        <div>Wishlist
            </div>
    </div>
    <div className ={styles.mainHeadline}>
        <div style= {{fontWeight: 'bold',fontSize:'35px'}}>Save & Share.</div>
        <div>Lưu lại mẫu mà bạn ưng ý để cân nhắc. Chia sẻ Wishlist cho bạn bè, gia đình sẽ giúp bạn có được sự lựa chọn phù hợp</div>
    </div>
    <div className ={styles.Album}>
    <div className ={styles.AlbumHeader}>
      <div style ={{flex:'1 0 0',textAlign:'left', fontSize:'20px'}}>My Album</div>
      <div style ={{cursor: 'pointer'}} onClick={()=>setIsEdited(prev => !prev)}>{ isEdited? 'Hoàn tất' : 'Chỉnh Sửa'}</div>
      </div>
      <div className = {styles.AlbumList}>
        <div className = {styles.AlbumRow}>
      <MyAlbumCard  setShowRenamePopup ={setShowRenamePopup} isEdited = {isEdited} style={{marginRight:'10%'}} />
      <MyAlbumCard  setShowRenamePopup ={setShowRenamePopup} isEdited = {isEdited} />
      </div>
      </div>
    </div>
    </div>
  )
}
