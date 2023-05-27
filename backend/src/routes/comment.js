import express from 'express'
import * as  commentController from "../controllers/comment.js"
import { commentValidate } from '../validators/commentValidate.js'
const router = express.Router()
router.post('/',commentValidate.add(),commentController.addComment)
router.get('/',commentValidate.get(),commentController.getComments)
router.get('/',commentValidate.checkAllow(),commentController.getComments)
router.put('/',commentValidate.update(),commentController.updateComment)
router.delete('/',commentValidate.drop(),commentController.deleteComment)
export default router;