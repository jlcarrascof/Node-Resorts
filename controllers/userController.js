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

const Register = (req, res) => {
    console.log("Registering user...")
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
