import React from 'react'
import styles from'./MaterialSelection.module.css'
import GlassIcon from '../../assets/images/Material Icon/glasscase-icon.png'
import MirrorIcon from '../../assets/images/Material Icon/mirrorcase-icon.png'
import TransSilIcon from '../../assets/images/Material Icon/transparent-silicon-icon.png'
import BlackSilIcon from '../../assets/images/Material Icon/black-silicon-icon.png'
import ThreeDIcon from '../../assets/images/Material Icon/3dcase-icon.png'
export default function MaterialSelection({selectedMaterial,setSelectedMaterial}) {
  return (
    <div>
                <div style ={{padding: '30px 0px  10px 0px',borderTop:'1px solid rgba(0,0,0,0.5)'}}>
        <div style ={{display:'block',float:'left'}}>Chọn vật liệu</div>
        <div style ={{fontSize: '12x', display:'block',float:'right'}}><a style={{textDecoration:'none'}} href="#">Thông tin vật liệu</a></div>
        <div style ={{clear:'both'}}></div>
        </div>
        <div className={styles.materialsSelection}>
            <div className ={styles.materialsImg} onClick ={()=> setSelectedMaterial(0)}>
                <img src = {GlassIcon} style={{width:'100%',padding:'5px', borderColor: (selectedMaterial == 0)? 'blue': ''}}></img>
                <span>Nano </span><span>Glass</span>
            </div>
            <div className ={styles.materialsImg} onClick ={()=> setSelectedMaterial(1)}>
                <img src = {MirrorIcon} style={{width:'100%',padding:'5px', borderColor: (selectedMaterial == 1)? 'blue': ''}}></img>
                <span>Mirror</span>
            </div>
            <div className ={styles.materialsImg}>
                <img src = {TransSilIcon} style={{width:'100%',padding:'5px', borderColor: (selectedMaterial == 2)? 'blue': ''}} onClick ={()=> setSelectedMaterial(2)}></img>
                <span>Alpha </span><span>Silicon</span>
            </div>
            <div className ={styles.materialsImg}>
                <img src = {BlackSilIcon} style={{width:'100%',padding:'5px', borderColor: (selectedMaterial == 3)? 'blue': ''}} onClick ={()=> setSelectedMaterial(3)}></img>
                <span>Black</span><span> Silicon</span>
            </div>
            <div className ={styles.materialsImg}>
                <img src = {ThreeDIcon} style={{width:'100%',padding:'5px', borderColor: (selectedMaterial == 4)? 'blue': ''}} onClick ={()=> setSelectedMaterial(4)}></img>
                <span>3D</span>
            </div>
        </div>
    </div>
  )
}
