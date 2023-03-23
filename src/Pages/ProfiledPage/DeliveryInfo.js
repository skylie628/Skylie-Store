import React, { useState } from 'react'
import DeleteIcon from '../../assets/images/delete-icon.png'
import EditIcon from '../../assets/images/edit-icon-thin.png'
import styles from './DeliveryInfo.module.css'
import Logo from '../../Components/Logo/Logo'
export default function DeliveryInfo({setIsOpenModal}) {
     const [isEdited, setIsEdited] = useState(false)
  return (
    <div>
        <div className = {styles.mainHeader}>
        <div style ={{fontSize: '30px', fontWeight:'bold'}}>Add & Pick.</div>
        <div style ={{fontSize: '25px'}}>Thêm thông tin vận chuyển để được hỗ trợ ship cod, gửi tặng quà cho người thân, bạn bè.</div>
        </div>
        <div className = {styles.controls}>
            <div>{isEdited ?  'Thêm' : ' My Adresses'}</div>
        <div >
            <div style ={{cursor: 'pointer'}} onClick ={()=>setIsEdited(prev => !prev)}> {!isEdited ?  'Chỉnh sửa' : 'Hoàn thành'}</div>
       </div>
        </div>
        <div className = {styles.content}>
            <div className={styles.addressCard}>
                <div>
                    <div>Tên</div>
                    <div>Đinh Vĩnh Khương</div>
                </div>
                <div>
                    <div>Số điện thoại</div>
                    <div>0352917477</div>
                </div>
                <div>
                    <div>Địa chỉ</div>
                    <div>210 Điện Biên Phủ khu phố Ninh Tân phường Ninh Sơn tp Hồ Chí Minh tỉnh Tây Ninh</div>
                </div>
                { isEdited && <div className={styles.cardControl}>
                    <div style = {{cursor:'pointer',color:'blue'}}>Đặt làm mặt định</div>
                    <div><Logo src={DeleteIcon} style= {{width: '25px'}}></Logo></div>
                </div>}
                { isEdited && <div className={styles.editBtn} onClick ={()=>setIsOpenModal(true)}>
                <Logo src={EditIcon} style= {{width: '25px'}}></Logo>
                </div> }
            </div>


            <div className={styles.addressCard}>
                <div>
                    <div>Tên</div>
                    <div>Đinh Vĩnh Khương</div>
                </div>
                <div>
                    <div>Số điện thoại</div>
                    <div>0352917477</div>
                </div>
                <div>
                    <div>Địa chỉ</div>
                    <div>210 Điện Biên Phủ khu phố Ninh Tân phường Ninh Sơn tp Hồ Chí Minh tỉnh Tây Ninh</div>
                </div>
                { isEdited && <div className={styles.cardControl}>
                    <div style = {{cursor:'pointer',color:'blue'}}>Đặt làm mặt định</div>
                    <div><Logo src={DeleteIcon} style= {{width: '25px'}}></Logo></div>
                </div>}
                { isEdited && <div className={styles.editBtn}>
                <Logo src={EditIcon} style= {{width: '25px'}}></Logo>
                </div> }
            </div>


            <div className={styles.addressCard}>
                <div>
                    <div>Tên</div>
                    <div>Đinh Vĩnh Khương</div>
                </div>
                <div>
                    <div>Số điện thoại</div>
                    <div>0352917477</div>
                </div>
                <div>
                    <div>Địa chỉ</div>
                    <div>210 Điện Biên Phủ khu phố Ninh Tân phường Ninh Sơn tp Hồ Chí Minh tỉnh Tây Ninh</div>
                </div>
                { isEdited && <div className={styles.cardControl}>
                    <div style = {{cursor:'pointer',color:'blue'}}>Đặt làm mặt định</div>
                    <div><Logo src={DeleteIcon} style= {{width: '25px'}}></Logo></div>
                </div>}
                { isEdited && <div className={styles.editBtn}>
                <Logo src={EditIcon} style= {{width: '25px'}}></Logo>
                </div> }
            </div>
        </div>
    </div>
  )
}
