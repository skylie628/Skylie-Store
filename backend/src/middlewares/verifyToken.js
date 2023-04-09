import  jwt from "jsonwebtoken"
export const verifyToken = (req,res,next) =>{
    let accessToken = req.headers.authorization?.split(' ')[1];
    if(!accessToken){
        return res.status(404).json({
            err:-1,
            msg:'missing access token'
        })
    }
    jwt.verify(accessToken,process.env.SECRET_KEY,(err,user)=>{
        if (err) return res.status(404).json({
            err:-1,
            msg:'access token expired'
        })
        console.log("user la",user)
        req.user = user
        next();
    })
}