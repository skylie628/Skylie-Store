import express from 'express'
import * as  shippingController from "../controllers/shippingAddress.js"
const router = express.Router()
router.post('/',shippingController.addShippingAddress)
router.get('/',shippingController.getShippingAddresses)
router.put('/',shippingController.updateShippingAddress)
router.delete('/',shippingController.deleteShippingAddress)
export default router;