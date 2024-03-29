import express from 'express'
import { verifyToken } from '../middlewares/verifyToken.js'
import * as userController from "../controllers/user.js"
import { userValidate } from '../validators/userValidate.js'
const router = express.Router()
router.use(verifyToken)
router.get('/getCurrent',userController.getUser)
router.put('/',userValidate.validateUpdateUser(),userController.updateUser)
export default router;