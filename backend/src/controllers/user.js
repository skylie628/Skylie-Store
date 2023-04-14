
import InvalidParamError from "../errors/InvalidParamError";
import { getUserServices, updateUserServices } from "../services/user";
import { validationResult } from "express-validator"
export const getUser = async(req,res) =>{
    const {id} = req.user;
     const response = await getUserServices(id);
     return res.status(200).json(response);

 }

 export const updateUser = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
        }
     const response = await updateUserServices(req.body);
     return res.status(200).json(response);
 }