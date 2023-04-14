import db from "../models";
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import UnauthorizedError from "../errors/unauthorizedError";
import ConflictError from "../errors/ConflictError";
require('dotenv').config
 const hashPasword = (password) => bcrypt.hashSync(password,bcrypt.genSaltSync(12))
 export const registerService = ({firstname,lastname,email,password,confirmpassword}) => new Promise(async (resolve, reject) => {
        const [user,isCreated] = await db.Account.findOrCreate({
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
        if(!isCreated){
            reject(new ConflictError('Email đã được đăng ký trước đó'))
        }
        const token = isCreated && jwt.sign({id: user.id,email:user.email},process.env.SECRET_KEY,{expiresIn:'2d'})
        resolve({
            err: 0,
            msg: "Đăng ký thành công",
            token: token,
        })
  
})

/*export const loginService = ({email,password}) => new Promise(async(resolve, reject) => {

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

})  */

export const loginService = ({email,password}) => new Promise(async(resolve, reject) => {

    const response  = await db.Account.findOne({
        where:{email},
        raw:true
    })
    const isCorrectPassword = response && bcrypt.compareSync(password,response.password)

    const token = isCorrectPassword? jwt.sign({id: response.id,email: response.email},process.env.SECRET_KEY,{expiresIn: '2d'}) : null
    if(!token){
        reject(new UnauthorizedError('Xác thực ngưới dùng không hợp lệ'))
    }
    resolve({
        err: null,
        msg: "login successfully" ,
        token: token,
    })
    }) 