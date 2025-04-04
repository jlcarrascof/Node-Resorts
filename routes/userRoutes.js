import express from 'express'
import { formLogin } from '../controllers/userController.js'

const router = express.Router()

router.get('/login', formLogin)

export default router
