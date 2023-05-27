import { getModelsServices } from "../services/models";
import { validationResult } from "express-validator"
import InvalidParamError from '../errors/InvalidParamError';
export const getModels = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await getModelsServices(req.query.seriesId);
    return res.status(200).json(response)
}