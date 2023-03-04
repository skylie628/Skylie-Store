import { TextField } from '@mui/material'
import React from 'react'
import styles from './HelperHeader.module.css'
import {InputAdornment} from '@mui/material';
import SearchIcon from '../../assets/images/search-icon.png'
import Logo from '../Logo/Logo';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      backgroundColor: "black"
    }
  }
}));
export default function HelperHeader() {
  const classes = useStyles();
  return (
    <div className = {styles.container}>
      <div className = {styles.brandName}>Skylie</div>
      <div className = {styles.searchWrapper}>
      <TextField  className = {classes.root}
      sx = {{backgroundColor:'rgb(229,229,229)', borderRadius :'40px',height: '20px',width:'40%', padding:'15px 20px ',
      '& .MuiInputBase-input': {
        padding:'0px'
      },
    }}
        variant="standard" 
         InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <Logo src={SearchIcon} style = {{width: '20px' , height: '20px'}} />
    
            </InputAdornment>
          ),
        }}
      ></TextField></div>
      <div className = {styles.rightAlignWrapper}>
      <div className = {styles.filterWrapper}>filter</div>
      <div className = {styles.sortWrapper}>sort</div>
      </div>
    </div>
  )
}
