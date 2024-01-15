// extrae el paquete y lo asigna a la variable
//const express = require('express') 
import express from "express";
import usuarioRoutes from './routes/usuarioRoutes.js'
import db from './config/db.js'
// crear la app quer contiene toda la informacion del servidor que estamos creando
const app = express()


app.use(express.urlencoded({extended:true}))

// conexion a la base de datos de la base de datos

try {
    await db.authenticate();
    // sincroniza los cambios con el modelo
    db.sync()
    console.log('Conexion correcta ala Base de Datos')
} catch (error) {
    console.log(error);
}

// routing

app.use('/auth',usuarioRoutes)

// habilitar pug

app.set('view engine','pug')
app.set('views','./views')

// carpeta pubica

app.use(express.static('public'))

// Definir un puerto y arrancar el proyecto es lo unico necesario

const port = 3000;

app.listen(port, ()=> {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})

