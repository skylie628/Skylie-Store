import React from 'react'
import { FormControl, Select } from '@mui/material'
import {Controller} from 'react-hook-form'
import {MenuItem} from '@mui/material';
import {InputLabel} from '@mui/material';
export default function SelectField(props) {
  const {formState} = props.form ;
  const handleOnChange = (e)=>{
    console.log(e.target)
    props.setSelected({value:e.target.value})
  }
  return (
    <div>
    <Controller
    name= {props.name}
    control={props.form.control}
    render={({field: { onChange, value }}) => {
      return <FormControl fullWidth>
        <InputLabel id="test-select-label">{props.label}</InputLabel>
        <Select
        name = {props.name}
        options={props.options}
        value={value}
        label = {props.label}
        disabled = {props.isDisabled || false}
        onChange={(e)=>{onChange(e); handleOnChange(e)}}
      >       
    {        props.options.map(x =>
                <MenuItem value = {x.value} key={x.key} >{x.label}</MenuItem>)
    }
      </Select></FormControl>
    }}
  />
  <span style ={{display: 'block',margin: '10px 0px',color: 'red',fontSize:'13px'}}>{formState.errors[props.name]?.message}</span>
  </div>
  )
}
