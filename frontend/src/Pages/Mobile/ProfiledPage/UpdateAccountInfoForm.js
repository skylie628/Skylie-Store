import React from 'react'
import {useForm} from 'react-hook-form';
import DateTimePicker from '../../../Components/DateTimePicker/DateTimePicker.js';
import Button from '../../../Components/Button/Button.js';
import GenderSelection from '../../../Components/Form Control/InputField/GenderSelection.js';
import dayjs from 'dayjs';
import moment from 'moment';
import InputField from '../../../Components/Form Control/InputField/InputField.js';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './AccountInfo.module.css';
export default function UpdateAccountInfoForm(props) {
    const yup = require("yup");
    const userInfo = props.userInfo
    const phoneRegExp = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    const schema = yup.object().shape({
        firstname: yup.string().required('Hãy nhập tên bạn nhé!'),
        lastname: yup.string().required('Hong được bỏ trống trường này đâu!'),
        phonenum:yup.string().required('Hong được bỏ trống trường này đâu!').matches(phoneRegExp,'Số điện thoại không đúng định dạng rồi!'),
        email: yup.string().required('Email là bắt buộc ạ!').email('Bạn kiểm tra lại email nhé!'),
        dob: yup
        .string()
        .nullable(true)
        .test("dob", "Nhập ngày sinh hợp lệ", function (value) {
        return (value == 'Invalid Date')? false: true
          }),
    });

    const form = useForm({
        defaultValues : {
          firstname: userInfo.firstname,
          lastname: userInfo.lastname,
           email : userInfo.email,
          phonenum:userInfo.phonenum || '',
          sex: userInfo.sex ,
          dob:dayjs(userInfo.dob)
        },
        resolver: yupResolver(schema),
      }
      )
      const submitForm = (value)=>{
        console.log("deli info form",moment(value.dob).format('YYYY-MM-DD'))
        props.handleSubmitForm({...value,dob: value.dob&&moment(value.dob).format('YYYY-MM-DD')})}
    

  return (
    <div className={styles.container}>
    <div>
        <InputField
            name= "firstname"
            id="firstname"
            label="firstname"
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
        <div> <GenderSelection
        name ="sex"
        label = "sex"
        options = {[{value:'male',label:'Nam'},{value:'female',label:'Nữ'},{value:'other',label:'Khác'}]}
        default ={userInfo.sex}
        form = {form}
        ></GenderSelection></div>
    </div>
    <div>
        <div>Birthday</div>
        <div><DateTimePicker
        name = 'dob'
        id="dob"
        defaultdob = {userInfo.dob}
        label="dob"
        form = {form}
        /></div>
    </div>
    </div>
    <Button bgColor="blue" label ="Save" style = {{display: 'block', margin : '10px auto'}}   onClick = {form.handleSubmit(submitForm)}/>
</div>
  )
}
