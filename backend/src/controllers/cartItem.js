import {addCartItemServices, getCartItemsServices,updateCartItemServices,deleteCartItemServices} from '../services/cartItem'
import { validationResult } from "express-validator"
import InvalidParamError from '../errors/InvalidParamError';
export const addCartItem = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await addCartItemServices(req.body);
    return res.status(201).json(response)
    
}

export const getCartItems = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await getCartItemsServices(req.query);
    return res.status(200).json(response)
}

export const updateCartItem = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
     const response = await updateCartItemServices(req.body);
     return res.status(200).json(response)
 }

 export const deleteCartItem = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
     const response = await deleteCartItemServices(req.query);
     return res.status(200).json(response)
 }