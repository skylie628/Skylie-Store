import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Controller} from 'react-hook-form' 
export default function DateTimePicker(props) {
  const {formState} = props.form ;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
    name = {props.name}
    control = {props.form.control}
      render = {({ field }) => <DatePicker
      defaultValue={dayjs('2022-07-17')}
      minDate={dayjs('1950-01-00')}
      maxDate={dayjs('2016-01-00')}
      format="DD/MM/YYYY"
      slotProps={{
        textField: 
          {variant: "standard",
          color:"primary",
          margin:"dense",
          helperText:formState.errors[props.name]?.message,
          error:!!formState.errors[props.name]
        }
      }}
      /*(params) => {
        console.log('renderInput',formState.errors[props.name]?.message)
        return (
        <TextField
          id="dateOfBirth"
          variant="standard"
          margin="dense"
          fullWidth
          color="primary"
          autoComplete="bday"
          {...params}
          helperText={formState.errors[props.name]?.message}
          error={!!formState.errors[props.name]}
         
        />)}} */
        {...field} />} 
      >
      </Controller>
    </LocalizationProvider>
  );
}
