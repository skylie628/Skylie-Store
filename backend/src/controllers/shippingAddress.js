import {addShippingAddressServices, getShippingAddressesServices,updateShippingAddressServices,deleteShippingAddressServices} from '../services/shippingAddress'
import { validationResult } from "express-validator"
import InvalidParamError from '../errors/InvalidParamError';
export const addShippingAddress = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await addShippingAddressServices(req.body);
    return res.status(201).json(response)
    
}

export const getShippingAddresses = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await getShippingAddressesServices(req.query);
    return res.status(200).json(response)
}

export const updateShippingAddress = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
     const response = await updateShippingAddressServices(req.body);
     return res.status(200).json(response)
 }

 export const deleteShippingAddress = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
     const response = await deleteShippingAddressServices(req.query);
     return res.status(200).json(response)
 }