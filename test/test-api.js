process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const app = require('../app')
const Product = require('../models/products')

describe('Insert a product: ',()=>{
    it('should insert a product', (done) => {
    chai.request(app)
    .post('/product')
    .send({name:'cel', price: 1200, category: 'phones', description: 'now'})
    .end( function(err,res){
    console.log(res.body)
    expect(res).to.have.status(200);
    done();
    });
    });
   });
   
   
