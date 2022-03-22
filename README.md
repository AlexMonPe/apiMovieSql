# Api Restfull de Peliculas

## Índice

- [Api Restfull de Peliculas](#Api-Restfull-de-Peliculas)
  - [Stacks utilizados 🛠](#Tech-Stack)
  - [Requisitos 📋](#Descripcion-y-usabilidad-)
  - [Como instalarlo 🥷](#Instalacion-)
  - [Tareas Pendientes 🧙](#Tareas-pendientes-)
  - [Como Ayudar🤝](#Como-ayudar)

## Tech Stack 🛠

Se han utilizado las siguientes tecnologías:

<p align="left">     
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a>
  <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> 
  <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> 
  <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> 
  <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> 
  <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a>
  
</a> 
</p>
Además se ha hecho uso de las siguientes librerías/herramientas/tecnologías para el desarrollo del proyecto: framework: Nodejs, ODM: Mongoose, librería: JsonWebToken, librería: express,librería para desarrollo: nodemon, base de datos: MongoDB, gestores BD UI: Robo3T, MongoDB Compass, librería hash password bcrypt,librería para variables de entorno: dotenv,herramienta para alojar el repo: github, herramienta de despliegue de proyecto Node: heroku. 

## Descripción y usabilidad 📋

Cuarto proyeecto del bootcamp en GeeksHubs sobre BackEnd dónde desde producción nos piden que realicemos un API Restfull en NodeJs sobre peliculas, donde haya un CRUD de usuarios, alquileres y peliculas, he creado el api con tres entidades diferenciadas: Movies, Rent y Users.Se ha utilizado el patron MVC por entidades (movies,rent,users)para la organización del proyecto.
Para la funcionalidad del API es imprescindible configurar las variables de entorno, hay una plantilla en https://github.com/AlexMonPe/apiRestfullMovies, solo hay que completar las variables y quitar la extension .template.
Se han definido los siguientes endpoints dónde los usuarios pueden acceder para consumir el API:

- /movies
- /users
- /users/auth
- /rent

El primer paso para consumir el api es entrar en /users/auth para crear un usuario, los campos a introducir en el headers son {name, email, password}, en el caso de no poner una clave adicional de role, se le asignara por defecto el role de 'Client'. Si no se introducen esas claves, no conseguirás crear dicho usuario, en caso contrario, el sistema te dará un token con el que podrás utilizar la mayoría de funcionalidades de el API, ya que para consumirlo es indispensable estar registrado e ir poniendo el token en el header para consultar más endpoints. En la creación de usuario el valor de password por seguridad se hasheará automáticamente.
En el endpoint de /users tiene la siguiente casuística:
  - GET users es el único endpoint junto con post de users que no es necesario el registro previo. Se puede filtrar Users por cualquier clave poniendo query params en el URI, por ejemplo: https://api-restfull-movies-nodejs.herokuapp.com/Users?name=alex
<br>La nomenclatura del objeto JSON para que sirva de ejemplo para el post es:
        <br>{<br>
        "id": "1238743975", <br>
        "name": "[yourname]",<br>
        "email": "[name@domain.com]",<br>
        "password": "[password]"<br>
        }<br>
  Hay que tener en cuenta que tanto el id como el role, se genera automáticamente.
  - GET by Id es necesario estar registrado, es necesario introducir en la uri el ID User como path.params a buscar. Ejemplo : https://api-restfull-movies-nodejs.herokuapp.com/Users/1238743975 <-- Id user.
  - DELETE y PATCH exige tener role 'administrator', que se verificará mediante el token. Para hacer DELETE es necesario introducir el id del user a eliminar en la uri como path params y con PATCH requiere poner en el body cualquiera de las clave: valor que desees modificar junto con el ID del user a modificar en la uri como path params.
Endpoint  /movies:
Nomenclatura JSON de una Movie:<br> 
  {<br>
        "id": "5345435534"<br>
        "title": "intocable",<br>
        "year": 2011,<br>
        "genre": "comedia",<br>
        "actor": "omar sy",<br>
        "duration": 109<br>
    }<br>
  Al igual que en otras entidades, el id se genera automáticamente
  - GET Movies se puede consultar sin estar registrado, se puede filtrar por cualquiera de las claves en query params, se puede filtrar por más claves, pero el filtrado es por AND y devolverá las Movies que cumplan todas las condiciones. Ejemplo: https://api-restfull-movies-nodejs.herokuapp.com/movies?title=intocable&year=2011
  - GET by id y POST solo requiere estar registrado y añadir el id en el path param de la uri. Ejemplo: https://api-restfull-movies-nodejs.herokuapp.com/movies/5345435534 <-- Id Movie como path param.
  - DELETE y PATCH requiere ser administrador, y como en users, para el DELETE es necesario añadir el id de la movie como path params, y para PATCH introducir una o varias clave: valor que quieras modificar en el body.
Endpoint /rents:
  - Por motivos formativos y de aprendizaje de momento están todos las peticiones permitidas sin necesidad de estar registrado, para que sea más liviano testearlos manualmente, muy posiblemente se cambie en el futuro. En el POST al crear un alquiler es obligatorio introducir un idMovie y un idUser ya existentes para generar el alquiler, por defecto se añade la fecha de la creación del alquiler, salvo que indiques en el body una especifica, como por ejemplo el día de devolución. Con .populate conseguimos mostrar en un GET de rent o en el POST de rent que nos devuelva el objeto y usuario completo para poder visualizar de manera más cómoda el alquiler de la película y el usuario que la ha alquilado.

El proyecto se ha publicado en HEROKU: https://api-restfull-movies-nodejs.herokuapp.com/

### Base de datos

He utilizado la base de datos de Mongo Atlas para que persistan los datos en la nube, sólo tienes que añadir la URI de tu base de datos en la variable DB_URI en tu fichero .env. Para probar la funcionalidad de la API de manera muy sencilla y cómoda, he creado un pequeño script llamado seed.js para poblar mínimamente la base de datos, por lo que recomiendo que hagas este paso antes de empezar a consumir el API.
Para poblarla solo necesitar ejecutar el siguiente comando:

- npm run seedata

## Comandos útiles iniciales

- npm run start  // Para levantar el servidor
- npm run seedata // Para poblar la BD

## Instalación 🥷

Para poder consumir mi API es necesario lo siguiente:
- Acceder al API publicada en https://api-restfull-movies-nodejs.herokuapp.com/
- Acceder al endpoint /users/auth para registrarse.
- Revisar documentación para saber que endpoints existen y el resultado esperado
- en caso de clonar el repo, en el repositorio de github encontrarás la plantilla de las variables de entorno para configurar. (https://github.com/AlexMonPe/apiRestfullMovies). 
- En caso de querer crear peliculas o alquileres, es necesario el programa <a href="https://www.postman.com/">POSTMAN</a>
- Conexión a internet

## Tareas pendientes 🧙

  - [ ] Crear el FrontEnd de la API
  - [ ] Adaptar a la realidad los alquileres, añadiendo claves como fecha devolución y crear una alerta o mensaje el día que expira.
  - [ ] Añadir imagenes a las peliculas de cara al FrontEnd

## Como ayudar 🤝
  
  - Si deseas colaborar con éste proyecto u otro no dudes en contactar conmigo o solicitar una pull request.
  - Mi correo electrónico es alex_bcn10@hotmail.es
  - Cualquier aporte se puede recompensar con una cerveza o café.

## Agradecimientos

  - Compañeros de clase siempre dispuestos ayudar.
  - Gonzalo y Pablo como super profesores.
  - Repositorio público con código libre con el fin de seguir promoviendo compartir conocimientos y ayudar a otros programadores.
