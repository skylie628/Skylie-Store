import {addShippingAddressServices} from '../services/shipping'
export const addShippingAddress = async(req,res) =>{
    const {account_id,firstname,lastname,phonenum,city,district,wards,streets,homenum} = req.body;
   try{
    if (!account_id||!firstname||!lastname||!phonenum||!city||!district||!wards||!streets||!homenum){
        return res.status(500).json({
            err: -1,
            msg:'missing input'
        })
    }
    const response = await addShippingAddressServices(req.body);
    return res.status(200).json(response)
   }
   catch(err){
    console.log(err)
    return res.status(500).json({
        err: -1,
        msg:'get err at controller ' + err
    })
   }

}