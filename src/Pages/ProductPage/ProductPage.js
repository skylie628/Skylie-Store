import React, { useState,useRef } from 'react'
import styles from '../ProductPage/ProductPage.module.css'
import ProductImages from './ProductImages'
import OptionSelection from './OptionSelection'
import MaterialSelection from './MaterialSelection'
import Comment from './Comment'
import BrandMenu from '../../Components/Brand Menu/BrandMenu'
import ShowHideLayout from '../../Components/Show Hide Layout/ShowHideLayout'
import SimpleItemList from '../../Components/Simple Item List/SimpleItemList'
import Suggestion from '../../Components/Suggestion/Suggestion'
import side1 from '../../assets/images/ProductImage/side-1.png'

export default function ProductPage() {
    const [showingImage,setShowingImage] = useState(side1);
    const [selectedMaterial,setSelectedMaterial] = useState(0);
    const [selectedBrand,setSelectedBrand] = useState(0);
    const [selectedModel,setSelectedModel] = useState(0);
    const [selectedOption,setSelectedOption] = useState(0);
    const ProductInfo = {
        id:0,
        img:side1,
        name: 'Unique Collection x mẫu 01',
        price: 95000,
        score: 4,
    } 
    const OptionList = [{
        id: 0,
        src: require(`../../assets/images/ProductImage/side-1.png`),
    }, {
        id:1,
        src: require(`../../assets/images/ProductImage/side-1.png`)
}]
    const PhoneNames = ['Iphone6', 'Iphone6s','Iphone7s Plus','Iphone XsMax']
  return (
    <div>
    <div className={styles.container}>
    <ProductImages showingImage={showingImage} setShowingImage = {setShowingImage}/>
    <div className ={styles.information}>
        <div className={styles.hotTag}>New Comming</div>
        <div className={styles.name}>Unique Collection x mẫu 01</div>
        <div className={styles.price}>95.000 vnd</div>
        <OptionSelection selectedOption={selectedOption} setSelectedOption= {setSelectedOption} OptionList={OptionList}/>
        <MaterialSelection selectedMaterial={selectedMaterial} setSelectedMaterial={setSelectedMaterial}></MaterialSelection>
        <BrandMenu selectedBrand ={selectedBrand} setSelectedBrand ={setSelectedBrand}></BrandMenu>
        <SimpleItemList ListItem={PhoneNames} selectedItem = {selectedModel} setSelectedItem ={setSelectedModel} style ={{}}></SimpleItemList>
        <div className = {styles.addToCartBtn} onClick={()=>{alert(selectedBrand +''+selectedMaterial+' '+ selectedModel)}}>Thêm vào giỏ hàng</div>
        <ShowHideLayout header='Chính sách vận chuyển'>
            <div style ={{ lineHeight:'2em'}}>
            <div>
                Đơn hàng của bạn từ 2 ốp lưng sẽ được hỗ trợ miễn phí vận chuyển. Cước phí vận chuyển được tính theo dịch vụ giao hàng tiết kiệm.
            </div>
            <ul>
           <li>
            Mất 1 - 2 ngày để chúng mình in mẫu bạn chọn lên ốp và bàn giao cho đơn vị vận chuyển.
           </li>
           <li>
            Đối với khu vực nội thành TP. Hồ Chí Minh, khách hàng nhận hàng sau 2 - 3 ngày sau khi đặt, thời gian này đối với khu vực các tỉnh ngoại thành  khoản 3 - 6 ngày phụ thuộc các yếu tố khách quan.
            </li>
            <li>
            Khách hàng thanh toán sau khi nhận hàng
            </li>
            </ul>
            </div>
        </ShowHideLayout>
        <ShowHideLayout header='Chính sách bảo hành'>
            <div style ={{ lineHeight:'2em'}}>
            <ul>
           <li>
            1 đổi 1 nếu sản phẩm sai mẫu, sai dòng điện thoại so với đơn đặt hàng trên hệ thống.
           </li>
           <li>
            Khách hàng được bảo hành ốp mới trong vòng 6 tháng nếu ốp bị hỏng do lỗi nhà cung cấp.
           </li>
            </ul>
            </div>
        </ShowHideLayout>
        <Comment ProductInfo ={ProductInfo}/>
    </div>
    </div>
    <Suggestion></Suggestion>
    </div>
  )
}
