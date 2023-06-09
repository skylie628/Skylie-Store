import React from 'react'
import styles from './AlbumSelection.module.css'
import { Fragment } from 'react';
import { useState } from 'react';
import { Radio } from '@mui/material';
import AddIcon from '../../assets/images/add-icon.png';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import Modal from '../../Components/Modal/Modal';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import Logo from '../../Components/Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSavedAlbums } from '../../store/actions/savedAlbum';
import { addSavedProducts, fetchSavedProducts, ResetError } from '../../store/actions/savedProduct';
import actionTypes from '../../store/actions/actionTypes';
export default function AlbumSelection({setStateSavedProductModal,productInfo,setStateAddAlbumModal}) {
    const [selectedAlbum,setSelectedAlbum] = useState({});
    const userInfo = useSelector(state=>state.user).userInfo;
    const savedAlbums = useSelector(state=> state.savedAlbum).savedAlbums;
    const dispatch = useDispatch();
    const savedAlbumAction = useSelector(state => state.savedAlbum).action;
    const savedProductAction = useSelector(state => state.savedProduct).action;
     const getSavedAlbums = async()=>{
        userInfo?.id&&dispatch(fetchSavedAlbums({account_id: userInfo.id}));
      }

     const handleSaveButton = () =>{
        dispatch(addSavedProducts({
            album_id: selectedAlbum.id,
            product_id: productInfo.id
        }))
     }
     const handleCancelButton =()=>{
        setStateSavedProductModal(false)
     }
     const handleSelectedAlbum = async (savedAlbum) =>{
        setSelectedAlbum(savedAlbum);
        dispatch(fetchSavedProducts(savedAlbum.id))
     }
     const handleAddAlbum = async ()=>{
        setStateAddAlbumModal(true)
        setStateSavedProductModal(false)
     }
     useEffect(()=>{
        if(savedProductAction == actionTypes.ADD_SUCCESS){
            setStateSavedProductModal(false)
        }
     },[savedProductAction])
    useEffect(()=>{
        getSavedAlbums()
        return ()=>dispatch(ResetError())
    },[])
    return (
    <Modal>
    <div className ={styles.container}>
        <div style ={{fontSize: '20px', margin: '20px',textAlign:'left'}}>Danh sách Album</div>
        <div style ={{height:'80%',overflowY:'scroll',scrollbarWidth:'none'}}>
      <LoadingSpinner overlay={{backgroundColor:'white'}} isLoading ={savedAlbumAction == actionTypes.GET_ALL || savedProductAction == actionTypes.ADD} >
        <Fragment>
        {
            savedAlbums.map(savedAlbum =>
                <Fragment>
                 <div className={styles.addressCard} key ={savedAlbum.id}>
                 <div >
                 <Radio
  checked={selectedAlbum.id === savedAlbum.id}
  onChange={()=> handleSelectedAlbum(savedAlbum)}
  value={savedAlbum.id}
  name="radio-buttons"
  //inputProps={{ 'aria-label': {address.id} }}
/></div>
                <div>
                 <div>
                     <div>{savedAlbum.name}</div>
                 </div>
                 </div>
             </div>
             </Fragment>
            )}
            </Fragment>
            </LoadingSpinner>
                    <div style ={{marginBottom:'100px'}}>
            <div  style ={{cursor:'pointer',display:'flex',padding: '5px',margin:'20px', border:'1px solid rgba(0,0,0,0.1)',width: '200px'}} onClick={()=>{handleAddAlbum()}}>
                <Logo src ={AddIcon} style ={{width: '30px'}}></Logo>
                 <div style ={{margin: '5px'}}>Thêm Album</div> 
          </div>
          </div>
          </div>
          <div style ={{position:'fixed',bottom:0,backgroundColor:'white',width:'100%',height: '50px'}}>
 <div style ={{display: 'flex',justifyContent:'right',marginBottom:'20px'}}>
<Button variant="outlined"  style = {{display: 'block',margin: '5px'}} onClick = {()=>handleCancelButton()}>Hủy</Button>
<Button variant="outlined" disabled ={!selectedAlbum.id} style = {{display: 'block',margin: '5px'}} onClick = {()=>handleSaveButton()}>Xác nhận</Button>
</div>   
</div>
    </div>
    </Modal>
  )
}
