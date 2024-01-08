## apuntes Generales
#### Creacion y ejecucion de un proyecto
- Dependencias
  Las dependencias son los paquetes que utlizaremos en un proyecto, existen dos tipos las dependencias de desarrollo y las normales teniendo como principal diferencia el hecho de que las normales se requieren en la ejecucion las otras no.

  las dependencias se declaran en el archivo **package.json** que se crea automaticamente al ejecutar el comando 
  `npm init` lo cual creara el archivo donde se almacenan las dependencias.

  En caso que instalemos dependencias al proyecto, se creara un archivo llamado **package-lock.json** el  cual es recomendable nunca modificar.

 - Ejecucion 
   Para la ejecucion de codigo utilizamos el comando ``npm run start`` con el cual ejecutamos cualquiera de los scripts que tengamos agregados en nuestro package.js
   sin embargo esto no es muy eficiente ya que hay que ejecutar la terminal, para que esto se realize de manera automatica instalmos una dependencia que se llama  **nodemon**
   con el comando: **npm i -D nodemon** esto al ejecturarse sirve como un live server y espera cada cambio para ejecturar

 - Implementacion
   Para implementar nuestro proyecto de express tenemos la estructura de:
   crear una variable y asignarle el paquete de express a esta de la siguiente forma 
   ``const express = require('express')``
   luego se crea la app ``const app = express()``

   y luego podemos empezar a hacer el Routing 

   Tambien vamos a habilitar los modulos de javascript para esto agregamos la linea 
   ``"type": "module"`` en el json.config lo cual nos permite instanciar la app como si fuera javascript nativo de la forma: ``import express  from "express";``

   - Resumen del capitulo
    Que aprendimos en el capitulo de Hoy?
    * Es importante aprenderse los comandos basicos como el npm i ....
    * La carpeta node_modules puede ocupar mucho espacio... por lo que es mejor borrarla e instalarla luego
    * Las dependencias tienen sus propias dependencias y es mejor no tocarlas
    * podemos usar dependencias de desarrollo para hacernos mas facil el trabajo, como nodemon
    * para trabajar en node debemos crear un script y luego colocarlo en el node.module
    * en los scripts debo declarar una variable que contenga los paquetes de exprees y luego intanciarla
    * Node es interesante

Lo demas sigue perdido en el caos, esto esto es Dorohedoro!!



### Routing 

las rutas se pueden separar del index en un archivo independiente el cal funciona como una agrupacion de rutas 
el usar **get** limita la ruta a una url, para poder usar las agrupaciones debemos utilizar **use** 


se pueden agrupar las peticiones a una ruta en especifico de la forma


```javascript
  // englobar tipos de rutas

  router.route('/')
      .get(function(req,res){
          res.json({msg:"Hola Mundo en express"})
      })
      .post(function(req,res){
          res.json({msg:'Respuesta del tipo Post'})
      })
```

### Template Engines  y MVC

Son motores de plantillas son tercnologias que nos permiten crear el codigo html para mostrr informacion contenida en variables

Pug, Handlebars,EJS son las mas populares siendo Pug es lo que utilizaremos 

ventajas de los template engines
- Renderizado en el servidor
- Simplifica mostrar los datosd

Desventajas
- Las interacciones no son tan dinamicas
- el servidor imprime todo el html esto consume mas recursos 

para mostrar una vista se utiliza **.render**

pug tiee las siguientes caracteristicas

- se coloca solo el nombre de la etiqueta seguido del contenido como h2 hola
- al tabular indicamos que son hijos de la etiqueta anterior
- se pueden agregar clases 


- MVC 

Patron de arquitectura de software que permite la separacion de obligaciones de cada pieza del codigo, enfatizando la separacion del backend con el frontend 

Modelo: Es el encargado de las interacciones con la base de datos, consultando la base de datos sin mostrar la informacion

Vista: se encarga de todo lo que se ve en pantalla 

controlador: el controlador es la comunicacion entre el modelo y la vsita, es quien se encarga de llamar un modelo determinado segun sea necesario

router en mvc es el encargdo de registrar todas las URLS  o endpoints que va utilizar el usuario


- Implementacion de controles 

solo se puede tener un export default por archivo, en caso de los controladores los nombramos como nombre de objeto

   Resumen del capitulo
   que aprendimos en el capitulo anterior ?
   -el routing y el mvc son mejores amigos
   -Debemos tener cuidado con los export
   -los template engines son sencillos y practicos 

  lo demas sigue perdido en el caos!!

  ### Tailwindcss

   para instalar tailwind se necesitan las siguientes dependencias 

   ``npm install -D tailwindcss autoprefixer postcss postcss-cli``

luego debemos decirle a node donde encontrar la ruta de archivos  en el index . js

con la linea: ``app.use(express.static('public'))``

pero tambien debemos utilizar la siguiente linea de comando al final

``npx tailwindcss init -p``

lo cual nos crea dos archivos y en el config.js debemos decirle donde esta el ccss

para poder escalar bien esto utilizamos este truco
``content: ["./views/**/*.pug",],`` que indica que cualquier archivo en esas rutas contal y tenga la terminacon.pug 

para compilarlo debemos agregarlo a nuestro package.json de la siguiente forma

``"css" : "postcss public/css/tailwindcss.css - o public/css/app.css"``

lo cual le dice que busque el archivo tailwindcss.css y lo compile en el archivo llamado app


a mi me da un error medio afrodisiaco respecto al tipo de archivo ya que esta version de node no soporta cjs asi que me toco ponerle mjs

para re utilizar componentes se puede extender codigo de otro archivo con 

extends ../...

pero se debe definir por medio de un bloque de la forma 

        ```
        main(class="mx-auto container mt-10 px-2")
            block contenido
        ```
ese bloque queda libre para que otro template use ese contenido

para el tailwind debo poner --watch para que no tener que compilar cada vez que realice un cambio

para embeber variables del controlador usamos  la sintaxis #{variable}