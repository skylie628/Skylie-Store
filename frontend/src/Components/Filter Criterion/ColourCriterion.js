import React, { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import styles from './ColourCriterion.module.css'
import ExpandIcon from '../../assets/images/expand-icon.png'
import NarrowIcon from '../../assets/images/narrow-icon.png'
import { useDispatch } from 'react-redux'
import { filterByColors } from '../../store/reducers/productQuerySlice'
import { apiGetColors } from '../../services/color'
import CheckIcon from   '../../assets/images/check-icon.png'
export default function ColourCriterion() {
    const [showColour, setShowColour] = useState(true);
    const dispatch = useDispatch();
    /*const [colourList, setColourList] = useState([
        {
            name:'Trắng',
            code: 'rgb(255,255,255)',
            select: false,
        },
        {
            name:'Đen',
            code: 'rgb(0,0,0)',
            select: false,
        },
        {
            name:'Đa màu',
            code: 'rgb(0,0,0)',
            select: false,
        },
        {
            name:'Đỏ',
            code: 'rgb(189,9,23)',
            select: false,
        },
        {
            name:'Cam',
            code: 'rgb(246,118,42)',
            select: false,
        },
        {
            name:'Vàng',
            code: 'rgb(245,243,1)',
            select: false,
        },
        {
            name:'Lục',
            code: 'rgb(0,49,155)',
            select: false,
        }
        ,
        {
            name:'Lam',
            code: 'rgb(2,96,56)',
            select: false,
        },
        {
            name:'Tím',
            code: 'rgb(181,40,180)',
            select: false,
        },
        {
            name:'Hồng',
            code: 'rgb(247,45,147)',
            select: false,
        },
        {
            name:'Bạc',
            code: 'rgb(109,108,108)',
            select: false,
        },
        {
            name:'Nâu',
            code: 'rgb(76,53,40)',
            select: false,
        },
    ])*/
const [colourList, setColourList] = useState([])
useEffect(()=>{
    apiGetColors().then(
        rst => {console.log('color list la',rst);setColourList(rst.data);})
},[])
 const handleOnClick = (x,y) =>{
    const clone = [...colourList];
    clone[3*x+y].select =  !clone[3*x+y].select;
    const selectedColors = clone.filter(color => color.select).map(color => color.id);
    console.log('selectedcolor',selectedColors);
    dispatch(filterByColors(selectedColors));
    setColourList(clone);
 }
  return (
    <div className={styles.FilterCriterion}>
    <div onClick = {()=>{setShowColour(prev => !prev)}} className = {styles.FilterCriterionName}>
    <div style={{float:'left'}}>Màu sắc</div>
    <Logo src = {showColour? NarrowIcon : ExpandIcon } style = {{width: '20px' ,height: '20px', float:'right'}}></Logo>
    <div style ={{clear:'both'}}></div>
    </div>
    <div className={styles.FilterValue} style = {{maxHeight: showColour? '500px' : '0',overflow: 'hidden',transition:'0.5s ease-in-out'}}>
     
     {
        colourList.length >0 && [0,1,2,3].map(x=>
            { 
            return <div className = {styles.flexRow}>
                {[0,1,2].map( y => 
            <div className = {styles.Option} key={colourList[x*3+y].name}>
            <div className = {styles.ColorDot} style ={{backgroundColor: colourList[x*3+y].code}}  onClick={()=>handleOnClick(x,y)}>
            <Logo src ={CheckIcon} style= {{width:'20px',height:'20px',top:'50%',left:'50%',transform: 'translate(-50%,-50%)', position:'absolute', display: colourList[x*3+y].select? 'block': 'none'}}/>
            </div>
            <span className ={styles.color}>{colourList[x*3+y].name}</span>
            </div>)}
            </div>
            }
            )
            
     }

    </div>
  </div>
  )
}
