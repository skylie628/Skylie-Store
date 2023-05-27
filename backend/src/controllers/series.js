import { getSeriesServices } from "../services/series";
import { validationResult } from "express-validator"
import InvalidParamError from '../errors/InvalidParamError';
export const getSeries = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await getSeriesServices(req.query.brandId);
    return res.status(200).json(response)
}