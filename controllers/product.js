'use strict'
const Product = require('../models/products')

function getProduct(req, res) {
    let productId = req.params.productId
    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({message:'Error al realizar la petición'})
        if (!product) return res.status(404).send({message: 'El producto no existe'})
        res.status(200).send({product: product})
    })
    
}

function getProducts(req, res) {
    Product.find ({}, (err, products) => {
        if (err) return res.status(500).send({message:'Error al realizar la petición'})
        if (!products) return res.status(404).send({message: 'Los productos no existen'})
        res.status(200).send({products: products})
    })
 
}

function saveProduct(req, res){
    console.log('POST /api/product')
    //muestra el body de la petición
    console.log(req.body)

    let product = new Product()
    product.name = req.body.name
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored) =>{
        if (err) 
        return res.status(500).send({message: 'Error to save data base'})
        res.status(200).send({product: productStored})
    })

}

function updateProduct(req, res) {

    let productId = req.params.productId
    let update = req.body
    Product.findByIdAndUpdate(productId, update, (err, productUpdate) => {
        if (err) res.status(500).send({message: 'Error to updated product'})
        res.status(200).send({product: productUpdate})
    })

}

function deleteProduct(req, res) {

    let productId = req.params.productId
    Product.findById(productId, (err, product) =>  {
        if (err) res.status(500).send({message: 'Error to delete product'})
        product.remove(err => {
            if (err) res.status(500).send({message: 'Error to delete product'})
            res.status(200).send({message: 'Delete successfully'})
        })

    })

}

module.exports = {
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    saveProduct
}