import express from 'express'
import * as modelController from "../controllers/model.js"
import { modelValidate } from '../validators/modelValidate.js'
const router = express.Router()
router.get('/',modelValidate.get(),modelController.getModels)
export default router;