const formLogin = (req, res) => {
    res.render('auth/login.pug', {

    })
}

const formRegister = (req, res) => {
    res.render('auth/register.pug', {
        pagina: 'Crear cuenta'
    })
}

export {
    formLogin,
    formRegister
}
