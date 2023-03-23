import React from 'react'
import { FormControl, InputAdornment } from '@mui/material';
import {useForm} from 'react-hook-form';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import InputField from '../../Components/Form Control/InputField/InputField.js';
import PasswordInputField from '../../Components/Form Control/InputField/PasswordInputField.js';
import { yupResolver } from '@hookform/resolvers/yup';
export default function SignInForm(props) {
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
     <div>
     <Button variant="outlined" style = {{display: 'block', margin : '10px auto'}} onClick = {form.handleSubmit(handleFormSubmit)}>Đăng nhập</Button>
     </div>
     </form>
  )
}
