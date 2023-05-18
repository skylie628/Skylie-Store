import ConflictError from "../errors/ConflictError";
import InvalidParamError from "../errors/InvalidParamError";
import db from "../models";
import { v4 as uuidv4 } from 'uuid';
export const addOrderServices = (info) => new Promise(async (resolve, reject) => {

    const id = uuidv4();
    const response = await db.Order.findOrCreate({
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
        msg:  'add order thành công' 
    })
    : 
    reject(new ConflictError('order đã tồn tại'))
})


export const getOrdersServices = ({account_id}) => new Promise(async (resolve, reject) => {
    console.log("account_id là",account_id)
    const response = await db.Order.findAll({
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


export const updateOrderServices = (orderInfo) => new Promise(async (resolve, reject) => {

    const response = await db.Order.update(
        {...orderInfo},
        {where :
            {
                id: orderInfo.id
            }
        })
    response[0] ?
    resolve({
        err: 0 ,
        msg: 'Update Order thành công' 
    })   
    :
    reject( new InvalidParamError('Không tìm thấy Order tương ứng'))
})


export const deleteOrderServices = (orderInfo) => new Promise(async (resolve, reject) => {

    const response = await db.Order.destroy(
        {where :
            {
                id: orderInfo.id
            }
        })
        response ? resolve({
        err: 0,
        msg: 'xóa order thành công'})
        :
        reject( new InvalidParamError('Không tìm thấy order tương ứng'))   
})




