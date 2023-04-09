import db from "../models";
import { v4 as uuidv4 } from 'uuid';
export const addShippingAddressServices = (info) => new Promise(async (resolve, reject) => {
    try{
    const response = await db.ShippingAddress.findOrCreate({
        where :info,
        defaults:{
            ...info,
            id : uuidv4()
        }
    })
    resolve({
        err: response[1]? 0 :2,
        msg: response[1]? 'add shipping address successfully' : 'shipping address has already existed'
    })   
}
    catch(err){
        reject(err)
    }
})

