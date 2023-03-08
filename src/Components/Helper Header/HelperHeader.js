import { TextField } from '@mui/material'
import React, { Fragment } from 'react'
import { useState } from 'react';
import styles from './HelperHeader.module.css'
import {InputAdornment} from '@mui/material';
import SearchIcon from '../../assets/images/search-icon.png'
import FilterIcon from '../../assets/images/filter-icon-small.png' 
import SortIcon from '../../assets/images/sort-icon-small.png' 
import Logo from '../Logo/Logo';
import SearchSuggestion from '../Search Suggestion/SearchSuggestion';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      backgroundColor: "black"
    }
  }
}));
export default function HelperHeader({isFixed,style,showFilter,setShowFilter}) {
  const [searchFocus,setSearchFocus] = useState(false);
  const [showSortPopup, setShowSortPopup] = useState(false);
  const classes = useStyles();
  return (
    <div style = {{width: '100%',zIndex: 3,top : (!isFixed && searchFocus) ? '-64px' : '0px', transition : (searchFocus || !isFixed) ?'top 0.5s ease-in-out' : '',position : isFixed ? 'fixed' : 'relative' }}>
    <div className = {styles.container} >
      <div className = {styles.brandName}style ={{ display : searchFocus ? 'none' :'block'}}>Skylie</div>
      <div className = {styles.searchWrapper} style ={{ flex : searchFocus ? '0 0 100%' :'0 0 50%'}}>
      <TextField  className = {classes.root}
      sx = {{backgroundColor:'rgb(229,229,229)', borderRadius :'40px',height: '20px',width:'40%', padding:'15px 20px ',
      '& .MuiInputBase-input': {
        padding:'0px'
      }
    }}
        placeholder = 'search'
        variant="standard" 
        onChange = {()=>{if(!searchFocus){setSearchFocus(true)}}}
         InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <Logo src={SearchIcon} style = {{width: '20px' , height: '20px'}} />
    
            </InputAdornment>
          ),
        }}
      ></TextField>
      <div style = {{position:'absolute',right:20, cursor : 'pointer',  display: searchFocus ? 'block' : 'none',transition: '0.5 ease-in-out' }} onClick = {() => {setSearchFocus(false);}}>Cancel</div>
      </div>
      <div className = {styles.rightAlignWrapper} style ={{ display : searchFocus ? 'none' :'flex'}}>
        <div className = {styles.filterWrapper} onClick = {()=>{setShowFilter((prev)=> !prev)}}>
        <div style ={{position:'relative', height: '100%'}}>
      <div style ={{position:'relative', display: 'flex',verticalAlign:'center',alignItems:'center',height:'100%'}}>
        <span>{showFilter ? 'Ẩn bộ lọc' : 'Hiện bộ lọc'}</span>
        <Logo src={FilterIcon}  style = {{width : '20px' ,height : '20px', display:'inline-block!important'}}></Logo>
      </div>
      </div>
      </div>
      <div className = {styles.sortWrapper} onClick = {()=>{setShowSortPopup((prev)=> !prev)}}>
      <div style ={{position:'relative', height: '100%'}}>
      <div style ={{position:'relative', display: 'flex',verticalAlign:'center',alignItems:'center',height:'100%'}}>
      <span>Sắp xếp</span>
      <Logo src={SortIcon}  style = {{width : '20px' ,height : '20px',display: 'inline-block!important'}}></Logo>
      </div>
      </div>
      <div className = {styles.sortPopup} style = {{display: showSortPopup? 'block' : 'none'}}>
        <div style ={{width:'100%',height: '100%',margin: '10px'}}>
        {["Mới nhất","Hot nhất","Phù hợp nhất","Giá"].map(x => <div style ={{margin: '10px'}}>{x}</div>)}
        </div>
      </div>
      </div>
      </div>
    </div>
    <div className = {styles.searchSuggest} style ={{height : searchFocus ? 'auto' : '0px'}}>
      <SearchSuggestion></SearchSuggestion>
    </div>
    </div>
  )
}
