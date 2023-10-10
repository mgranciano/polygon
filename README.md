<a name="inicio"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">

 > <h3 align="center"> Taxi24</h3>

  <p align="center">
    Construcción de un API REST con el lenguaje de programación NodeJs , Su objetivo es diseñar e implementar una API RESTful que interactúe con la API de Polygon.io
    <br />
    <br />
    ·
    <a href="https://github.com/mgranciano/polygon/issues">Report Bug</a>
    ·
    <a href="https://github.com/mgranciano/polygon/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Tabla de contenido</summary>
  <ol>
    <li>
      <a href="#sobre-el-proyecto">Sobre el proyecto</a>
      <ul>
        <li><a href="#construido-con">Construido con</a></li>
      </ul>
    </li>
    <li>
      <a href="#para-inicar">Para iniciar</a>
      <ul>
         <li><a href="#prerequisitos">Prerequisitos</a></li>
         <li><a href="#validación">Validación</a></li>
         <li><a href="#ejecutando-la-base-de-datos">Ejecutando la base de datos</a></li>
         <li><a href="#ejecutando-el-código">Ejecutando el código</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#uso">Uso</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
> ## Sobre el proyecto

[![Product Name Screen Shot][product-screenshot]](https://github.com/mgranciano/polygon)


<p align="right"><a href="#inicio">Inicio</a></p>



> ### Construido con

* [![NodeJs][NodeJs]][NodeJs-url]
* [![Docker][Docker]][Docker-url]

<p align="right"><a href="#inicio">Inicio</a></p>



<!-- GETTING STARTED -->
> ## Para iniciar

 <br />
 
 ### Prerequisitos

Deberá de tener instalado lo siguiente de acuerdo a su equipo ( Windows , Linux , Mac )

* [NodeJs](https://nodejs.org/en/download)
* [Docker](https://www.docker.com/products/docker-desktop)
* [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [Git](https://git-scm.com)

### Validación

- [ ] Git
  1. Ejecutar desde una terminal el siguiente comando   
   ```sh
     git --version
   ```  
  2. Debera tener un resultado similar a la siguiente imagen
- [ ] NodeJs
  1. Ejecutar desde una terminal el siguiente comando   
   ```sh
     node -v
   ```  
   2. Debera tener un resultado similar a la siguiente imagen
    [![Node_Version Screen Shot][node-version-screenshot]](https://github.com/mgranciano/challenge_taxi24)
<br />

- [ ] Docker
  1. Ejecutar desde una terminal el siguiente comando   
   ```sh
     docker-compose -v
   ```  
   2. Debera tener un resultado similar a la siguiente imagen
    [![Docker_Version Screen Shot][docker-version-screenshot]](https://github.com/mgranciano/challenge_taxi24)
    
<br />

### Ejecutando la base de datos

1. Clonar el repositorio dentro de una terminal seleccionar una ubicación que se tenga permisos de escritura y ejecutar el siguiente código
   ```sh
   git clone https://github.com/mgranciano/challenge_taxi24.git
   ```
   <br />

2. Entrar en la carpeta genera y a la carpeta `docker` , estando situados en esta carpeta se tendra que ejecutar el comando `docker-compose` , si todo esta correcto la base de datos quedara levantada .

 <br />

   ```sh
    cd proyecto/docker
    docker-compose up -d
    docker ps
   ```

### Ejecutando el código

1. Entrar la carpeta generada en el paso de clonación que se realizo en el punto 1 de la base de datos (<a href="#ejecutando-la-base-de-datos">Ejecutando la base de datos</a>) dentro entrar a `myapp` y ejecutar `npm install`
   ```sh
   cd challenge_taxi24/myapp
   npm install
   ```
   <br />
   
   [![Node Screen Shot][node-screenshot]](https://github.com/mgranciano/challenge_taxi24)
   
   <br />
2. Entrar en el código y modificar archivo .env.developer
   
   
3. Para ejecutar el código  
   ```sh
   npm run start
   ```
<br />
<p align="right"><a href="#inicio">Inicio</a></p>

<!-- ROADMAP -->
> ## Roadmap

- [ ] Task1
    - [ ] SubTAskt 1
    - [ ] SubTAskt 2
- [ ] Task2
    - [ ] SubTAskt 1
    - [ ] SubTAskt 2
- [ ] Task3
    - [ ] SubTAskt 1
    - [ ] SubTAskt 2

<p align="right"><a href="#inicio">Inicio</a></p>





<p align="right"><a href="#inicio">Inicio</a></p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: [https://www.linkedin.com/in/moises-granciano-2840b6197](https://www.linkedin.com/in/moises-granciano-2840b6197)
[contributors-shield]: https://img.shields.io/github/contributors/mgranciano/challenge_taxi24.svg?style=for-the-badge
[contributors-url]: [https://github.com/mgranciano/challenge_taxi24/graphs/contributors](https://github.com/mgranciano/challenge_taxi24/graphs/contributors)
[stars-shield]: https://img.shields.io/github/stars/mgranciano/challenge_taxi24.svg?style=for-the-badge
[stars-url]: https://github.com/mgranciano/challenge_taxi24/stargazers
[product-screenshot]: img/screen02.png
[node-version-screenshot]: img/node01.png
[node-screenshot]: img/node02.png
[postman-screenshot]: img/postman01.png
[docker-version-screenshot]: img/docker01.png
[coordenadas-screenshot]: img/coords01.png
[docker-compose-screenshot]: img/docker02.png
[swagger-screenshot]: img/swagger01.png
[NodeJs]: https://img.shields.io/badge/nodejs-C0C0C0?style=for-the-badge&logo=nodedotjs&logoColor=008000
[NodeJs-url]: https://nodejs.org/
[Express]: https://img.shields.io/badge/expressjs-C0C0C0?style=for-the-badge&logo=expressjs&logoColor=white
[Express-url]: https://expressjs.com/
[Swagger]: https://img.shields.io/badge/swagger-C0C0C0?style=for-the-badge&logo=swagger&logoColor=33FF66
[Swagger-url]: https://swagger.io/
[Docker]: https://img.shields.io/badge/docker-C0C0C0?style=for-the-badge&logo=docker&logoColor=0066FF
[Docker-url]: https://www.docker.com/
[mongoose]: https://img.shields.io/badge/mongoosee-C0C0C0?style=for-the-badge&logo=mongooseejs&logoColor=CC3333
[mongoose-url]: https://mongoosejs.com/
[MongoDB]: https://img.shields.io/badge/mongodb-C0C0C0?style=for-the-badge&logo=mongodb&logoColor=00FF66
[MongoDB-url]: https://www.mongodb.com/
[Jest]: https://img.shields.io/badge/jest-C0C0C0?style=for-the-badge&logo=jest&logoColor=00FF66
[Jest-url]: https://jestjs.io/