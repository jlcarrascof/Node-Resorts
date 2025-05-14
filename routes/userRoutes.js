import express from 'express'
import { formLogin, formRegister, formForgotPassword, Register } from '../controllers/userController.js'

const router = express.Router()

router.get('/login', formLogin)

router.get('/register', formRegister)
router.post('/register', Register)

router.get('/confirm', confirm)

router.get('/forgot-password', formForgotPassword)

export default router
