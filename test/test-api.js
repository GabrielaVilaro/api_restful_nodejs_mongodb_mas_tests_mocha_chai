var chai = require('chai');
let express = require('express');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");
const expect = require('chai').expect;
var server = require('../server');
const app = require('../app');
var products = require('../models/products')
const Product = require('../models/products')
var products = require('../controllers/product')
var mocha = require('mocha')


describe('Insert a country: ',()=>{
    it('should insert a country', (done) => {
    chai.use(app)
    .post('/api/product')
    .send({name:"nokia", price: 892, category: "phones", description: 'cel phone'})
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
   });