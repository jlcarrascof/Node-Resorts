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

const formForgotPassword = (req, res) => {
    res.render('auth/register.pug', {
        pagina: 'Crear cuenta'
    })
}

export {
    formLogin,
    formRegister,
    formForgotPassword
}
