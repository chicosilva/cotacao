process.env.NODE_ENV = 'test';

const server = require('../server');
const chai = require('chai');
const supertest = require('supertest');
const {
    expect,
    assert
} = chai;
const mongoose = require('mongoose');
const Budget = mongoose.model('Budget');
const User = mongoose.model('User');
const agent = supertest.agent(server);
const jwt = require('jsonwebtoken');
const keys = require('../../configs/keys');
const store = require('store')

const Today = Date.now();

describe('Test Budgets', () => {

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
        Budget.remove((err, removed) => null);
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

    it('create budget', async () => {
        
        const response = await agent.post('/budgets/new')
            .send({
                description: "Test",
                title: "Test Title",
                date_limit: "2018-12-12",
                user_id: store.get('user').user_id,
                token: store.get('user').token
            })

        expect(response.body).to.include({
            description: "Test"
        });

        expect(response.statusCode).to.be.equal(200);

    });

    it('fail create budget', async () => {

        const response = await supertest(server)
            .post('/budgets/new')
            .send({
                description: null
            });

        expect(response.statusCode).to.be.equal(422);

    });

    it('Status code 200', async () => {
        
        token = store.get('user').token;

        const response = await supertest(server).get('/budgets?token='+token);
        expect(response.statusCode).to.be.equal(200);

    });
    
    it('token invalid', async () => {
        
        const response = await supertest(server).get('/budgets?token=123');
        expect(response.statusCode).to.be.equal(500);

    });

    it('Contains Property budgets and success', async () => {

        token = store.get('user').token;
        const response = await supertest(server).get('/budgets?token='+token);
        expect(response.body).to.have.any.keys('message,', 'budgets');

    });

    it('check budget list', async () => {

        token = store.get('user').token;

        const response = await supertest(server).get('/budgets?token='+token);
        const budgets = await Budget.find();

        const data = {
            title: budgets[0].title,
            description: budgets[0].description,
            date_limit: Today,
            is_send: false,
        }

        const data_include = {
            description: "Test",
            title: "Test Title",
            date_limit: Today,
            is_send: false
        }

        expect(data).to.include(data_include);
    });

})