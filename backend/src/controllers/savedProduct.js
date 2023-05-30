import {addSavedProductServices,getDefaultSavedProductServices, getSavedProductsServices,updateSavedProductServices,deleteSavedProductServices} from '../services/savedProduct'
import { validationResult } from "express-validator"
import InvalidParamError from '../errors/InvalidParamError';
export const addSavedProduct = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await addSavedProductServices(req.body);
    return res.status(201).json(response)
    
}

export const getSavedProducts = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await getSavedProductsServices(req.query);
    return res.status(200).json(response)
}


 export const deleteSavedProduct = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
     const response = await deleteSavedProductServices(req.query);
     return res.status(200).json(response)
 }