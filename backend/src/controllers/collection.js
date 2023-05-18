import {addCollectionServices, getCollectionsServices,updateCollectionServices,deleteCollectionServices} from '../services/collection'
import { validationResult } from "express-validator"
import InvalidParamError from '../errors/InvalidParamError';
export const addCollection = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await addCollectionServices(req.body);
    return res.status(201).json(response)
    
}

export const getCollections = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await getCollectionsServices(req.query);
    return res.status(200).json(response)
}

export const updateCollection = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
     const response = await updateCollectionServices(req.body);
     return res.status(200).json(response)
 }

 export const deleteCollection = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
     const response = await deleteCollectionServices(req.query);
     return res.status(200).json(response)
 }