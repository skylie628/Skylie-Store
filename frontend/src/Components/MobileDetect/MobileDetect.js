import React, { Fragment } from 'react'
import { useMediaQuery } from 'react-responsive';
export default function MobileDetect(props) {
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  return (
    <Fragment>{isTabletOrMobile? props.mobile : props.desktop}</Fragment>
  )
}
