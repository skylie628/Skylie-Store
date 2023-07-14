import  jwt from "jsonwebtoken"
import UnauthorizedError from "../errors/UnauthorizedError";
export const verifyToken = (req,res,next) =>{
    let accessToken = req.headers.authorization?.split(' ')[1];
    if(!accessToken){
        throw new UnauthorizedError('Thiếu access token')
    }
    jwt.verify(accessToken,process.env.SECRET_KEY,(err,user)=>{
        if (err) return res.status(401).json({
            err:-1,
            msg:'access token expired'
        })
        console.log("user la",user)
        req.user = user
        next();
    })
}