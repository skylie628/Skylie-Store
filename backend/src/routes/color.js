import express from 'express'
import * as colorController from "../controllers/color.js"
import { colorValidate } from '../validators/colorValidate.js'
const router = express.Router()
router.get('/',colorValidate.get(),colorController.getColors)
router.post('/',colorValidate.add(),colorController.addColor)
router.put('/',colorValidate.update(),colorController.updateColor)
router.delete('/',colorValidate.drop(),colorController.deleteColor)
export default router;