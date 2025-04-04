const formLogin = (req, res) => {
    res.render('auth/login.pug', {
        autenticado: false
    })
}

export {
    formLogin
}
