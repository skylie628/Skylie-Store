import db from "../models";
export const getAllBrandServices = () => new Promise(async (resolve,reject) =>{
    try{
        const response = await db.Brand.findAll({
            attributes: ['id', 'name'],
            raw:true
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

export const getAllBrandModelsByBrandServices = ({brandId}) => new Promise(async (resolve,reject) =>{
    try{
        const response = await db.BrandModel.findAll({
            attributes: ['id', 'name'],
            where: {
                brand_id: brandId
              },
            nest: true,
            include:[{
                model: db.Brand,
                attributes:['id','name'],
                as: 'brand'
            }],
            raw:true
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

