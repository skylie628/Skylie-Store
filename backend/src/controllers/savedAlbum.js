import {addSavedAlbumServices,getSavedAlbumServices, getSavedAlbumsServices,getShareUrlServices,getSavedAlbumByShareUrlServices,updateSavedAlbumServices,deleteSavedAlbumServices} from '../services/savedAlbum'
import { validationResult } from "express-validator"
import InvalidParamError from '../errors/InvalidParamError';
export const addSavedAlbum = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await addSavedAlbumServices(req.body);
    return res.status(201).json(response)
    
}

export const getSavedAlbums = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await getSavedAlbumsServices(req.query);
    return res.status(200).json(response)
}

export const getShareLink = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    console.log(req.query)
    const response = await getShareUrlServices(req.query.ids);
    return res.status(200).json(response)
}

export const getSavedAlbumByShareLink = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await getSavedAlbumByShareUrlServices(req.query.access_id);
    return res.status(200).json(response)
}



export const getSavedAlbum = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await getSavedAlbumServices(req.params.id);
    return res.status(200).json(response)
}




export const updateSavedAlbum = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
     const response = await updateSavedAlbumServices(req.body);
     return res.status(200).json(response)
 }

 export const deleteSavedAlbum = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
     const response = await deleteSavedAlbumServices(req.query);
     return res.status(200).json(response)
 }