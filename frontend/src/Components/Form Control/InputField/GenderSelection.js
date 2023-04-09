import { RadioGroup,Radio,FormControlLabel} from "@mui/material";
import { Controller } from "react-hook-form";

export default  function GenderSelection(props){
    return <Controller
    name={props.name}
    control={props.form.control}
    render={({field})=>
      (<RadioGroup
      {...field}
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue={props.default}
      >
         {
            props.options.map(option =>
                <FormControlLabel
                value= {option.value}
                control={<Radio />}
                label= {option.label}
              />)
         }
      </RadioGroup>)
    }
  />
}