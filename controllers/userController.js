import { check, validationResult } from 'express-validator'
import User from '../models/User.js'
import { generateID } from '../helpers/token.js'

const formLogin = (req, res) => {
    res.render('auth/login.pug', {
        pagina: 'Iniciar Sesión'
    })
}

const formRegister = (req, res) => {
    res.render('auth/register.pug', {
        pagina: 'Crear cuenta',
    })
}

const Register = async (req, res) => {
    // Validate the request body
    await check('nombre').notEmpty().withMessage('El nombre es obligatorio').run(req)
    await check('email').isEmail().withMessage('No tiene formato de correo electrónico').run(req)
    await check('password').isLength({ min: 6 }).withMessage('El password debe tener al menos 6 caracteres').run(req)
    await check('repetir_password').equals(req.body.password).withMessage('Los passwords no son iguales').run(req)

    let result = validationResult(req)

    console.log(result)

    // Check if there are validation errors
    if (!result.isEmpty()) {
        // If there are errors, return the registration form with error messages
        return res.render('auth/register.pug', {
            pagina: 'Crear cuenta',
            errores: result.array(),
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }

    // Verify if the user already exists

    const { nombre, email, password } = req.body

    const existUser = await User.findOne({
        where: { email }
    })

    if (existUser) {
        return res.render('auth/register.pug', {
            pagina: 'Crear cuenta',
            errores: [ { msg: 'El Usuario ya está registrado.' } ],
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }

    // Create the user
    await User.create({
        nombre,
        email,
        password,
        token: generateID(),
    })

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
