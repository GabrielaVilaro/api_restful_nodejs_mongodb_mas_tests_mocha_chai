process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
var should = chai.should();
chai.use(chaiHttp);
const app = require('../app')
const Product = require('../models/products')
const cors = require('cors')
app.use(cors())


//este test envía un post correcto, por lo que devuelve un estado 200

describe('Insert a product: ',()=>{
    it('should insert a product', (done) => {
    chai.request(app)
    .post('/product')
    .send({name:'cel', price: 30000, category: 'phones', description: 'new cel phone'})
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
          });
      });
  });

   //Este test devuelve un error 500, ya que se le ingresa una categoría que no existe 

   describe('Insert a category with error: ',()=>{
    it('should receive an error', (done) => {
    chai.request(app)
    .post('/product')
    .send({name:'computer', price: 30000, category: 'others', description: 'this product no exist'})
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(500);
    done();
         });
      });
  });

   //Este test devuelve todos los productos, un estado 200

   describe('get all products: ',()=>{
    it('should get all products', (done) => {
    chai.request(app)
    .get('/product')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
       });
    });
});
   
   // este test devuelve un elemento específico a través del id

   describe('get the product with id: 5f0204a0b8f05a10f5a8acb4',()=>{
    it('should get the product with id: 5f0204a0b8f05a10f5a8acb4 ', (done) => {
    chai.request(app)
    .get('/product/5f0204a0b8f05a10f5a8acb4')
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
       });
    });
});



//Este test actualiza el precio del producto con un id específico

  describe('update the price of product with id 1: ',()=>{
    it('should update the price of product', (done) => {
    chai.request(app)
    .put('/product/5f0210e7c9a143152a345590')
    .send({'price': 300})
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
      });
    });
 });
