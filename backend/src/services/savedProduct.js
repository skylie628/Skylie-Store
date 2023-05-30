import ConflictError from "../errors/ConflictError";
import InvalidParamError from "../errors/InvalidParamError";
import db from "../models";
import { v4 as uuidv4 } from 'uuid';
export const addSavedProductServices = (info) => new Promise(async (resolve, reject) => {

    const id = uuidv4();
    const response = await db.SavedProduct.findOrCreate({
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
        msg:  'add album successfully' 
    })
    : 
    reject(new ConflictError('album đã tồn tại'))
})


export const getSavedProductsServices = ({album_id}) => new Promise(async (resolve, reject) => {
    const response = await db.SavedProduct.findAll({
        where :{
        album_id
        },
        raw:true
    })
    resolve({
        data: response,
        err: 0,
    }) 
})



export const deleteSavedProductServices = (productInfo) => new Promise(async (resolve, reject) => {

    const response = await db.SavedProduct.destroy(
        {where :
            {
                id: productInfo.id
            }
        })
        response ? resolve({
        err: 0,
        msg: 'delete product successfully'})
        :
        reject( new InvalidParamError('Không tìm thấy product tương ứng'))   
})




