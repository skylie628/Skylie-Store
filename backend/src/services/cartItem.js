import ConflictError from "../errors/ConflictError";
import InvalidParamError from "../errors/InvalidParamError";
import db from "../models";
import { getSalesPrice } from "./saleProduct";
import { getProductImage } from "../utils/getProductImage";
import { v4 as uuidv4 } from 'uuid';
export const addCartItemServices = (info) => new Promise(async (resolve, reject) => {

    const id = uuidv4();
    console.log(info);
    const [instance,created] = await db.CartItem.findOrCreate({
        where: {...info},
        defaults:{
            id,
            ...info,
            quantity:1,
        }
    })
    if(created){
    resolve({
        id,
        err: 0,
        msg:  'thêm sản phẩm vào cart thành công' 
    })
}
    else {
        console.log('instance value là',instance.dataValues);
        updateCartItemServices({id: instance.dataValues.id,quantity: instance.dataValues.quantity+1}).then(
            rst=> resolve({
                id,
                err: 0,
                msg:  'thêm sản phẩm vào cart thành công' 
            })
        )
        .catch(err => reject( new InvalidParamError('Không tìm thấy item tương ứng')))
    }

})


export const getCartItemsServices = ({cart_id}) => new Promise(async (resolve, reject) => {
    const response = await db.CartItem.findAll({
        where :{
            cart_id
        },
        attributes: ['id','quantity'],
        order: [['createdAt', 'DESC']],
        raw:true,
        nest:true,
        include:[
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
                as:'option',}
        ]
    })
    let promises = response.map(product => 
        getProductImage(`Products/Medium/straight image thumbnail/${product.option.straight_img_thumbnail}.png`)
        .then(rst => ({...product,option:{...product.option,straight_img_thumbnail:rst[0]}}))
        )
    let fetchedResponse = await Promise.all(promises); 
    
        promises = fetchedResponse.map(cartItem => 
            getSalesPrice(cartItem.option.product.id)
            .then(rs => ({...cartItem,campaign:rs})))
        fetchedResponse = await Promise.all(promises); 
    resolve({
        data: fetchedResponse,
        err: 0,
    }) 
})


export const updateCartItemServices = (info) => new Promise(async (resolve, reject) => {
    console.log('info là',info);
    const response = await db.CartItem.update(
        {...info},
        {where :
            {
                id: info.id
            }
        })
    response[0] ?
    resolve({
        err: 0 ,
        msg: 'Cập nhật item thành công' 
    })   
    :
    reject( new InvalidParamError('Không tìm thấy item tương ứng'))
})


export const deleteCartItemServices = (info) => new Promise(async (resolve, reject) => {

    const response = await db.CartItem.destroy(
        {where :
            {
                id: info.id
            }
        })
        response ? resolve({
        err: 0,
        msg: 'xóa cartItem thành công'})
        :
        reject( new InvalidParamError('Không tìm thấy cart Item tương ứng'))   
})




