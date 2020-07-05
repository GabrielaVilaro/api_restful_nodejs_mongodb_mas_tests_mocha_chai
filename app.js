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


mongoose.connect(config.db, (err, res) => {
    if(err) throw err

    console.log('Conexión a la base datos correcta.')

    app.listen(config.port, ()=>  {
        console.log(`API REST corriendo en http://localhost:${config.port}`) 
    })
})


module.exports = app

