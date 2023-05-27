import { response } from "express";
import ConflictError from "../errors/ConflictError";
import InvalidParamError from "../errors/InvalidParamError";
import db from "../models";
import { v4 as uuidv4 } from 'uuid';
import NotFoundError from "../errors/NotFoundError";
export const addSeriesServices = (SeriesInfo) => new Promise(async (resolve, reject) => {

    const id = uuidv4();
    try{
    const response = await db.BrandModelGroup.findOrCreate({
        where :SeriesInfo,
        defaults:{
            id,
            ...SeriesInfo
        }
    })
    response[1] ?
    resolve({
        id,
        err: 0,
        msg:  'add BrandModelGroup successfully' 
    })
    : 
    reject(new ConflictError('Color đã tồn tại'))}
    catch(err){reject(new InvalidParamError('Thêm dữ liệu không thành công'))}
})


export const getSeriesServices = (brandId) => new Promise(async (resolve, reject) => {
    try{
    const response = await db.BrandModelGroup.findAll({
        raw:true,
        where: {
            brand_id: brandId
        }
    })
    resolve({
        data: response,
        err: 0,
    }) }
    catch(err){reject(new InvalidParamError('Get không thành công'))}
})


export const updateSeriesServices = (SeriesInfo) => new Promise(async (resolve, reject) => {

    try{
    const response = await db.BrandModelGroup.update(
        {...SeriesInfo},
        {where :
            {
                id: SeriesInfo.id
            }
        })
    response[0] ?
    resolve({
        err: 0 ,
        msg: 'update Series successfully' 
    })   
    :
    reject( new InvalidParamError('Không tìm thấy Series tương ứng'))}
    catch(err){reject(new InvalidParamError('Cập nhật không thành công'))}
    /*const response = await db.BrandModelGroup.update(
        {...SeriesInfo},
        {where :
            {
                id: SeriesInfo.id
            }
        })
    response[0] ?
    resolve({
        err: 0 ,
        msg: 'update Series successfully' 
    })   
    :
    reject( new InvalidParamError('Không tìm thấy Series tuong ung'))*/
})


export const deleteSeriesServices = (SeriesInfo) => new Promise(async (resolve, reject) => {
    try{
    const response = await db.BrandModelGroup.destroy(
        {where :
            {
                id: SeriesInfo.id
            }
        })
        response ? resolve({
        err: 0,
        msg: 'xóa thành công'})
        :
        reject( new InvalidParamError('Không tìm thấy Series tương ứng'))}
    catch(err){reject(new InvalidParamError('Cập nhật không thành công'))}
})




