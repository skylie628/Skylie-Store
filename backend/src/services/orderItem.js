import { response } from "express";
import ConflictError from "../errors/ConflictError";
import InvalidParamError from "../errors/InvalidParamError";
import db from "../models";
import { v4 as uuidv4 } from 'uuid';
import NotFoundError from "../errors/NotFoundError";

export const addOrderItemsServices = (orderItems) => new Promise(async (resolve, reject) => {

    const id = uuidv4();
    const response = await db.OrderItem.bulkCreate(orderItems)
    console.log(orderItems);
    response[1] ?
    resolve({
        id,
        err: 0,
        msg:  'add orderItems successfully' 
    })
    : 
    reject(new ConflictError('Color đã tồn tại'))
})

