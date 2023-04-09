import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import Logo from '../../Components/Logo/Logo';
import CloseIcon from '../../assets/images/close-icon-black.png'
import InputField from '../../Components/Form Control/InputField/InputField';
import SelectField from '../../Components/Form Control/InputField/SelectField';
import { apiGetAllProvinces,apiGetDistrictsByProvince,apiGetWardsByDistrict } from '../../services/address';
import styles from './DeliveryInfoForm.module.css'
export default function DeliveryInfoForm(props) {
    const yup = require("yup");
    const handleFormSubmit = (value)=>{
      console.log(value)
        const {onSubmit} = props;
      if(onSubmit) {
        onSubmit(value)
      }
      }
    const [provincesList,setProvincesList] = useState([]);
    const [districtsList,setDistrictsList] = useState([]);
    const [wardsList,setWardsList] = useState([]);
    const [selectedProvince,setSelectedProvince] = useState(0);
    const [selectedDistrict,setSelectedDistrict] = useState(0);
    const [selectedWard,setSelectedWard] = useState(0);

    const schema = yup.object().shape({
        fullname: yup.string().required('Hãy nhập tên bạn nhé!'),
        lastname: yup.string().required('Hong được bỏ trống trường này đâu!'),
        phonenum: yup.string().required('Số điện thoại là bắt buộc ạ!'),
        province: yup
        .string()
        .required('Thông tin này bắt buộc để vận chuyển đơn hàng'),
        province: yup
        .string()
        .required('Thông tin này bắt buộc để vận chuyển đơn hàng'),
        district: yup
        .string()
        .required('Thông tin này bắt buộc để vận chuyển đơn hàng'),
        wards: yup
        .string()
        .required('Thông tin này bắt buộc để vận chuyển đơn hàng'),
        streets: yup
        .string()
        .required('Thông tin này bắt buộc để vận chuyển đơn hàng'),
        homenum: yup
        .string()
        .required('Thông tin này bắt buộc để vận chuyển đơn hàng'),
    });
    useEffect(()=>{
      const getAllProvinces = async()=>{
        const response = await apiGetAllProvinces()
        const provinces = response.map(x =>({
          label: x.name,
          value: x.code
        }))
        setProvincesList(provinces);
    }
    getAllProvinces();
    },[])
    useEffect(()=>{
      console.log("selectedProvince",selectedProvince.value)
      const getDistricts = async(pcode)=>{
        const response = await apiGetDistrictsByProvince(pcode)
        const districts = response.districts.map(x =>({
          label: x.name,
          value: x.code
        }))
        setDistrictsList(districts);
    }
    getDistricts(selectedProvince.value);
    },[selectedProvince])

    useEffect(()=>{
      const getWards = async(dcode)=>{
        const response = await apiGetWardsByDistrict(dcode)
        const wards = response.wards.map(x =>({
          label: x.name,
          value: x.code
        }))
        setWardsList(wards);
    }
    getWards(selectedDistrict.value);
    },[selectedDistrict])



    const form = useForm({
        defaultValues : {
          fullname: 'Đinh Vĩnh',
          lastname: 'Khương',
          phonenum: '035297477',
          province: '',
          district: '',
          wards:'',
          street: '',
          detailed:''
        },
        resolver: yupResolver(schema),
      })
   
  return (
    <div className={styles.formContainer} >
        <span onClick={()=>props.setIsOpenModal(false)}>
        <Logo src={CloseIcon} style = {{width: '10px' , padding:'10px', borderRadius: '100%',border:'1px solid rgba(0,0,0,0.1)', float: 'right',margin:'20px'}}></Logo>
        <div style={{clear:'both'}}></div>
        </span>
        <div>
        <InputField
        name = 'fullname'
        id = 'fullname'
        label = 'Họ'
        form = {form}
        ></InputField>
        </div>
        <div>
    <InputField
        name = 'lastname'
        id = 'lastname'
        label = 'Tên'
        form = {form}
        ></InputField>
        </div>
        <div>
    <InputField
        name = 'phonenum'
        id = 'phonenum'
        label = 'Số điện thoại'
        form = {form}
        ></InputField>
        </div>
<div>
<SelectField
        name = 'province'
        id = 'province'
        label = 'Tỉnh/Thành phố'
        options = {provincesList}
        setSelected = {setSelectedProvince}
        form = {form}
        ></SelectField>
</div> <div>
<SelectField
        name = 'district'
        id = 'district'
        label = 'Quận/Huyện'
        options = {districtsList}
        setSelected = {setSelectedDistrict}
        form = {form}
        ></SelectField>
</div><div>
<SelectField
        name = 'wards'
        id = 'wards'
        label = 'Phường/Xã'
        options = {wardsList}
        setSelected ={setSelectedWard}
        form = {form}
        ></SelectField>
</div><div>
<SelectField
        name = 'streets'
        id = 'streets'
        label = 'Đường/Tòa nhà'
        options = {[
            { label: "Tây Ninh", value: "Tây Ninh" },
            { label: "Bình Dương", value: "Bình Dương" },
            { label: "Tp Hồ chí Minh", value: "Tp Hồ chí Minh" }
          ]}
        form = {form}
        ></SelectField>
        </div>
        <div>
    <InputField
        name = 'homenum'
        id = 'homenum'
        label = 'Số nhà/Vị trí cụ thể'
        form = {form}
        ></InputField>
        </div>

        <Button variant="outlined" style = {{display: 'block', margin : '10px auto'}} onClick = {form.handleSubmit(handleFormSubmit)}>Save</Button>
    </div>
  )
}
