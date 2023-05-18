import { response } from "express";
import ConflictError from "../errors/ConflictError";
import InvalidParamError from "../errors/InvalidParamError";
import db from "../models";
import { v4 as uuidv4 } from 'uuid';
import NotFoundError from "../errors/NotFoundError";
export const addColorServices = (colorInfo) => new Promise(async (resolve, reject) => {

    const id = uuidv4();
    try{
    const response = await db.Color.findOrCreate({
        where :colorInfo,
        defaults:{
            id,
            ...colorInfo
        }
    })
    response[1] ?
    resolve({
        id,
        err: 0,
        msg:  'add Color successfully' 
    })
    : 
    reject(new ConflictError('Color đã tồn tại'))}
    catch(err){reject(new InvalidParamError('Thêm dữ liệu không thành công'))}
})


export const getColorsServices = () => new Promise(async (resolve, reject) => {
    try{
    const response = await db.Color.findAll({
        raw:true,
    })
    resolve({
        data: response,
        err: 0,
    }) }
    catch(err){reject(new InvalidParamError('Get không thành công'))}
})


export const updateColorServices = (colorInfo) => new Promise(async (resolve, reject) => {

    try{
    const response = await db.Color.update(
        {...colorInfo},
        {where :
            {
                id: colorInfo.id
            }
        })
    response[0] ?
    resolve({
        err: 0 ,
        msg: 'update color successfully' 
    })   
    :
    reject( new InvalidParamError('Không tìm thấy color tương ứng'))}
    catch(err){reject(new InvalidParamError('Cập nhật không thành công'))}
    /*const response = await db.Color.update(
        {...colorInfo},
        {where :
            {
                id: colorInfo.id
            }
        })
    response[0] ?
    resolve({
        err: 0 ,
        msg: 'update color successfully' 
    })   
    :
    reject( new InvalidParamError('Không tìm thấy color tuong ung'))*/
})


export const deleteColorServices = (colorInfo) => new Promise(async (resolve, reject) => {
    try{
    const response = await db.Color.destroy(
        {where :
            {
                id: colorInfo.id
            }
        })
        response ? resolve({
        err: 0,
        msg: 'xóa thành công'})
        :
        reject( new InvalidParamError('Không tìm thấy color tương ứng'))}
    catch(err){reject(new InvalidParamError('Cập nhật không thành công'))}
})




