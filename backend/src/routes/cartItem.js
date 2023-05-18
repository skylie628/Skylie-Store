import express from 'express'
import * as  cartItemController from "../controllers/cartItem.js"
import { cartItemValidate } from '../validators/cartItemValidate.js'
const router = express.Router()
router.post('/',cartItemValidate.add(),cartItemController.addCartItem)
router.get('/',cartItemValidate.get(),cartItemController.getCartItems)
router.put('/',cartItemValidate.update(),cartItemController.updateCartItem)
router.delete('/',cartItemValidate.drop(),cartItemController.deleteCartItem)
export default router;