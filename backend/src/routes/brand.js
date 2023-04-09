import express from 'express'
import * as brandController from "../controllers/brand.js"
const router = express.Router()
router.get('/',brandController.getAllBrands)
router.get('/:brandId/brandmodels/',brandController.getAllBrandModelsByBrand)
export default router;