import authRouter from './auth.js'
import shippingRouter from './shippingAddress.js'
import brandRouter from './brand.js'
import userRouter from './user.js'
import errorHandler from '../middlewares/errorHandler.js'
require('express-async-errors');
const initRoutes = (app) =>{
    app.use('/api/v1/auth',authRouter);
    app.use('/api/v1/shippingAddress',shippingRouter);
    app.use('/api/v1/brands',brandRouter);
    app.use('/api/v1/user',userRouter);
    app.use(errorHandler)
    return app.use('/',(req,res)=>{
        res.send("not ok")
    })
}
export default initRoutes