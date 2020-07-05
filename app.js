'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')
const config = require('./config')
const mongoose = require('mongoose')
var routes = require('./routes/index.js');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api', api)
app.use('/', routes);

app.use((req, res, next) => {

    // Dominio que tengan acceso (ej. 'http://example.com')
       res.setHeader('Access-Control-Allow-Origin', `http://localhost:${config.port}`);
    
    // Metodos de solicitud que deseas permitir
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    
    // Encabecedados que permites (ej. 'X-Requested-With,content-type')
       res.setHeader('Access-Control-Allow-Headers', 'ERR_HTTP_HEADERS_SENT');
    
    next();
    })


mongoose.connect(config.db, (err, res) => {
    if(err) throw err

    console.log('Conexión a la base datos correcta.')

    app.listen(config.port, ()=>  {
        console.log(`API REST corriendo en http://localhost:${config.port}`) 
    })
})


module.exports = app

