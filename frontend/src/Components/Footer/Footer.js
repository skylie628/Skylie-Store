import React from 'react'
import styles from './styles.module.css'
export default function Footer() {
  return (
    <div className = {styles.footerContainer}>
      <div className = {styles.footerContents}>
        <div className = {styles.footerContentName}>
          Ghé shop tại
        </div>
        <div className = {styles.footerContentItems}>
          <span>210 đường Điện Biên Phủ khu phố Ninh Tân phường Ninh Sơn tp Tây Ninh</span>
        </div>
        <div className = {styles.footerContentItems}>
          <span>phukienskylie@gmail.com</span>
        </div>
      </div>

      <div className = {styles.footerContents}>
        <div class = {styles.footerContentName}>
          Alo shop
        </div>
        <div className = {styles.footerContentItems}>
          <span>+84 0352917477</span>
        </div>
      </div>

      <div className = {styles.footerContents}>
        <div className = {styles.footerContentName}>
          Follow shop
        </div>
        <div className = {styles.footerContentItems}>
          <span>Instagram</span>
          <span>Youtube</span>
          <span>Tiktok</span>
          <span>Shopee</span>
        </div>
      </div>

    </div>
  )
}
