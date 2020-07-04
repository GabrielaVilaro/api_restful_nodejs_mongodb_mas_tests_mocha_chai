'use strict'
//importando
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Product = require('./models/products')
//creando un servidor
const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//req: petición , res: respuesta

app.get('/api/product', (req, res) => {
    Product.find ({}, (err, products) => {
        if (err) return res.status(500).send({message:'Error al realizar la petición'})
        if (!products) return res.status(404).send({message: 'Los productos no existen'})
        res.status(200).send({products: products})
    })

})

app.get('/api/product/:productId', (req, res) => {
    let productId = req.params.productId
    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({message:'Error al realizar la petición'})
        if (!product) return res.status(404).send({message: 'El producto no existe'})
        res.status(200).send({product: product})
    })

})

app.post('/api/product', (req, res) => {
    console.log('POST /api/product')
    //muestra el body de la petición
    console.log(req.body)

    let product = new Product()
    product.name = req.body.name
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored) =>{
        if (err) res.status(500).send({message: 'Error to save data base'})
        res.status(200).send({product: productStored})
    })
})

app.put('/api/product/:productId', (req, res) => {
    let productId = req.params.productId
    let update = req.body
    Product.findByIdAndUpdate(productId, update, (err, productUpdate) => {
        if (err) res.status(500).send({message: 'Error to updated product'})
        res.status(200).send({product: productUpdate})
    })
    
})

app.delete('/api/product/:productId', (req, res) => {
    let productId = req.params.productId
    Product.findById(productId, (err, product) =>  {
        if (err) res.status(500).send({message: 'Error to delete product'})
        product.remove(err => {
            if (err) res.status(500).send({message: 'Error to delete product'})
            res.status(200).send({message: 'Delete successfully'})
        })

    })
})

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if(err) throw err
    console.log('Conexión a la base datos correcta.')
    app.listen(port, ()=>  {
        console.log(`API REST corriendo en http://localhost:${port}`)
    
    })
})