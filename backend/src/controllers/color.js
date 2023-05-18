import {addColorServices, getColorsServices,updateColorServices,deleteColorServices} from '../services/color'
import { validationResult } from "express-validator"
import InvalidParamError from '../errors/InvalidParamError';
export const addColor = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await addColorServices(req.body);
    return res.status(201).json(response)
    
}

export const getColors = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await getColorsServices(req.query);
    return res.status(200).json(response)
}

export const updateColor = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
     const response = await updateColorServices(req.body);
     return res.status(200).json(response)
 }

 export const deleteColor = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
     const response = await deleteColorServices(req.query);
     return res.status(200).json(response)
 }