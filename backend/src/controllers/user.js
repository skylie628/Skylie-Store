import { getUserServices, updateUserServices } from "../services/user";
export const getUser = async(req,res) =>{
    try{
    const {id} = req.user;
     const response = await getUserServices(id);
     return res.status(200).json(response);
    } catch(err){
     return res.status(500).json({
         err: -1,
         msg: 'get err at controller +' + err
     })
    }
 }

 export const updateUser = async(req,res) =>{
    try{
     const response = await updateUserServices(req.body);
     return res.status(200).json(response);
    } catch(err){
     return res.status(500).json({
         err: -1,
         msg: 'get err at controller +' + err
     })
    }
 }