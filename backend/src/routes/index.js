import authRouter from './auth.js'
import shippingRouter from './shipping.js'
import brandRouter from './brand.js'
import userRouter from './user.js'
const initRoutes = (app) =>{
    app.use('/api/v1/auth',authRouter);
    app.use('/api/v1/shipping',shippingRouter);
    app.use('/api/v1/brands',brandRouter);
    app.use('/api/v1/user',userRouter);
    return app.use('/',(req,res)=>{
        res.send("not ok")
    })
}
export default initRoutes