import { check, validationResult } from 'express-validator'
import User from '../models/User.js'
import { generateID } from '../helpers/token.js'
import { emailRegistro } from '../helpers/emails.js'

const formLogin = (req, res) => {
    res.render('auth/login.pug', {
        pagina: 'Iniciar Sesión'
    })
}

const formRegister = (req, res) => {
    res.render('auth/register.pug', {
        pagina: 'Crear cuenta',
        csrfToken: req.csrfToken(), // CSRF token for the form
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
    const user = await User.create({
        nombre,
        email,
        password,
        token: generateID(),
    })

    // Send confirmation email
    emailRegistro({
        nombre: user.nombre,
        email: user.email,
        token: user.token
    })

    // Show confirmation message

    res.render('templates/message.pug', {
        pagina: 'Cuenta creada',
        mensaje: 'Se ha creado la cuenta correctamente, revisa tu correo para confirmar tu cuenta.'
    })
}

// Function to confirm the user account

const Confirm = async (req, res) => {
    const { token } = req.params

    // Verify if the token is valid
    const user = await User.findOne({ where: { token } })

    // Check a wrong token
    if (!user) {
        return res.render('auth/confirm-account.pug', {
            pagina: 'Error al confirmar la cuenta',
            mensaje: 'Hubo un error al confirmar tu cuenta, intenta de nuevo.',
            error: true
        })
    }

    // Confirm the user account
    user.token = null
    user.confirmado = true
    await user.save()

    return res.render('auth/confirm-account.pug', {
        pagina: 'Cuenta confirmada',
        mensaje: 'La cuenta se ha confirmado correctamente.',
        error: false
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
    formForgotPassword,
    Confirm
}
