import { response } from "express";
import ConflictError from "../errors/ConflictError";
import InvalidParamError from "../errors/InvalidParamError";
import db from "../models";
import { v4 as uuidv4 } from 'uuid';
const {Op} = require('sequelize');
export const addCommentServices = (info) => new Promise(async (resolve, reject) => {

    const id = uuidv4();
    const response = await db.Comment.findOrCreate({
        where :info,
        defaults:{
            id,
            ...info
        }
    })
    response[1] ?
    resolve({
        id,
        err: 0,
        msg:  'add comment successfully' 
    })
    : 
    reject(new ConflictError('Comment đã tồn tại'))
})


export const getCommentsServices = ({product_id,account_id}) => new Promise(async (resolve, reject) => {
    const response = await db.Comment.findAll({
        where :{
        product_id
        },
        include: [
            {
                model: db.Account,
                attributes: ['firstname','lastname'],
                as:'account',
            }
        ],
        raw:true,
        nest: true
    })
    console.log(response)
    const enableComment = await checkAllowServices(account_id,product_id);
    resolve({
        data: {comments: response,enableComment},
        err: 0,
    }) 
})

export const updateCommentServices = (commentInfo) => new Promise(async (resolve, reject) => {

    const response = await db.Comment.update(
        {...commentInfo},
        {where :
            {
                id: commentInfo.id
            }
        })
    response[0] ?
    resolve({
        err: 0 ,
        msg: 'update comment successfully' 
    })   
    :
    reject( new InvalidParamError('Không tìm thấy comment tương ứng'))
})


export const deleteCommentServices = ({id}) => new Promise(async (resolve, reject) => {
    console.log('id delete',id);
    const response = await db.Comment.destroy(
        {where :
            {
                id
            }
        })
        response ? resolve({
        err: 0,
        msg: 'delete comment successfully'})
        :
        reject( new InvalidParamError('Không tìm thấy comment tương ứng'))   
})


export const checkAllowServices = (account_id,product_id) => new Promise(async (resolve, reject) => {
    const orderCheck = await db.OrderItem.findOne(
        {
        where:{
            ['$option.product_id$']: { [Op.eq]: product_id },
            ['$order.cart.account_id$']: { [Op.eq]: account_id }
        },
        include :[{
            model: db.ProductOption,
            as: 'option',
            include:[{
                model: db.Product,
                as:'product',
            }]},
            {
                model: db.Order,
                attributes:['id'],
                as: 'order',
                include:[{
                    model: db.Cart,
                    as:'cart',
                    attributes:['id','account_id'],
                }
            ]
        }]
}
        )

    const commentCheck = await db.Comment.findOne({
        where:{
            product_id,
            account_id
        }
    })
    //only check if there are order and not have comment yet
    const rst = orderCheck&&!commentCheck ? 1:0
        console.log('rs là',response);
     resolve(rst);
})
