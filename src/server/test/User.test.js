process.env.NODE_ENV = 'test';

const server = require('../server');
const chai = require('chai');
const supertest = require('supertest');
const {
    expect,
    assert
} = chai;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const agent = supertest.agent(server);
const jwt = require('jsonwebtoken');
const keys = require('../../configs/keys');
const store = require('store')

describe('Test User', () => {

    before(() => {

        User.remove((err, removed) => null);
    })

    after(() => {
        User.remove((err, removed) => null);
    })

    it('create user', async () => {

        const response = await agent.post('/user/new')
            .send({
                first_name: "Francisco",
                last_name: "Assis",
                email: "test@test.com",
                password: "123123",
            })
        
        expect(response.body).to.have.any.keys('token');
        expect(response.statusCode).to.be.equal(200);

        const token = response.body.token;
        
        store.set('user', {
            user_id: decoded.user_id,
            token: token
        });

    });

})