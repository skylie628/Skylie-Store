import ConflictError from "../errors/ConflictError";
import InvalidParamError from "../errors/InvalidParamError";
import { getSalesPrice } from "./saleProduct";
import db from "../models";
import { v4 as uuidv4 } from 'uuid';
import product from "../models/product";
export const addCartServices = (account_id) => new Promise(async (resolve, reject) => {

    const id = uuidv4();
    console.log(account_id);
    try{
    const response = await db.Cart.findOrCreate({
        where :{account_id,status:'Cart'},
        defaults:{
            id,
            account_id,
            status: 'Cart'
        }
    })
    response[1] ?
    resolve({
        id,
        err: 0,
        msg:  'add Cart successfully' 
    })
    : 
    reject(new ConflictError('Cart đã tồn tại'))}
    catch(err){reject(new InvalidParamError('Thêm dữ liệu không thành công'))}
})


export const getCartByAccountServices = (account_id) => new Promise(async (resolve,reject) =>{
    try{
        const response = await db.Cart.findOne({
            where:{
                account_id,
                status: 'Cart'
            },
            attributes: ['id'],
            raw:true
          });
        console.log(response)
        resolve({
            err: 0,
            data: response
        })
    }
    catch(err){
        reject(err)
    }
})


export const getTotalCartPrice = (cartId,order_id) => new Promise(async (resolve,reject) =>{
    try{
        //get cartItem
        const cartItems = await db.CartItem.findAll({
            where: {
                cart_id:cartId
            },
            nest: true,
            raw: true,
            include: [
                {model: db.ProductOption,
                attributes:['id','product_id'],
                as:'option',
                include:[
                    {model: db.Product,
                    attributes:['id','price'],
                    as: 'product'}
                ]
            }
            ]
          });
          let products = cartItems.map(cartItem=>cartItem.option.product);
          const promises = products.map(product => 
            getSalesPrice(product.id)
            .then(rs => ({...product,campaign:rs})))
            products = await Promise.all(promises); 
          // get Price
          const price = 
          products.map(product =>{return product.campaign?(product.price*(1-product.campaign.value/100)):product.price}).reduce((x,y)=>x+y,0) || 0;
        const orderItems = cartItems.map((item,index) => {
            const campaign_id = products[index].campaign? products[index].campaign.id : null;
            return {
                id: uuidv4(),
                order_id: item.order_id,
                model_id: item.model_id,
                material_id : item.material_id,
                productoption_id: item.productoption_id,
                quantity: item.quantity,
                campaign_id,
                order_id
            }
        });
        console.log(cartItems);
          resolve({
            err: 0,
            price,
            orderItems,
        })
    }
    catch(err){
        reject(err)
    }
})

export const updateCartServices = (info) => new Promise(async (resolve, reject) => {

    const response = await db.Cart.update(
        {...info},
        {where :
            {
                id: info.id
            }
        })
    response[0] ?
    resolve({
        err: 0 ,
        msg: 'Cập nhật Cart thành công' 
    })   
    :
    reject( new InvalidParamError('Không tìm thấy Cart tương ứng'))
})

