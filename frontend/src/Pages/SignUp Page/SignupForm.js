import React, { useEffect } from 'react'
import { FormControl, InputAdornment } from '@mui/material';
import { useSelector } from 'react-redux';
import {useForm} from 'react-hook-form';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import InputField from '../../Components/Form Control/InputField/InputField.js';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner.js';
import PasswordInputField from '../../Components/Form Control/InputField/PasswordInputField.js';
import SingleNotify from '../../Components/MultipleNotify/SingleNotify.js';
import actionTypes from '../../store/actions/actionTypes.js';
import { yupResolver } from '@hookform/resolvers/yup';
export default function SignupForm(props) {
    const yup = require("yup");
    const {errors,action} = useSelector(state => state.auth)
    useEffect(()=>{
      console.log('action là', action)
    },[action])
    const handleFormSubmit = (value)=>{
      const {onSubmit} = props;
    if(onSubmit) {
      onSubmit(value)
    }
    }
    const schema = yup.object().shape({
        firstname: yup.string().required('Hãy nhập tên bạn nhé!'),
        lastname: yup.string().required('Hong được bỏ trống trường này đâu!'),
        email: yup.string().required('Email là bắt buộc ạ!').email('Bạn kiểm tra lại email nhé!'),
        password: yup.string().required('Ui chưa nhập password này!').min(6),
        confirmpassword: yup.string().oneOf([yup.ref('password')], 'Password chưa khớp bạn ơi!').required('Xác nhận password bạn nhé!'),
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
    {(action == actionTypes.REGISTER_FAIL) && <SingleNotify style = {{backgroundColor:'rgba(0,0,0,0.1)',width: '30%',margin:'0 auto'}} severity ='error' msg={errors} ></SingleNotify>}
    <LoadingSpinner overlay={{backgroundColor: 'white'}} isLoading ={action == actionTypes.REGISTER }>
    <div style = {{ m: 1, width: '30%',minWidth : 380 , display: 'flex',margin : '30px  auto' }}>
    <div style = {{ m: 1, flex: '1 1 auto', display: 'block',margin : '30px 0px 10px 0px', alignSelf : "left" }}>
    <InputField
       name= "firstname"
       id="firstname"
       label="firstname"
       variant="outlined"
       form = {form}
       />
    </div>
    <div style = {{ m: 1 ,flex: '1 1 auto', display: 'block',margin : '30px 0px 0px 10px' }}>
    <InputField
       name= "lastname"
       id="lastname"
       label="lastname"
       variant="outlined"
       form = {form}
       />
    </div>
    </div>
    <div style={{ m: 1, width: '30%',minWidth : 380 , display: 'block',margin : '30px  auto'  }}>  
       <InputField
       name= "email"
       id="email"
       label="email"
       IconElement = {<EmailIcon/>}
       variant="outlined"
       form = {form}
       />
   </div>
    <div  style={{ m: 1, width: '30%',minWidth : 380 , display: 'block',margin : '30px auto' }} >
     <PasswordInputField
         name= "password"
         id="password"
         label="password"
         variant="outlined"
         form = {form} />
     </div>
     <div  style={{ m: 1, width: '30%',minWidth : 380 , display: 'block',margin : '30px auto' }} >
     <PasswordInputField
         name= "confirmpassword"
         id="confirmpassword"
         label="confirm password"
         variant="outlined"
         form = {form} />
     </div>
     </LoadingSpinner>
     <div>
     <Button variant="outlined" style = {{display: 'block', margin : '10px auto'}} onClick = {form.handleSubmit(handleFormSubmit)}>Đăng Ký</Button>
     </div>
     </form>
  )
}
