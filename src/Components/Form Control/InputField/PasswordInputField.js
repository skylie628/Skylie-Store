import React from 'react'
import { TextField,InputAdornment } from '@mui/material'
import {Controller} from 'react-hook-form'
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export default function PasswordInputField(props) {
  const {formState} = props.form ;
  const hasError = formState.touchedFields[props.name] && formState.errors[props.name];
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  return (
    <Controller
    name = {props.name}
    control = {props.form.control}
    render={({ field }) => <TextField {...field} id = {props.id}
    label = {props.label}
    fullWidth
    type={showPassword ? 'text' : 'password'}
    variant = {props.variant}
    error = {!!hasError}
    helperText = {formState.errors[props.name]?.message}
    InputProps={{
        
        endAdornment: (
          <InputAdornment position="end">
          <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
          </InputAdornment>
        ),
      }}
    />}/>
  )
}
