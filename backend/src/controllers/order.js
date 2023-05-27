import {addOrderServices, getOrdersServices,updateOrderServices,deleteOrderServices,getOneOrderServices} from '../services/order'
import { validationResult } from "express-validator"
import InvalidParamError from '../errors/InvalidParamError';
export const addOrder = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await addOrderServices(req.body);
    return res.status(201).json(response)
    
}

export const getOrders = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await getOrdersServices(req.query);
    return res.status(200).json(response)
}
export const getOrder = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await getOneOrderServices(req.params);
    return res.status(200).json(response)
}


export const updateOrder = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
     const response = await updateOrderServices(req.body);
     return res.status(200).json(response)
 }

 export const deleteOrder = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
     const response = await deleteOrderServices(req.query);
     return res.status(200).json(response)
 }