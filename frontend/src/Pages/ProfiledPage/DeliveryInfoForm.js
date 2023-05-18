import React, { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import actionTypes from '../../store/actions/actionTypes';
import Logo from '../../Components/Logo/Logo';
import CloseIcon from '../../assets/images/close-icon-black.png'
import { useMemo } from 'react';
import InputField from '../../Components/Form Control/InputField/InputField';
import { ResetError } from '../../store/actions/shippingAddress';
import SelectField from '../../Components/Form Control/InputField/SelectField';
import { apiGetAllProvinces,apiGetDistrictsByProvince,apiGetWardsByDistrict } from '../../services/address';
import styles from './DeliveryInfoForm.module.css'
import SingleNotify from '../../Components/MultipleNotify/SingleNotify';
export default function DeliveryInfoForm(props) {
    const yup = require("yup");
    const selectedId= props.selectedId
    const submitForm = (value)=>{
      props.handleFormSubmit(value)
      }
    const addresses = useSelector(state => state.shippingAddress).addresses;
    const {errors,action} = useSelector(state => state.shippingAddress);
    const [provincesList,setProvincesList] = useState([]);
    const [districtsList,setDistrictsList] = useState([]);
    const [wardsList,setWardsList] = useState([]);
    const [selectedProvince,setSelectedProvince] = useState(false);
    const [selectedDistrict,setSelectedDistrict] = useState(false);
    const [selectedWard,setSelectedWard] = useState(false);
    const [disabledDistrict,setDisabledDistrict] = useState(true);
    const [disabledWard,setDisabledWard] = useState(true);
    const dispatch = useDispatch();
    const updateItem  = selectedId && addresses.find(address => address.id == selectedId);
    const isError = (action == actionTypes.UPDATE_FAIL || action == actionTypes.ADD_FAIL)
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
        isError&&dispatch(ResetError())
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
    <div className = {styles.overlay}>
    <div className={styles.formContainer} style ={{height:(action == actionTypes.UPDATE || action == actionTypes.ADD)? 'auto': '80vh'}} >
        <span style={{display:'flex',flexDirection: 'row',alignItems:'center'}}  >
        <div style ={{flex:'1 0 0',textAlign:'left',marginLeft:'30px',fontSize:'3vh' }}>{selectedId? 'Chỉnh sửa thông tin' : 'Thêm thông tin'}</div>
        <Logo  onClick={()=>props.setIsOpenModal(false)} src={CloseIcon} style = {{width: '10px' , padding:'10px', borderRadius: '100%',border:'1px solid rgba(0,0,0,0.1)',margin:'20px'}}></Logo>
        </span>
    {(action == actionTypes.UPDATE || action == actionTypes.ADD)?
        <div >
        <div style ={{fontSize: '20px'}}>Waiting for updating ...</div>
        <LoadingSpinner overlay={{backgroundColor: 'white' }} isLoading ={ true }>
          <div style = {{width:'100%',height:'20vh'}}></div>
        </LoadingSpinner>
        </div>
        :
        <div className = {styles.content}>
        {isError && <SingleNotify style = {{backgroundColor:'rgba(0,0,0,0.1)',width: '70%',margin:'10px auto'}} severity ='error' msg={errors} ></SingleNotify>}
        <div >
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
        </div>
}
        <Button variant="outlined" style = {{display: 'block', margin : '50px auto'}} onClick = {selectedId? updateform.handleSubmit(submitForm) :  addform.handleSubmit(submitForm)}>Save</Button>
    </div>
    </div>
  )
}
