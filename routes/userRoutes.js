import express from 'express'
import { formLogin, formRegister, formForgotPassword, Register, Confirm } from '../controllers/userController.js'

const router = express.Router()

router.get('/login', formLogin)

router.get('/register', formRegister)
router.post('/register', Register)

router.get('/confirm/:token', Confirm)

router.get('/forgot-password', formForgotPassword)

export default router
