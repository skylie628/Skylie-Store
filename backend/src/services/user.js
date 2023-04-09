import db from "../models";
export const getUserServices = (userId) => new Promise(async (resolve,reject) =>{
    try{
        const response = await db.Account.findOne({
            attributes: ['id', 'firstName','lastName','email','phonenum','sex','dob'],
            raw:true,
            where :[
                {
                    id : userId
                }
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
    try{
        console.log(userInfo)
        const response = await db.Account.update({
            ...userInfo
        },{
            where :
                {
                    id : userInfo.id
                }
          }
          );
        resolve({
            err: 0,
            data: response
        })
    }
    catch(err){
        console.log('Lỗi rùi nè')
        reject(err)
    }
  
})
