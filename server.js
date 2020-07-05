'use strict'
//importando
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
    if(err) throw err

    console.log('Conexión a la base datos correcta.')
    
    app.listen(config.port, ()=>  {
        console.log(`API REST corriendo en http://localhost:${config.port}`) 
    })
})