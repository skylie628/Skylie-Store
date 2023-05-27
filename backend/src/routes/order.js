import express from 'express'
import * as  orderController from "../controllers/order.js"
import { orderValidate } from '../validators/orderValidate.js'
const router = express.Router()
router.get('/:order_id',orderValidate.getOne(),orderController.getOrder)
router.post('/',orderValidate.add(),orderController.addOrder)
router.get('/',orderValidate.get(),orderController.getOrders)
router.put('/',orderValidate.update(),orderController.updateOrder)
router.delete('/',orderValidate.drop(),orderController.deleteOrder)
export default router;