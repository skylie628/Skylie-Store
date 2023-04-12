import db from "../models";
import { v4 as uuidv4 } from 'uuid';
export const addShippingAddressServices = (info) => new Promise(async (resolve, reject) => {
    console.log("info la",info)
    try{
    const id = uuidv4();
    const response = await db.ShippingAddress.findOrCreate({
        where :info,
        defaults:{
            id,
            ...info
        }
    })
    resolve({
        id,
        err: response[1]? 0 :2,
        msg: response[1]? 'add shipping address successfully' : 'shipping address has already existed'
    })   
}
    catch(err){
        reject(err)
    }
})


export const getShippingAddressesServices = ({account_id}) => new Promise(async (resolve, reject) => {
  
    try{
    const response = await db.ShippingAddress.findAll({
        where :{
        account_id
        },
        raw:true
    })
    console.log("responde của get là",response)
    resolve({
        data: response,
        err: 0,
    })   
}
    catch(err){
        reject(err)
    }
})


export const updateShippingAddressServices = (addressInfo) => new Promise(async (resolve, reject) => {
    try{
    const response = await db.ShippingAddress.update(
        {...addressInfo},
        {where :
            {
                id: addressInfo.id
            }
        })
    resolve({
        err: response[0]? 0 : 1,
        msg: response[0]? 'update shipping address successfully' : 'unable to update'
    })   
}
    catch(err){
        reject(err)
    }
})


export const deleteShippingAddressServices = (addressInfo) => new Promise(async (resolve, reject) => {
    try{
    const response = await db.ShippingAddress.destroy(
        {where :
            {
                id: addressInfo.id
            }
        })
    resolve({
        err: response? 0 : 1,
        msg: response? 'delete shipping address successfully' : 'unable to update'
    })   
}
    catch(err){
        reject(err)
    }
})




