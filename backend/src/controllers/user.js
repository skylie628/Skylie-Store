import { getUserServices, updateUserServices } from "../services/user";
export const getUser = async(req,res) =>{
    try{
    console.log('req user la',req.user);
    const {id} = req.user;
    console.log(id);
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
        console.log('update user',req.body)
     const response = await updateUserServices(req.body);
     return res.status(200).json(response);
    } catch(err){
     return res.status(500).json({
         err: -1,
         msg: 'get err at controller +' + err
     })
    }
 }