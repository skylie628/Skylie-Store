import React from 'react'
import { FormControl, InputAdornment } from '@mui/material';
import {useForm} from 'react-hook-form';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import InputField from '../../Components/Form Control/InputField/InputField.js';
import PasswordInputField from '../../Components/Form Control/InputField/PasswordInputField.js';
import { yupResolver } from '@hookform/resolvers/yup';
export default function SignupForm(props) {
    const yup = require("yup");
    const handleFormSubmit = (value)=>{
      const {onSubmit} = props;
    if(onSubmit) {
      onSubmit(value)
    }
    }
    const schema = yup.object().shape({
        fullname: yup.string().required('Hãy nhập tên bạn nhé!'),
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
    <div style = {{ m: 1, width: '30%',minWidth : 380 , display: 'flex',margin : '30px  auto' }}>
    <div style = {{ m: 1, flex: '1 1 auto', display: 'block',margin : '30px 0px 10px 0px', alignSelf : "left" }}>
    <InputField
       name= "fullname"
       id="fullname"
       label="fullname"
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
     <div>
     <Button variant="outlined" style = {{display: 'block', margin : '10px auto'}} onClick = {form.handleSubmit(handleFormSubmit)}>Đăng Ký</Button>
     </div>
     </form>
  )
}
