import { response } from "express";
import ConflictError from "../errors/ConflictError";
import InvalidParamError from "../errors/InvalidParamError";
import db from "../models";
import { v4 as uuidv4 } from 'uuid';
import NotFoundError from "../errors/NotFoundError";

export const addOrderItemsServices = (orderItems) => new Promise(async (resolve, reject) => {

    const id = uuidv4();
    console.log('orderItem la',orderItems);
    let response =null;
    if(orderItems.length>1){
    response = await db.OrderItem.bulkCreate(orderItems)}
    else if (orderItems.length==1) {
        response = await db.OrderItem.create(orderItems[0])
    }
    response ?
    resolve({
        id,
        err: 0,
        msg:  'add orderItems successfully' 
    })
    : 
    reject(new ConflictError('OrderItem đã tồn tại'))
})

