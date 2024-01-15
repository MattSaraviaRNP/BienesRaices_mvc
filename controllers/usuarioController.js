import { check, validationResult } from 'express-validator'

import Usuario from "../models/Usuario.js"

const formularioLogin = (req, res) => {
    res.render('auth/login', {
        pagina: 'Iniciar Sesion'
    })

}

const formularioRegistro = (req,res) => {
    res.render('auth/registro', {
        pagina: 'Crear Cuenta'
    })

}

const registrar = async (req,res) => {
    // validacion
    await check('nombre').notEmpty().withMessage('El Nombre no puede ir vacio').run(req)
    await check('email').isEmail().withMessage('eso no parece un email').run(req)
    await check('password').isLength({ min: 6 }).withMessage('el password debe ser de almenos 6 caracteres').run(req)
    

    let resultado = validationResult(req)
    
    res.json(resultado.array())

    const usuario = await Usuario.create(req.body)

    res.json(usuario)

}




const formularioOlvidePassword = (req,res) => {
    res.render('auth/olvide-password', {
        pagina: 'Recupera tu acceso a Bienes Raices'
    })

}


export {
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioOlvidePassword
}