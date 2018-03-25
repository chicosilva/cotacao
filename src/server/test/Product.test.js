process.env.NODE_ENV = 'test';

const server = require('../server');
const chai = require('chai');
const supertest = require('supertest');
const {
    expect,
    assert
} = chai;
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const User = mongoose.model('User');
const agent = supertest.agent(server);
const jwt = require('jsonwebtoken');
const keys = require('../../configs/keys');
const store = require('store')

const Today = Date.now();

describe('Test Product', () => {

    objUser = null;

    before(() => {
        
        User.remove((err, removed) => null);

        const user = new User({
            first_name: "Assis",
            last_name: "Silva",
            email: "test@test.com",
            password: "123",
        });

        user.save((err, result) => {
            if (err) {
                throw err;
            }
        });
        this.objUser = user;

    })

    after(() => {
        Product.remove((err, removed) => null);
        User.remove((err, removed) => null);
    })

    it('login user', async () => {
        
        const response = await agent.post('/user/login')
            .send({email: this.objUser.email});
        
        const token = response.body.token;
        
        const decoded = jwt.verify(token, keys.secret);
        store.set('user', {user_id: decoded.user_id, token: token});
        
        expect(this.objUser.id).to.be.equal(decoded.user_id);

    });

    it('create Product', async () => {
        
        const token = store.get('user').token

        const data = {
            name: "Test",
        }
        
        const response = await agent.post('/products/new/?token='+token)
            .send(data)

        expect(response.body).to.include({
            name: "Test"
        });

        expect(response.statusCode).to.be.equal(200);

    });

    it('fail create Product', async () => {
        
        const token = store.get('user').token

        const response = await supertest(server)
            .post('/products/new/?token'+token)
            .send({
                name: null
            });

        expect(response.statusCode).to.be.equal(422);

    });

    it('Status code 200', async () => {
        
        token = store.get('user').token;

        const response = await supertest(server).get('/products?token='+token);
        expect(response.statusCode).to.be.equal(200);

    });
    
    it('token invalid', async () => {
        
        const response = await supertest(server).get('/products?token=123');
        expect(response.statusCode).to.be.equal(422);

    });

    it('Contains Property Product and success', async () => {

        token = store.get('user').token;
        const response = await supertest(server).get('/products?token='+token);
        expect(response.body).to.have.any.keys('message,', 'products');

    });

    it('check products list', async () => {

        token = store.get('user').token;

        const response = await supertest(server).get('/products?token='+token);
        const products = await Product.find();

        const data = {
            name: products[0].name,
        }

        const data_include = {
            name: "Test",
        }

        expect(data).to.include(data_include);
    });

})