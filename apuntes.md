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

### Template Engines 

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