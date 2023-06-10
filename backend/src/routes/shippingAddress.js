import express from 'express'
import * as  shippingController from "../controllers/shippingAddress.js"
import { shippingAddressValidate } from '../validators/shippingAddressValidate.js'
const router = express.Router()
router.post('/',shippingAddressValidate.add(),shippingController.addShippingAddress)
router.get('/',shippingAddressValidate.get(),shippingController.getShippingAddresses)
router.get('/shippingFee',shippingAddressValidate.getFee(),shippingController.getShippingFee)
router.put('/setDefault',shippingAddressValidate.setDefault(),shippingController.setDefaultShippingAddress)
router.put('/',shippingAddressValidate.update(),shippingController.updateShippingAddress)
router.delete('/',shippingAddressValidate.drop(),shippingController.deleteShippingAddress)
export default router;