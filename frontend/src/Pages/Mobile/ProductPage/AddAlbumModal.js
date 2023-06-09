import React from 'react'
import styles from './AddAlbumModal.module.css'
import CloseIcon from '../../../assets/images/close-icon-black.png'
import Logo from '../../../Components/Logo/Logo'
import { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {addSavedAlbums,ResetError } from '../../../store/actions/savedAlbum'
import actionTypes from '../../../store/actions/actionTypes'
import Modal from '../../../Components/Modal/Modal'
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner'
export default function AddAlbumModal({setStateAddAlbumModal,setStateSavedProductModal}) {
  const dispatch = useDispatch();
  const [inputText,setInputText] = useState('');
  const {action}  = useSelector(state => state.savedAlbum);
  const userInfo = useSelector(state=>state.user).userInfo;
  const addAlbum = async() =>{
    await dispatch(addSavedAlbums({ account_id: userInfo.id,name:inputText}))
  }
 useEffect(()=>{
  if(action == actionTypes.ADD_SUCCESS){
    setStateSavedProductModal(true)
    setStateAddAlbumModal(false)
  }
 },[action])
  useEffect(()=>{
    return ()=>{dispatch(ResetError())}
  },[]);
  return (
    <Modal>
    <div className={styles.RenameModalContainer}>
        <Logo src={CloseIcon} onClick = {()=> setStateAddAlbumModal(false)} style ={{width: '30px', position: 'absolute',top:'30px',left:'30px'}}></Logo>
       <LoadingSpinner overlay={{backgroundColor:'white'}} isLoading ={action == actionTypes.ADD}>
       <div className={styles.controls}>
        <div className={styles.albumName}>Tên Album</div>
        <input  className={styles.albumInput} value = {inputText} onChange ={(e)=>setInputText(e.target.value)} ></input>
        <div><div className={styles.editBtn} onClick ={addAlbum}>Hoàn thành</div></div>
        </div>
        </LoadingSpinner>
    </div>
    </Modal>
  )
}
