import nodemailer from 'nodemailer'

const emailRegistro = async(datos) => {
    // Looking to send emails in production? Check out our Email API/SMTP product!

    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const { email, nombre, token } = datos

    // Send email

    await transport.sendMail({
        from: 'Global Realtors - Servicios Inmobiliarios',
        to: email,
        subject: 'Confirma tu cuenta en Global Realtors',
        text: 'Confirma tu cuenta en Global Realtors',
        html: `<p>Hola ${nombre}, comprueba tu cuenta en Global Realtors, C.A.</p>

            <p>Tu cuenta ya está lista, solo debes confirmarla en el siguiente enlace:</p>

            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirm/${token}">Confirmar cuenta</a>

            <p>Si tú no creaste esta cuenta, puedes ignorar este mensaje.</p>
        `
    })
}

const emailOlvidoPassword = async(datos) => {
    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const { email, nombre, token } = datos

    // Send email

    await transport.sendMail({
        from: 'Global Realtors - Servicios Inmobiliarios',
        to: email,
        subject: 'Restablece tu password en Global Realtors',
        text: 'Restablece tu password en Global Realtors',
        html: `<p>Hola ${nombre}, has solicitado restablecer tu password en Global Realtors, C.A.</p>

            <p>Sigue el siguiente enlace para generar un password nuevo:</p>

            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/forgot-password/${token}">Restablecer password</a>

            <p>Si tú no solicitaste este cambio de password, puedes ignorar este mensaje.</p>
        `
    })
}

export {
    emailRegistro
}
