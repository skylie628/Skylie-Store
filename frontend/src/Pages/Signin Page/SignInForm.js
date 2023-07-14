import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form';
import Button from '../../Components/ClassicButton/Button.js';
import EmailIcon from '@mui/icons-material/Email';
import InputField from '../../Components/Form Control/InputField/InputField.js';
import PasswordInputField from '../../Components/Form Control/InputField/PasswordInputField.js';
import SingleNotify from '../../Components/MultipleNotify/SingleNotify.js';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import actionTypes from '../../store/actions/actionTypes.js';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner.js';
export default function SignInForm(props) {
    const {errors,action} = useSelector(state => state.auth);
    const yup = require("yup");
    const handleFormSubmit = (value)=>{
      console.log(value)
      const {onSubmit} = props;
    if(onSubmit) {
      onSubmit(value)
    }
    }
    const schema = yup.object().shape({
        email: yup.string().required('Hãy nhập email bạn nhé!').email('Hãy nhập đúng email bạn nhé!'),
        password: yup.string().required('Hãy nhập password bạn nhé!'),
      });

    const form = useForm({
        defaultValues : {
          password : '',
          email : '',
        },
        resolver: yupResolver(schema),
      }
      )
  return (
    <form onSubmit = {form.handleSubmit(handleFormSubmit)}>
    {(action == actionTypes.LOGIN_FAIL) && <SingleNotify style = {{backgroundColor:'rgba(0,0,0,0.1)',width: '30%',margin:'0 auto'}} severity ='error' msg={errors} ></SingleNotify>}
    <LoadingSpinner overlay={{backgroundColor: 'white'}} isLoading ={action == actionTypes.LOGIN }>
    <div style={{ m: 1, width: '30%',minWidth : 380 , display: 'block',margin : '30px auto' }} variant="outlined">  
       <InputField
       name= "email"
       id="email"
       label="email"
       IconElement = {<EmailIcon/>}
       variant="outlined"
       form = {form}
       />
   </div>
    <div style={{ m: 1, width: '30%',minWidth : 380 , display: 'block',margin : '30px auto' }} variant="outlined">
     <PasswordInputField
         name= "password"
         id="password"
         label="password"
         variant="outlined"
         form = {form} />
     </div>
     </LoadingSpinner>
     <div>
     <Button  color ='black' style ={{margin:'10px auto',width: '100px'}}  label = 'Đăng nhập'  onClick = {form.handleSubmit(handleFormSubmit)} />
     </div>
     
     </form>
  )
}
