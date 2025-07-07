import express from 'express'
import { formLogin, formRegister, formForgotPassword, Register, Confirm, resetPassword } from '../controllers/userController.js'

const router = express.Router()

router.get('/login', formLogin)

router.get('/register', formRegister)
router.post('/register', Register)

router.get('/confirm/:token', Confirm)

router.get('/forgot-password', formForgotPassword)
router.post('/forgot-password', resetPassword)

export default router
