import {addProductServices,getProductServices, getProductsServices,updateProductServices,deleteProductServices} from '../services/product'
import { validationResult } from "express-validator"
import InvalidParamError from '../errors/InvalidParamError';
export const addProduct = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await addProductServices(req.body);
    return res.status(201).json(response)
    
}
export const getProduct = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    console.log(req.params)
    const response = await getProductServices(req.params);
    console.log('res laa',response)
    return res.status(200).json(response)
}

export const getProducts = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await getProductsServices(req.query);
    return res.status(200).json(response)
}

export const updateProduct = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
     const response = await updateProductServices(req.body);
     return res.status(200).json(response)
 }

 export const deleteProduct = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
     const response = await deleteProductServices(req.query);
     return res.status(200).json(response)
 }