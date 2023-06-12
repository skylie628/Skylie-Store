import express from 'express'
import * as productController from "../controllers/product.js"
import { productValidate } from '../validators/productValidate.js'
const router = express.Router()
router.get('/recommends',productValidate.getRecommend(),productController.getReCommendProducts)
router.get('/:slug',productValidate.getOne(),productController.getProduct)
router.get('/',productValidate.get(),productController.getProducts)
router.post('/',productValidate.add(),productController.addProduct)
router.put('/',productValidate.update(),productController.updateProduct)
router.delete('/',productValidate.drop(),productController.deleteProduct)
export default router;