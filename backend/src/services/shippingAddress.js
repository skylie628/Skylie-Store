import ConflictError from "../errors/ConflictError";
import InvalidParamError from "../errors/InvalidParamError";
import db from "../models";
import { v4 as uuidv4 } from 'uuid';
export const addShippingAddressServices = (info) => new Promise(async (resolve, reject) => {

    const id = uuidv4();
    const response = await db.ShippingAddress.findOrCreate({
        where :info,
        defaults:{
            id,
            ...info
        }
    })
    response[1] ?
    resolve({
        id,
        err: 0,
        msg:  'add shipping address successfully' 
    })
    : 
    reject(new ConflictError('Địa chỉ đã tồn tại'))
})


export const getShippingAddressesServices = ({account_id}) => new Promise(async (resolve, reject) => {
    const response = await db.ShippingAddress.findAll({
        where :{
        account_id
        },
        raw:true
    })
    resolve({
        data: response,
        err: 0,
    }) 
})


export const updateShippingAddressServices = (addressInfo) => new Promise(async (resolve, reject) => {

    const response = await db.ShippingAddress.update(
        {...addressInfo},
        {where :
            {
                id: addressInfo.id
            }
        })
    response[0] ?
    resolve({
        err: 0 ,
        msg: 'update shipping address successfully' 
    })   
    :
    reject( new InvalidParamError('Không tìm thấy địa chỉ vận chuyển tương ứng'))
})


export const deleteShippingAddressServices = (addressInfo) => new Promise(async (resolve, reject) => {

    const response = await db.ShippingAddress.destroy(
        {where :
            {
                id: addressInfo.id
            }
        })
        response ? resolve({
        err: 0,
        msg: 'delete shipping address successfully'})
        :
        reject( new InvalidParamError('Không tìm thấy địa chỉ vận chuyển tương ứng'))   
})




