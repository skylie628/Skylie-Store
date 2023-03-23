import React from 'react'
import {useForm} from 'react-hook-form';
import Button from '@mui/material/Button';
import DateTimePicker from '../../Components/DateTimePicker/DateTimePicker.js';
import { RadioGroup,Radio,FormControlLabel } from '@mui/material';
import InputField from '../../Components/Form Control/InputField/InputField.js';
import PasswordInputField from '../../Components/Form Control/InputField/PasswordInputField.js';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './AccountInfo.module.css';

export default function AccountInfo({props}) {
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
        birthday: yup
        .string()
        .test("birthday", "Nhập ngày sinh hợp lệ", function (value) {
            console.log(value,value == 'Invalid Date')
        return (value == 'Invalid Date')? false: true
          }),
    });

    const form = useForm({
        defaultValues : {
          fullname: 'Đinh Vĩnh',
          lastname: 'Khương',
           email : 'khuongdinhvinh@gmail.com',
          phonenum:'035297477',
        },
        resolver: yupResolver(schema),
      }
      )
  return (
    <div>
        <div style ={{fontSize: '20px',margin: '20px'}}>Cung cấp thông tin đầy đủ sẽ giúp bạn tiếp cận được nhiều ưu đãi hơn. </div>
    <div className={styles.container}>
        <div>
            <InputField
                name= "fullname"
                id="fullname"
                label="fullname"
                variant="outlined"
                form = {form}
            ></InputField>
        </div>

        <div>
            <InputField
                name= "lastname"
                id="lastname"
                label="lastname"
                variant="outlined"
                form = {form}
            ></InputField>
        </div>

        <div>
            <InputField
                name= "email"
                id="email"
                label="email"
                variant="outlined"
                form = {form}
            ></InputField>
        </div>

        <div>
            <InputField
                name= "phonenum"
                id="phonenum"
                label="phonenum"
                variant="outlined"
                form = {form}
            ></InputField>
        </div>
        <div style={{margin: '20px 0'}}>Thông tin không bắt buộc</div>
        <div className={styles.supportInfo}>
        <div>
            <div>Giới tính</div>
            <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Nữ" />
    <FormControlLabel value="male" control={<Radio />} label="Nam" />
    <FormControlLabel value="other" control={<Radio />} label="Khác" />
  </RadioGroup>
        </div>
        <div>
            <div>Birthday</div>
            <div><DateTimePicker
            name = 'birthday'
            id="birthday"
            label="birthday"
            form = {form}
            /></div>
        </div>
        </div>
        <Button variant="outlined" style = {{display: 'block', margin : '10px auto'}} onClick = {form.handleSubmit(handleFormSubmit)}>Save</Button>
    </div>
    </div>
  )
}
