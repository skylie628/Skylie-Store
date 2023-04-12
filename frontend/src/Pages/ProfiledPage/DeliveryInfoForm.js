import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import Logo from '../../Components/Logo/Logo';
import CloseIcon from '../../assets/images/close-icon-black.png'
import { useMemo } from 'react';
import InputField from '../../Components/Form Control/InputField/InputField';
import SelectField from '../../Components/Form Control/InputField/SelectField';
import { apiGetAllProvinces,apiGetDistrictsByProvince,apiGetWardsByDistrict } from '../../services/address';
import styles from './DeliveryInfoForm.module.css'
export default function DeliveryInfoForm(props) {
    const yup = require("yup");
    const selectedId= props.selectedId
    const submitForm = (value)=>{
      console.log(value)
      props.handleFormSubmit(value)
      }
    const addresses = useSelector(state => state.shippingAddress).addresses;
    const [provincesList,setProvincesList] = useState([]);
    const [districtsList,setDistrictsList] = useState([]);
    const [wardsList,setWardsList] = useState([]);
    const [selectedProvince,setSelectedProvince] = useState(false);
    const [selectedDistrict,setSelectedDistrict] = useState(false);
    const [selectedWard,setSelectedWard] = useState(false);
    const [disabledDistrict,setDisabledDistrict] = useState(true);
    const [disabledWard,setDisabledWard] = useState(true);
    const updateItem  = selectedId && addresses.find(address => address.id == selectedId);
    const getAllProvinces = async()=>{
      const response = await apiGetAllProvinces()
      const provinces = response.map(x =>({
        label: x.name,
        value: x.code
      }))
      setProvincesList(provinces);
  }
    const getDistricts = async(pcode)=>{
      const response = await apiGetDistrictsByProvince(pcode)
      const districts = response.districts.map(x =>({
        label: x.name,
        value: x.code
      }))
      setDistrictsList(districts);
  }
    const getWards = async(dcode)=>{
      const response = await apiGetWardsByDistrict(dcode)
      const wards = response.wards.map(x =>({
        label: x.name,
        value: x.code
      }))
      setWardsList(wards);
    }
    const phoneRegExp = /((09|03|07|08|05)+([0-9]{8})\b)/g;

    const schema = yup.object().shape({
        firstname: yup.string().required('Hãy nhập tên bạn nhé!'),
        lastname: yup.string().required('Hong được bỏ trống trường này đâu!'),
        phonenum: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        province: yup
        .string()
        .required('Thông tin này bắt buộc để vận chuyển đơn hàng'),
        district: yup
        .string()
        .required('Thông tin này bắt buộc để vận chuyển đơn hàng'),
        ward: yup
        .string()
        .required('Thông tin này bắt buộc để vận chuyển đơn hàng'),
        homenum: yup
        .string()
        .required('Thông tin này bắt buộc để vận chuyển đơn hàng'),
    });
    useEffect(()=>{
      console.log("Id chọn là",selectedId);
      getAllProvinces();
    if(selectedId){
      console.log("update Item",updateItem)
      getDistricts(updateItem.province)
      getWards(updateItem.district)
      setSelectedProvince(updateItem.province)
      setSelectedDistrict(updateItem.district)
      setSelectedWard(updateItem.ward)
    }

    document.body.style.overflowY = "hidden";
    return () => {
        document.body.style.overflowY = "visible";
    }

    },[])
    useEffect(()=>{
    console.log('selectedProvince',selectedProvince.value)
    getDistricts(selectedProvince.value);
    setWardsList([]);
    selectedProvince && setDisabledDistrict(false)
    selectedProvince  && setDisabledWard(true);
    },[selectedProvince])

    useEffect(()=>{
      console.log('selectedDistrict',selectedDistrict.value)
    getWards(selectedDistrict.value);
    selectedDistrict && setDisabledWard(false)
    },[selectedDistrict])


    
    const updateform =  useForm({
        defaultValues : {
          firstname: updateItem.firstname,
          lastname: updateItem.lastname,
          phonenum: updateItem.phonenum,
          province: updateItem.province,
          district: updateItem.district,
          ward:updateItem.ward,
          homenum:updateItem.homenum,
        },
        resolver: yupResolver(schema),
      })

      const addform =  useForm({
        defaultValues : {
          firstname: '',
          lastname: '',
          phonenum: '',
          province: '',
          district: '',
          ward:'',
          homenum:'',
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
        name = 'firstname'
        id = 'firstname'
        label = 'Họ'
        form = {selectedId? updateform : addform}
        ></InputField>
        </div>
        <div>
    <InputField
        name = 'lastname'
        id = 'lastname'
        label = 'Tên'
        form = {selectedId? updateform : addform}
        ></InputField>
        </div>
        <div>
    <InputField
        name = 'phonenum'
        id = 'phonenum'
        label = 'Số điện thoại'
        form = {selectedId? updateform : addform}
        ></InputField>
        </div>
<div>
<SelectField
        name = 'province'
        id = 'province'
        label = 'Tỉnh/Thành phố'
        options = {provincesList}
        setSelected = {setSelectedProvince}
        form = {selectedId? updateform : addform}
        ></SelectField>
</div> <div>
<SelectField
        name = 'district'
        id = 'district'
        label = 'Quận/Huyện'
        options = {districtsList}
        isDisabled = {disabledDistrict}
        setSelected = {setSelectedDistrict}
        form = {selectedId? updateform : addform}
        ></SelectField>
</div><div>
<SelectField
        name = 'ward'
        id = 'ward'
        label = 'Phường/Xã'
        options = {wardsList}
        isDisabled = {disabledWard}
        setSelected ={setSelectedWard}
        form = {selectedId? updateform : addform}
        ></SelectField>
</div>
        <div>
    <InputField
        name = 'homenum'
        id = 'homenum'
        label = 'Tên đường/Số nhà/Vị trí cụ thể'
        form = {selectedId? updateform : addform}
        ></InputField>
        </div>

        <Button variant="outlined" style = {{display: 'block', margin : '10px auto'}} onClick = {selectedId? updateform.handleSubmit(submitForm) :  addform.handleSubmit(submitForm)}>Save</Button>
    </div>
  )
}
