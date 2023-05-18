import ConflictError from "../errors/ConflictError";
import InvalidParamError from "../errors/InvalidParamError";
import db from "../models";
import { v4 as uuidv4 } from 'uuid';
export const addCartItemServices = (info) => new Promise(async (resolve, reject) => {

    const id = uuidv4();
    const response = await db.CartItem.findOrCreate({
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
        msg:  'thêm sản phẩm vào cart thành công' 
    })
    : 
    reject(new ConflictError('Không thể thêm vào cart'))
})


export const getCartItemsServices = ({order_id}) => new Promise(async (resolve, reject) => {
    const response = await db.CartItem.findAll({
        where :{
            order_id
        },
        raw:true
    })
    resolve({
        data: response,
        err: 0,
    }) 
})


export const updateCartItemServices = (info) => new Promise(async (resolve, reject) => {

    const response = await db.CartItem.update(
        {...info},
        {where :
            {
                id: info.id
            }
        })
    response[0] ?
    resolve({
        err: 0 ,
        msg: 'Cập nhật item thành công' 
    })   
    :
    reject( new InvalidParamError('Không tìm thấy item tương ứng'))
})


export const deleteCartItemServices = (info) => new Promise(async (resolve, reject) => {

    const response = await db.CartItem.destroy(
        {where :
            {
                id: info.id
            }
        })
        response ? resolve({
        err: 0,
        msg: 'xóa cartItem thành công'})
        :
        reject( new InvalidParamError('Không tìm thấy cart Item tương ứng'))   
})




