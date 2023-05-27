import express from 'express'
import * as seriesController from "../controllers/series.js"
import { seriesValidate } from '../validators/seriesValidate.js'
const router = express.Router()
router.get('/',seriesValidate.get(),seriesController.getSeries)
export default router;