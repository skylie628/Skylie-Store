import express from 'express'
import * as  savedProductController from "../controllers/savedProduct.js"
import { savedProductValidate } from '../validators/savedProductValidate.js'
const router = express.Router()
router.post('/',savedProductValidate.add(),savedProductController.addSavedProduct)
router.get('/',savedProductValidate.get(),savedProductController.getSavedProducts)
router.delete('/',savedProductValidate.drop(),savedProductController.deleteSavedProduct)
export default router;