import express from 'express'
import { formLogin, formRegister, formForgotPassword, Register, Confirm, resetPassword } from '../controllers/userController.js'
import { check } from 'express-validator'

const router = express.Router()

router.get('/login', formLogin)

router.get('/register', formRegister)
router.post('/register', Register)

router.get('/confirm/:token', Confirm)

router.get('/forgot-password', formForgotPassword)
router.post('/forgot-password', resetPassword)

// Save the new password
router.get('/forgot-password/:token', checkToken)
router.post('/forgot-password/:token', newPassword)

export default router
