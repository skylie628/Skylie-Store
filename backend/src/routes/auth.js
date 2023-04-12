import express from 'express'
import * as authController from "../controllers/auth.js"
import { authValidate } from '../validators/authValide.js';
require('express-async-errors');
const router = express.Router()
router.post('/register',authValidate.validateRegister(),authController.register)
router.post('/login',authValidate.validateLogin(),authController.login)
export default router;