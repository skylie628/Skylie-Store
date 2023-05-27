import { validationResult } from "express-validator"
import InvalidParamError from '../errors/InvalidParamError';
import { getCartByAccountServices } from "../services/cart";
export const getCart = async(req,res) =>{
    const errors = validationResult(req);
    console.log(req)
    if (!errors.isEmpty()){
        throw new InvalidParamError(errors.errors)
    }
    const response = await getCartByAccountServices(req.query.account_id);
    return res.status(200).json(response)
}


