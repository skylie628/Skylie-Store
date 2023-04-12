import * as authService from "../services/auth"
import { validationResult } from "express-validator"
import InvalidParamError from "../errors/InvalidParamError"
export const register = async (req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await authService.registerService(req.body);
    return res.status(201).json(response)
}
export  const login = async (req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await authService.loginService(req.body);
    return res.status(200).json(response)       
}