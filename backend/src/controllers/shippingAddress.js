import {addShippingAddressServices, getShippingAddressesServices,updateShippingAddressServices,deleteShippingAddressServices} from '../services/shippingAddress'
export const addShippingAddress = async(req,res) =>{
    const {account_id,firstname,lastname,phonenum,province,district,ward,homenum} = req.body;

   try{
    if (!account_id||!firstname||!lastname||!phonenum||!province||!district||!ward||!homenum||!req.body.default){
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

export const getShippingAddresses = async(req,res) =>{
   try{
    console.log("shipping addresses req la",req)
    if (!req.query.account_id){
        return res.status(500).json({
            err: -1,
            msg:'missing input'
        })
    }
    const response = await getShippingAddressesServices(req.query);
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

export const updateShippingAddress = async(req,res) =>{
    try{
     const response = await updateShippingAddressServices(req.body);
     return res.status(200).json(response)
    }
    catch(err){
     return res.status(500).json({
         err: -1,
         msg:'get err at controller ' + err
     })
    }
 }

 export const deleteShippingAddress = async(req,res) =>{
    try{
     const response = await deleteShippingAddressServices(req.query);
     console.log('delete query la');
     return res.status(200).json(response)
    }
    catch(err){
     return res.status(500).json({
         err: -1,
         msg:'get err at controller ' + err
     })
    }
 }