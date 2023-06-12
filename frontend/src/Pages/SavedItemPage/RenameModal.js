import React from 'react'
import styles from './RenameModal.module.css'
import CloseIcon from '../../assets/images/close-icon-black.png'
import Logo from '../../Components/Logo/Logo'
import { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { updateSavedAlbums,ResetError } from '../../store/actions/savedAlbum'
import { useMediaQuery } from 'react-responsive'
import Button from '../../Components/ClassicButton/Button'
import Modal from '../../Components/Modal/Modal'
import actionTypes from '../../store/actions/actionTypes'
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner'
export default function RenameModal({selectedAlbum,setSelectedAlbum}) {
  const dispatch = useDispatch();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const [inputText,setInputText] = useState(selectedAlbum.name);
  const {action}  = useSelector(state => state.savedAlbum);

  const updateSavedAlbumsName = async() =>{
    await dispatch(updateSavedAlbums({id:selectedAlbum.id, name:inputText}))
  }
  useEffect(()=>{
    if(action == actionTypes.UPDATE_SUCCESS){
      setSelectedAlbum(null);
    }
  },[action]);

  useEffect(()=>{
    return ()=>{dispatch(ResetError())}
  },[]);
  return (
    <Modal>
    <div className={styles.RenameModalContainer} style ={{width: isTabletOrMobile?'100%':'',height:isTabletOrMobile?'100%':''}}>
        <Logo src={CloseIcon} onClick = {()=> setSelectedAlbum(null)} style ={{width: '30px', position: 'absolute',top:'30px',left:'30px'}}></Logo>
       <LoadingSpinner overlay={{backgroundColor:'white'}} isLoading ={action == actionTypes.UPDATE}>
       <div className={styles.controls}>
        <div className={styles.albumName}>Tên Album</div>
        <input  className={styles.albumInput} value = {inputText} onChange ={(e)=>setInputText(e.target.value)} ></input>
        <Button  color ='black' style ={{margin:'20px auto',width: '200px'}} disabled ={!selectedAlbum.id}  label = 'Hoàn thành'  onClick ={updateSavedAlbumsName} />
        </div>
        </LoadingSpinner>
    </div>
    </Modal>
  )
}
