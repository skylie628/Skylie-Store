import express from 'express'
import * as collectionController from "../controllers/collection.js"
import { collectionValidate } from '../validators/collectionValidate.js'
const router = express.Router()
router.get('/',collectionValidate.get(),collectionController.getCollections)
router.post('/',collectionValidate.add(),collectionController.addCollection)
router.put('/',collectionValidate.update(),collectionController.updateCollection)
router.delete('/',collectionValidate.drop(),collectionController.deleteCollection)
export default router;