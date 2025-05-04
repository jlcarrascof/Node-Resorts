import { check, validationResult } from 'express-validator'
import User from '../models/User.js'

const formLogin = (req, res) => {
    res.render('auth/login.pug', {
        pagina: 'Iniciar Sesión'
    })
}

const formRegister = (req, res) => {
    res.render('auth/register.pug', {
        pagina: 'Crear cuenta'
    })
}

const Register = async (req, res) => {
    // Validate the request body
    await check('nombre').notEmpty().withMessage('El nombre es obligatorio').run(req)

    let result = validationResult(req)

    const user = await User.create(req.body)

    res.json(user)
}

const formForgotPassword = (req, res) => {
    res.render('auth/forgot-password.pug', {
        pagina: 'Recuperar contraseña'
    })
}

export {
    formLogin,
    formRegister,
    Register,
    formForgotPassword
}
