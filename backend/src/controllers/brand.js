import {getAllBrandServices,getAllBrandModelsByBrandServices} from "../services/brand"
export const getAllBrands = async(req,res) =>{
   try{
    const response = await getAllBrandServices();
    return res.status(200).json(response);
   } catch(err){
    return res.status(500).json({
        err: -1,
        msg: 'get err at controller +' + err
    })
   }
}

export const getAllBrandModelsByBrand = async(req,res) =>{
    try{
     const response = await getAllBrandModelsByBrandServices(req.params);
     return res.status(200).json(response);
    } catch(err){
     return res.status(500).json({
         err: -1,
         msg: 'get err at controller +' + err
     })
    }
 }