import express from 'express'
import * as  cartController from "../controllers/cart.js"
import {cartValidate } from '../validators/cartValidate.js'
const router = express.Router()
//router.post('/',cartValidate.add(),cartController)
router.get('/',cartValidate.get(),cartController.getCart)
//router.put('/',cartValidate.update(),cartController.updateCartItem)
//router.delete('/',cartValidate.drop(),cartController.deleteCartItem)
export default router;