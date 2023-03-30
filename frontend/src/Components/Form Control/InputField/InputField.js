import React from 'react'
import { TextField,InputAdornment } from '@mui/material'
import {Controller} from 'react-hook-form'
export default function InputField(props) {
  const {formState} = props.form ;
  const hasError = formState.touchedFields[props.name] && formState.errors[props.name];
  return (
    <Controller
    name = {props.name}
    control = {props.form.control}
    render={({ field }) => <TextField {...field} id = {props.id}
    label = {props.label}
    variant = {props.variant}
    error = {!!hasError}
    fullWidth
    helperText = {formState.errors[props.name]?.message}
    InputProps = {{
      endAdornment: (
        <InputAdornment position="end">
         {props.IconElement }
        </InputAdornment>
      ),
    }}  
    />}/>
  )
}
