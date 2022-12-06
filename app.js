//Utilizaremos express
const express = require('express');
const app = express();

//Para no tener problemas con utf-8

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//En este caso utilizaremos el puerto 3006

app.listen(3006);

const {Cabina} = require('./db/models');


//listar todos los peaje

app.get('/listar-peajes', async function(req, res){

  // Cada peaje debe incluir la dirección donde se encuentra. La dirección debe especificar
  // provincia, número de ruta, y kilómetro. No es necesario usar datos geográficos reales,
  // pero que parezcan reales.

  let obtenerVista = await Cabina.findAll({})

  res.send(obtenerVista);

})


module.exports = app;
