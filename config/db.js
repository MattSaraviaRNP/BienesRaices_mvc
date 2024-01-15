import Sequelize from 'sequelize'
// esto es para indicarle que hay que usar variables de entorno y donde puede encontrarlas
import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

const db = new Sequelize(process.env.BD_NOMBRE,process.env.BD_USER,process.env.BD_PASS, {
    host: process.env.BD_HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle:10000
    },
    operatorAliases:false
    
});

export default db;