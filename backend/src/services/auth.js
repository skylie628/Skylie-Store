import db from "../models";
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
require('dotenv').config

 const hashPasword = (password) => bcrypt.hashSync(password,bcrypt.genSaltSync(12))
 export const registerService = ({firstname,lastname,email,password,confirmpassword}) => new Promise(async (resolve, reject) => {
 try{

        const response = await db.Account.findOrCreate({
            where: {email},
            defaults :{
                firstname,
                lastname,
                email,
                password: hashPasword(password),
                id: uuidv4()
            }
        }
        )
        const token = response[1] && jwt.sign({id: response[0].id,email:response[0].email},process.env.SECRET_KEY,{expiresIn:'2d'})
        resolve({
            err: token? 0: 2,
            msg: token?"register successfully" : "phonenumber already be used",
            token: token || null
        })
    }
    catch(err){
        reject(err);
    }
})

export const loginService = ({email,password}) => new Promise(async(resolve, reject) => {
    try{
        const response  = await db.Account.findOne({
            where:{email},
            raw:true
        })
        const isCorrectPassword = response && bcrypt.compareSync(password,response.password)
        const token = isCorrectPassword? jwt.sign({id: response.id,email: response.email},process.env.SECRET_KEY,{expiresIn: '2d'}) : null
        resolve({
            err: token? 0: 2,
            msg: token? "login successfully" : (response ? "wrong password" : "wrong email"),
            token: token || null,
        })
    }
    catch(err){
        reject(err);
    }
}) 