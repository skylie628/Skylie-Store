import ConflictError from "../errors/ConflictError";
import InvalidParamError from "../errors/InvalidParamError";
import db from "../models";
import { v4 as uuidv4 } from 'uuid';
export const getModelsServices = (seriesId) => new Promise(async (resolve, reject) => {
    try{
    const response = await db.BrandModel.findAll({
        raw:true,
        where: {
            brandmodelgroup_id: seriesId
        }
    })
    resolve({
        data: response,
        err: 0,
    }) }
    catch(err){reject(new InvalidParamError('Get không thành công'))}
})