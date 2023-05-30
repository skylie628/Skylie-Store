import ConflictError from "../errors/ConflictError";
import InvalidParamError from "../errors/InvalidParamError";
import { sequelize } from "../models";
import db from "../models";
import { v4 as uuidv4 } from 'uuid';
import { getShippingAddressServices } from "./shippingAddress";
import { getProductImage } from "../utils/getProductImage";
import { addOrderItemsServices } from "./orderItem";
import { addCartServices, getTotalCartPrice, updateCartServices } from "./cart";
import { Model } from "sequelize";
const {Op} = require('sequelize');
export const addOrderServices = (info) => new Promise(async (resolve, reject) => {
    const t = await sequelize.transaction();
    const id = uuidv4();
    console.log('info order la',info);
    //get all inco
    //calculate total product price
    const  {price,orderItems} = await getTotalCartPrice(info.cart_id,id)
    console.log('price là',price)
    //get shipping address infomation
    const shippingAddress = getShippingAddressServices(info.shipping_address_id);
    //calculate shipping fee
    let shippingfee = 30000;
    const quantity = orderItems.reduce((x,y)=> (x+ y.quantity),0);
    if(quantity>2){
        shippingfee = 0;
    }
    if (shippingAddress.province == 72){
        shippingfee = 15000
    }

    // calculate total
    const total = price + shippingfee;


    //create order
   const response = await db.Order.findOrCreate({
        where :{cart_id:info.cart_id},
        defaults:{
            id,
            status: info.status,
            shipping_address_id: info.shipping_address_id,
            cart_id: info.cart_id,
            total_price: total,
            status:'Created'
        }
    })

    console.log('after creating order')
    
    if(response[1]){
    //renewed cart
    await updateCartServices({id:info.cart_id,status:'Order'});
    addCartServices(info.account_id)
    
    //add CartItem
    await addOrderItemsServices(orderItems);
    resolve({
        id,
        err: 0,
        msg:  'add order thành công' 
    })
   // const itemsInfo = optionsInfo.map(option => {})
}
    else{
    reject(new ConflictError('order đã tồn tại'))}
})


export const getOrdersServices = ({account_id}) => new Promise(async (resolve, reject) => {
    console.log("account_id là",account_id)
    let response = await db.Order.findAll({
        nest:true,
        where: {
            '$cart.account_id$': { [Op.eq]: account_id }
          },
        include: [
            {
                model: db.Cart,
                as:'cart',
                attributes:['id','account_id'],
            },
            {
                model: db.OrderItem,
                as:'orderItem',
                raw:true,
                nested: true,
                nest:true,
                include: [
                    {model:db.BrandModel,
                    attributes: ['id','name'],
                    as:'model'},
                    {model :db.Material,
                        attributes: ['id','name'],
                        as:'material'},
                    {model :db.ProductOption,
                        attributes: ['id','name','straight_img_thumbnail'],
                        include : [
                            {
                                model: db.Product,
                                attribute: ['id','name','price','slug'],
                                as: 'product'
                            }
                        ],
                        as:'option',},
                        {
                            model: db.SaleCampaign,
                            as: 'saleCampaign'
                        }
                ]
            }
        ],
    })
    response = JSON.parse(JSON.stringify(response));
    console.log('rs order la',response);
    const promises = response.map((order,index) =>{
        const innerPromise = order.orderItem.map(orderItem => 
            getProductImage(`Products/Medium/straight image thumbnail/${orderItem.option.straight_img_thumbnail}.png`)
            .then(rst => ({...orderItem,option:{...orderItem.option,straight_img_thumbnail:rst[0]}}))
            )
        return Promise.all(innerPromise).then(rs => {return {...order,orderItem:rs}})
    })
    const fectchresult = await Promise.all(promises)
    resolve({
        data: fectchresult,
        err: 0,
    }) 
})

export const getOneOrderServices = ({order_id}) => new Promise(async (resolve, reject) => {
    let response = await db.Order.findOne({
        nest:true,
        where: {
            id: order_id
          },
        include: [
            {
                model: db.OrderItem,
                as:'orderItem',
                raw:true,
                nested: true,
                nest:true,
                include: [
                    {model:db.BrandModel,
                    attributes: ['id','name'],
                    as:'model'},
                    {model :db.Material,
                        attributes: ['id','name'],
                        as:'material'},
                    {model :db.ProductOption,
                        attributes: ['id','name','straight_img_thumbnail'],
                        include : [
                            {
                                model: db.Product,
                                attribute: ['id','name','price','slug'],
                                as: 'product'
                            }
                        ],
                        as:'option',},
                        {
                            model: db.SaleCampaign,
                            as: 'saleCampaign'
                        }
                ]
            },
            {model:db.ShippingAddress,
                as:'shippingAddress'},
        ],
    })
    let order = JSON.parse(JSON.stringify(response));
    console.log('rs order la',response);
    const innerPromise = order.orderItem.map(orderItem => 
            getProductImage(`Products/Medium/straight image thumbnail/${orderItem.option.straight_img_thumbnail}.png`)
            .then(rst => ({...orderItem,option:{...orderItem.option,straight_img_thumbnail:rst[0]}}))
            )
    const fetchOrder = await Promise.all(innerPromise).then(rs => {return {...order,orderItem:rs}})

    resolve({
        data: fetchOrder,
        err: 0,
    }) 
})

export const updateOrderServices = (orderInfo) => new Promise(async (resolve, reject) => {

    const response = await db.Order.update(
        {...orderInfo},
        {where :
            {
                id: orderInfo.id
            }
        })
    response[0] ?
    resolve({
        err: 0 ,
        msg: 'Update Order thành công' 
    })   
    :
    reject( new InvalidParamError('Không tìm thấy Order tương ứng'))
})


export const deleteOrderServices = ({id}) => new Promise(async (resolve, reject) => {
    console.log('detete id là',id)
    const response = await db.Order.update(
        {status:'Cancel'},
        {where :
            {
                id,
                status:'Created'
            }
        })
    response[0] ?
    resolve({
        err: 0 ,
        msg: 'Update Order thành công' 
    })   
    :
    reject( new InvalidParamError('Không tìm thấy Order tương ứng'))   
})




