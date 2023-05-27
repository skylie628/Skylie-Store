import authRouter from './auth.js'
import shippingRouter from './shippingAddress.js'
import brandRouter from './brand.js'
import collectionRouter from './collection.js'
import productRouter from './product.js'
import userRouter from './user.js'
import orderRouter from './order.js'
import cartItemRouter from './cartItem.js'
import colorRouter from './color.js'
import seriesRouter from './series.js'
import cartRouter from './cart.js'
import modelRouter from './model.js'
import commentRouter from './comment.js'
import errorHandler from '../middlewares/errorHandler.js'
require('express-async-errors');
const initRoutes = (app) =>{
    app.use('/api/v1/auth',authRouter);
    app.use('/api/v1/shippingAddress',shippingRouter);
    app.use('/api/v1/brands',brandRouter);
    app.use('/api/v1/user',userRouter);
    app.use('/api/v1/admin/collection',collectionRouter);
    app.use('/api/v1/color',colorRouter);
    app.use('/api/v1/product',productRouter);
    app.use('/api/v1/order',orderRouter);
    app.use('/api/v1/series',seriesRouter);
    app.use('/api/v1/model',modelRouter);
    app.use('/api/v1/cart',cartRouter);
    app.use('/api/v1/cartItem',cartItemRouter);
    app.use('/api/v1/comment',commentRouter);
    app.use(errorHandler)
    return app.use('/',(req,res)=>{
        res.send("not ok")
    })
}
export default initRoutes