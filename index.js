'use strict'
//importando
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
//creando un servidor
const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//req: petición , res: respuesta

app.get('/api/product', (req, res) => {
    res.status(200).send({products:[]})
})

app.get('api/product/:productId', (req, res) => {
    
})

app.post('/api/product', (req, res) => {
    console.log(req.body)
    res.status(200).send({message: 'Product recived'});
})

app.put('/api/product/:productId', (req, res) => {
    
})

app.delete('/api/product/:productId', (req, res) => {
    
})

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if(err) throw err
    console.log('Conexión a la base datos correcta.')
    app.listen(port, ()=>  {
        console.log(`API REST corriendo en http://localhost:${port}`)
    
    })
})