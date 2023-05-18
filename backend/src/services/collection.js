import { response } from "express";
import ConflictError from "../errors/ConflictError";
import InvalidParamError from "../errors/InvalidParamError";
import db from "../models";
import { v4 as uuidv4 } from 'uuid';
import NotFoundError from "../errors/NotFoundError";
export const addCollectionServices = (collectionInfo) => new Promise(async (resolve, reject) => {

    const id = uuidv4();
    try{
    const response = await db.Collection.findOrCreate({
        where :collectionInfo,
        defaults:{
            id,
            ...collectionInfo
        }
    })
    response[1] ?
    resolve({
        id,
        err: 0,
        msg:  'add Collection successfully' 
    })
    : 
    reject(new ConflictError('Collection đã tồn tại'))}
    catch(err){reject(new InvalidParamError('Thêm dữ liệu không thành công'))}
})


export const getCollectionsServices = () => new Promise(async (resolve, reject) => {
    try{
    const response = await db.Collection.findAll({
        raw:true,
    })
    resolve({
        data: response,
        err: 0,
    }) }
    catch(err){reject(new InvalidParamError('Get không thành công'))}
})


export const updateCollectionServices = (collectionInfo) => new Promise(async (resolve, reject) => {

    try{
    const response = await db.Collection.update(
        {...collectionInfo},
        {where :
            {
                id: collectionInfo.id
            }
        })
    response[0] ?
    resolve({
        err: 0 ,
        msg: 'update collection successfully' 
    })   
    :
    reject( new InvalidParamError('Không tìm thấy collection tương ứng'))}
    catch(err){reject(new InvalidParamError('Cập nhật không thành công'))}
    /*const response = await db.Collection.update(
        {...collectionInfo},
        {where :
            {
                id: collectionInfo.id
            }
        })
    response[0] ?
    resolve({
        err: 0 ,
        msg: 'update collection successfully' 
    })   
    :
    reject( new InvalidParamError('Không tìm thấy collection tuong ung'))*/
})


export const deleteCollectionServices = (collectionInfo) => new Promise(async (resolve, reject) => {
    try{
    const response = await db.Collection.destroy(
        {where :
            {
                id: collectionInfo.id
            }
        })
        response ? resolve({
        err: 0,
        msg: 'xóa thành công'})
        :
        reject( new InvalidParamError('Không tìm thấy collection tương ứng'))}
    catch(err){reject(new InvalidParamError('Cập nhật không thành công'))}
})




