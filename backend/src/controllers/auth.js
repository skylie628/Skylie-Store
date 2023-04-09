import * as authService from "../services/auth"
export const register = async (req,res) =>{
    
     const {firstname,lastname,email,password,confirmpassword} = req.body
     try{
            if (!firstname || !lastname || !email || !password || !confirmpassword) {
                return res.status(500).json({
                    err:-1,
                    msg: 'missing input'
                })
            }
            const response = await authService.registerService(req.body);
            return res.status(200).json(response)
     }
    catch(err){
        return res.status(500).json({
            err:-1,
            msg: 'fail at auth controller:'+err
        })
    }
}

export  const login = async (req,res) =>{
    const {email,password} = req.body;
    try{
        if(!email || !password){
            return res.status(500).json({
                err: -1,
                msg:'missing input'
            })
        }
        const response = await authService.loginService(req.body);
        return res.status(200).json(response)
    }
    catch(err){
        return res.status(500).json({
            err : -1,
            msg: 'fail at auth controller:'+err
        })
    }
}