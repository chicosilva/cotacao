process.env.NODE_ENV = 'test';

const server = require('../server');
const chai = require('chai');
const supertest = require('supertest');
const { expect, assert } = chai;
const mongoose = require('mongoose');
const Budget = mongoose.model('Budget');
const User = mongoose.model('User');
const agent = supertest.agent(server);

const Today = Date.now();

describe('Test Budgets', () => {
    
    objUser = null;

    before( () => {
        
        const user = new User({
            first_name: "Assis",
            last_name: "Silva",
            email: "test@test.com",
        });
         
        user.save((err, result) => {
             if(err){
                 throw err;
             }
        });
        this.objUser = user;

    })

    after(() => {
        Budget.remove((err,removed) => null);
        User.remove((err,removed) => null);
    })

    it('create valid user session', async () => {
        
        const response = await agent.post('/user/session-test')
            .send({user_id: this.objUser._id});

        expect(response.body.user_id).to.be.equal(this.objUser._id.toString());
        
    });

    it('create budget', async () => {
        
        const response = await agent.post('/budgets/new')
            .send(
                {
                    description: "Test",
                    date_limit: "2018-12-12"
                }
            )
        
        expect(response.body).to.include({description: "Test"});
        expect(response.statusCode).to.be.equal(200);
        
    });

    it('fail create budget', async () => {

        const response = await supertest(server)
            .post('/budgets/new')
            .send({description: null});
        
        expect(response.statusCode).to.be.equal(500);
        
    });

    it('Status code 200', async () => {
        
        const response = await supertest(server).get('/budgets');
        expect(response.statusCode).to.be.equal(200);
        
    });

    it('Contains Property budgets and success', async () => {

        const response = await supertest(server).get('/budgets');
        expect(response.body).to.have.any.keys('message,', 'budgets');
        
    });

    it('check budget list', async () => {

        const response = await supertest(server).get('/budgets');
        const budgets = await Budget.find();
        
        const data = {
            description: budgets[0].description,
            date_limit: Today,
            is_send: false,
        }
        
        const data_include = {
                description: "Test", 
                date_limit: Today,
                is_send: false
        }

        expect(data).to.include(data_include);
    });
    
})