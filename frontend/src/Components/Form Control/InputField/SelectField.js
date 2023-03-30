import React from 'react'
import { FormControl, Select } from '@mui/material'
import {Controller} from 'react-hook-form'
import {MenuItem} from '@mui/material';
import {InputLabel} from '@mui/material';
export default function SelectField(props) {
  const {formState} = props.form ;
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
        onChange={onChange}
      >       
    {        props.options.map(x =>
                <MenuItem value = {x.value} key={x.key} >{x.value}</MenuItem>)
    }
      </Select></FormControl>
    }}
  />
  <span style ={{display: 'block',margin: '10px 0px',color: 'red',fontSize:'13px'}}>{formState.errors[props.name]?.message}</span>
  </div>
  )
}
