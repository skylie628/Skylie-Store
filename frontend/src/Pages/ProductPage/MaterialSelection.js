import React from 'react'
import styles from'./MaterialSelection.module.css'
import GlassIcon from '../../assets/images/Material Icon/glasscase-icon.png'
import MirrorIcon from '../../assets/images/Material Icon/mirrorcase-icon.png'
import TransSilIcon from '../../assets/images/Material Icon/transparent-silicon-icon.png'
import BlackSilIcon from '../../assets/images/Material Icon/black-silicon-icon.png'
import ThreeDIcon from '../../assets/images/Material Icon/3dcase-icon.png'
import { useNavigate } from 'react-router-dom'
export default function MaterialSelection({setStateMaterialMenu,selectedMaterial,setSelectedMaterial}) {
  const navigate = useNavigate();
const changeSelected = (id) =>{
    setStateMaterialMenu(prev =>'Touched');
    setSelectedMaterial(id);
  }
    return (
    <div id ='materialMenu'>
                <div style ={{padding: '30px 0px  10px 0px',borderTop:'1px solid rgba(0,0,0,0.5)'}}>
        <div style ={{display:'block',float:'left'}} >Chọn vật liệu</div>
        <div style ={{fontSize: '12x', display:'block',float:'right', cursor:'pointer'}} onClick={()=>navigate('../materials')}><a style={{textDecoration:'none'}} href="#">Thông tin vật liệu</a></div>
        <div style ={{clear:'both'}}></div>
        </div>
        <div className={styles.materialsSelection}>
            <div className ={styles.materialsImg} >
                <img src = {GlassIcon} style={{width:'100%',padding:'5px', borderColor: (selectedMaterial == 'glass')? 'blue': ''}} onClick ={()=> changeSelected('glass')} ></img>
                <span>Nano </span><span>Glass</span>
            </div>
            <div className ={styles.materialsImg} >
                <img src = {MirrorIcon} style={{width:'100%',padding:'5px', borderColor: (selectedMaterial == 'mirror')? 'blue': ''}} onClick ={()=> changeSelected('mirror')}></img>
                <span>Mirror</span>
            </div>
            <div className ={styles.materialsImg} >
                <img src = {TransSilIcon} style={{width:'100%',padding:'5px', borderColor: (selectedMaterial == 'transSil')? 'blue': ''}} onClick ={()=> changeSelected('transSil')}></img>
                <span>Alpha </span><span>Silicon</span>
            </div>
            <div className ={styles.materialsImg} >
                <img src = {BlackSilIcon} style={{width:'100%',padding:'5px', borderColor: (selectedMaterial == 'blackSil')? 'blue': ''}} onClick ={()=> changeSelected('blackSil')}></img>
                <span>Black</span><span> Silicon</span>
            </div>
            <div className ={styles.materialsImg} >
                <img src = {ThreeDIcon} style={{width:'100%',padding:'5px', borderColor: (selectedMaterial == '3d')? 'blue': ''}} onClick ={()=> changeSelected('3d')}></img>
                <span>3D</span>
            </div>
        </div>
    </div>
  )
}
