import React from 'react'
import styles from './AddressSelection.module.css'
import { Fragment } from 'react';
import { useState } from 'react';
import { Radio } from '@mui/material';
import AddIcon from '../../assets/images/add-icon.png';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import Logo from '../../Components/Logo/Logo';
export default function AddressSelection({addressesData,setStateAddModalAddresses,setStateModalAddresses,selectedAddress,setSelectedAddress}) {
    const [localSelectedAddress,setLocalSelectedAddress] = useState(selectedAddress)
     const handleSelectAddress = (address) =>{
        setLocalSelectedAddress(address)
     }
     const handleSaveButton = () =>{
        setStateModalAddresses(false)
        setSelectedAddress(localSelectedAddress);
     }
     const handleCancelButton =()=>{
        setStateModalAddresses(false)
     }
    const handleAddAddress = () =>{
        setStateAddModalAddresses(true);
        setStateModalAddresses(false);
    }
    useEffect(()=>{

    },[])
    return (
    <div className ={styles.container}>
    
        <div style ={{fontSize: '20px', margin: '20px',textAlign:'left'}}>Địa chỉ nhận hàng</div>
        <div style ={{height:'80%',overflowY:'scroll',scrollbarWidth:'none'}}>
        {
            addressesData.map(address =>
                <Fragment>
                 <div className={styles.addressCard} key ={address.id}>
                 <div >
                 <Radio
  checked={localSelectedAddress.id === address.id}
  onChange={()=>handleSelectAddress(address)}
  value={address.id}
  name="radio-buttons"
  //inputProps={{ 'aria-label': {address.id} }}
/></div>
                <div>
                 <div>
                     <div>{address.firstname} {address.lastname}</div>
                 </div>
                 <div>
                     <div>{address.phonenum}</div>
                 </div>
                 <div>
                     <div>{address.address}</div>
                 </div>
                 {address.default && <div>
                    <div>Địa chỉ mặc định</div>
                 </div>}
                 </div>
             </div>
             </Fragment>
            )}
            <div style ={{marginBottom:'100px'}}>
            <div  style ={{cursor:'pointer',display:'flex',padding: '5px',margin:'20px', border:'1px solid rgba(0,0,0,0.1)',width: '200px'}} onClick={()=>{handleAddAddress()}}>
                <Logo src ={AddIcon} style ={{width: '30px'}}></Logo>
                 <div style ={{margin: '5px'}}>Thêm địa chỉ</div> 
          </div>
          </div>
          </div>
          <div style ={{position:'fixed',bottom:0,backgroundColor:'white',width:'100%',height: '50px'}}>
 <div style ={{display: 'flex',justifyContent:'right',marginBottom:'20px'}}>
<Button variant="outlined" style = {{display: 'block',margin: '5px'}} onClick = {()=>handleCancelButton()}>Hủy</Button>
<Button variant="outlined" style = {{display: 'block',margin: '5px'}} onClick = {()=>handleSaveButton()}>Xác nhận</Button>
</div>   
</div>
    </div>
  )
}
