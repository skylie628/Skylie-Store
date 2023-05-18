import NotFoundError from "../errors/NotFoundError";
import db from "../models";
import moment from 'moment';
import dayjs from 'dayjs';
export const getUserServices = (userId) => new Promise(async (resolve,reject) =>{
    try{
        const response = await db.Account.findOne({
            attributes: ['id', 'firstname','lastname','email','phonenum','sex','dob'],
            raw:true,
            where :[
                {id : userId}
            ]
          });
        resolve({
            err: 0,
            data: response
        })
    }
    catch(err){
        reject(err)
    }
  
})

export const updateUserServices = (userInfo) => new Promise(async (resolve,reject) =>{
        const [response] = await db.Account.update({
            ...userInfo
        },{where :{id : userInfo.id}});
        console.log("response là",response)
        response ? 
        resolve({
            err: 0,
            data: response
        }) :
        reject(new NotFoundError('Không tìm thấy user'))
  
})
