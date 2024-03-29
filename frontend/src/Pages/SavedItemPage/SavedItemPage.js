import React, { Fragment, useEffect, useState } from 'react'
import styles from './SavedItemPage.module.css'
import MyAlbumCard from './MyAlbumCard'
import RenameModal from './RenameModal'
import EmptyCard from '../../Components/EmptyCard/EmptyCard'
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner'
import HeaderNofify from '../../Components/MultipleNotify/HeaderNotify'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSavedAlbums } from '../../store/actions/savedAlbum'
import { useMediaQuery } from 'react-responsive'
import actionTypes from '../../store/actions/actionTypes'
export default function SavedItemPage() {
  const [isEdited,setIsEdited] = useState(false);
  const [selectedAlbum,setSelectedAlbum] = useState(null);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const {savedAlbums,action} = useSelector(state=>state.savedAlbum);
  const userInfo = useSelector(state=>state.user).userInfo;
  const dispatch = useDispatch();
  const getSavedAlbums = async()=>{
    userInfo?.id&&dispatch(fetchSavedAlbums({account_id: userInfo.id}));
  }
  useEffect(()=>{
    console.log(savedAlbums);
  },[savedAlbums])
  useEffect(()=>{
    getSavedAlbums();
  },[userInfo])
  return (
    <div className ={styles.SaveContainer}>
      {action ==actionTypes.DELETE_SUCCESS &&<HeaderNofify msg="Xóa album thành công" style={{width: '100%'}}></HeaderNofify>}
     { selectedAlbum && <RenameModal  selectedAlbum ={selectedAlbum}  setSelectedAlbum ={setSelectedAlbum} />}
    <div className ={styles.SaveHeader}>
        <div>Wishlist
            </div>
    </div>
    <div className ={styles.mainHeadline} style ={{lineHeight:isTabletOrMobile?'1em':'1.5em'}}>
        <div style= {{fontWeight: 'bold',fontSize:isTabletOrMobile?'25px':'35px'}}>Save & Share.</div>
        <div style ={{fontSize: isTabletOrMobile?'18px':''}}>Lưu lại mẫu mà bạn ưng ý để cân nhắc. Chia sẻ Wishlist cho bạn bè, gia đình sẽ giúp bạn có được sự lựa chọn phù hợp</div>
    </div>
    <div className ={styles.Album}>
    <div className ={styles.AlbumHeader}>
      <div style ={{flex:'1 0 0',textAlign:'left', fontSize:'20px'}}>My Album</div>
      <div style ={{cursor: 'pointer'}} onClick={()=>setIsEdited(prev => !prev)}>{ isEdited? 'Hoàn tất' : 'Chỉnh Sửa'}</div>
      </div>

      <LoadingSpinner overlay={{backgroundColor:'white'}} isLoading ={action == actionTypes.DELETE}>
      <div className = {styles.AlbumList}>
    {savedAlbums.length == 0 && action == actionTypes.GET_ALL_SUCCESS && <EmptyCard msg = 'Không có album nào được tạo'></EmptyCard>}
    {
    !isTabletOrMobile&&savedAlbums&&Array.from(Array(Math.ceil(savedAlbums.length/2)).keys()).map(
      i =>{
      console.log('save album loop',savedAlbums,i);
      return <div className = {styles.AlbumRow}>
        <MyAlbumCard setSelectedAlbum={setSelectedAlbum} savedAlbum ={savedAlbums[i*2]} isEdited = {isEdited} style={{marginRight:'10%'}} />
        {(i*2+1)<=savedAlbums.length-1 && <MyAlbumCard setSelectedAlbum={setSelectedAlbum}  savedAlbum ={savedAlbums[i*2+1]} isEdited = {isEdited} />  }
        </div>}
    )
    }
    {
    isTabletOrMobile&&savedAlbums&&savedAlbums.map(
      (saveAlbum,i) =>{
      console.log('save album loop',savedAlbums,i);
      return <div className = {styles.AlbumRow}>
        <MyAlbumCard setSelectedAlbum={setSelectedAlbum} savedAlbum ={savedAlbums[i]} isEdited = {isEdited} style={{marginRight:isTabletOrMobile?'':'10%',width:isTabletOrMobile?'100%':'50%'}} />
        </div>}
    )
    }
      </div>
</LoadingSpinner>
    </div>
    </div>
  )
}
