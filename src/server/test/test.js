process.env.NODE_ENV = 'test';

const server = require('../server');
const chai = require('chai');
const supertest = require('supertest');
const { expect, assert } = chai;
const mongoose = require('mongoose');
const Budget = mongoose.model('budget');


const Today = Date.now();

describe('Test Budgets', () => {
    
    before( function (){
        
        const budget = new Budget({
           description: "Test",
           date_limit: Today,
        });
        
        budget.save((err, result) => {});
    })

    after(function(){
        Budget.remove((err,removed) => null);
    })

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

    it('create budget', async () => {

        const response = await supertest(server)
            .post('/budgets/new')
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
            .send({description: null})
        
        expect(response.statusCode).to.be.equal(500);
        
    });
    
})