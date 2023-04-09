import express from 'express'
import * as  shippingController from "../controllers/shipping.js"
const router = express.Router()
router.post('/shippingAddress',shippingController.addShippingAddress)
export default router;