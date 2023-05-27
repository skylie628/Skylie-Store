import {checkAllowServices,addCommentServices, getCommentsServices,updateCommentServices,deleteCommentServices} from '../services/comment'
import { validationResult } from "express-validator"
import InvalidParamError from '../errors/InvalidParamError';
export const addComment = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await addCommentServices(req.body);
    return res.status(201).json(response)
    
}

export const getComments = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await getCommentsServices(req.query);
    return res.status(200).json(response)
}



export const updateComment = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
     const response = await updateCommentServices(req.body);
     return res.status(200).json(response)
 }

 export const deleteComment = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    console.log('delete payload',req.query);
     const response = await deleteCommentServices(req.query);
     return res.status(200).json(response)
 }

 export const checkAllowComment = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
     const response = await checkAllowServices(req.query);
     return res.status(200).json(response)
 }