import { TextField } from '@mui/material'
import React, { Fragment, useEffect } from 'react'
import { useState, useRef } from 'react';
import styles from './HelperHeader.module.css'
import {InputAdornment} from '@mui/material';
import SearchIcon from '../../assets/images/search-icon.png'
import FilterIcon from '../../assets/images/filter-icon-small.png' 
import SortIcon from '../../assets/images/sort-icon-small.png' 
import { filterByName } from '../../store/reducers/productQuerySlice';
import {apiGetProducts, apiGetSearchSuggest} from '../../services/product';
import Logo from '../Logo/Logo';
import { useSelector,useDispatch } from 'react-redux';
import { sort } from '../../store/reducers/productQuerySlice';
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
  const [inputSearch,setInputSearch] = useState('');
  const [inputText,setInputText] = useState('')
  const [isLoading,setIsLoading] = useState(false);
  const [searchSuggestion,setSearchSuggestion] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSelectedSort = (index)=>{
    dispatch(sort(index));
  }
  const handleOnchange = (event)=>{
    setInputText(event.target.value);
    if(!searchFocus){setSearchFocus(true);};
    if(event.target.value){
      !isLoading&&setIsLoading(true);
    }
    else {
      setIsLoading(false);
      setSearchSuggestion([]);
    }
    console.log(event.target.value)
    //!event.target.value&&setIsLoading(false);
    const delay = setTimeout(()=>{
      setInputSearch(event.target.value);
    },3000);
    return () => clearTimeout(delay);
  }
  const handleEnter = (event) =>{
    if(event.key ==='Enter'){
      console.log('start search!')
      dispatch(filterByName(inputSearch));
      handleOutfocus();
    }
  } 
  const handleOutfocus = () => {
    setSearchFocus(false);
    setInputText('');
    setInputSearch('');
  }

  const fetchSearchSuggest = async (name) =>{
    apiGetSearchSuggest({name:inputSearch}).then(
    (rst)=> {console.log('result là',rst);setSearchSuggestion(rst.data.products);setIsLoading(false)}
    )
  }
  useEffect(()=>{
    console.log("search suggest change",searchSuggestion)
  },[searchSuggestion])
  useEffect(()=>{
    console.log('searching for ',inputSearch)
    inputSearch&&fetchSearchSuggest({name:inputSearch});
  },[inputSearch])
  const selectedSort = useSelector(state=> state.productQuery).order;
  return (
    <div style = {{width: '100%',zIndex: searchFocus? 3 : 1,top : (!isFixed && searchFocus) ? '-64px' : '0px', transition : (searchFocus || !isFixed) ?(!searchFocus ? ' top 0.5s linear , z-index 0s ease-in-out 0.5s':'top 0.5s linear')  : '',position : isFixed ? 'fixed' : 'relative' }}>
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
        value={inputText}
        onKeyDown ={handleEnter}
        onChange = {handleOnchange}
         InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <Logo src={SearchIcon} style = {{width: '20px' , height: '20px'}} />
    
            </InputAdornment>
          ),
        }}
      ></TextField>
      <div style = {{position:'absolute',right:20, cursor : 'pointer',  display: searchFocus ? 'block' : 'none',transition: '0.5 ease-in-out' }} onClick = {handleOutfocus}>Cancel</div>
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
        {["Mới nhất","Hot nhất","Phù hợp nhất","Giá"].map((x,i) =>
          <div style ={{margin: '10px', color: (i == selectedSort)? 'black': 'rgba(0,0,0,0.8)'}} onClick = {()=>handleSelectedSort(i)}>{x}</div>)}
        </div>
      </div>
      </div>
      </div>
    </div>
    <div className = {styles.searchSuggest} style ={{height : searchFocus ? 'auto' : '0px'}}>
      <SearchSuggestion isLoading ={isLoading} products = {searchSuggestion}></SearchSuggestion>
    </div>
    </div>
  )
}
