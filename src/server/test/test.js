process.env.NODE_ENV = 'test';

const server = require('../server');
const chai = require('chai');
const supertest = require('supertest');
const { expect, assert } = chai;
const mongoose = require('mongoose');
const Budget = mongoose.model('budget');


describe('Test Budgets', () => {
    
    before( function (){
        
        const budget = new Budget({
           description: "Test" 
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
        }
        
        expect(data).to.include({description: "Test"});
    });

    it('create budget', async () => {

        const response = await supertest(server)
            .post('/budgets/new')
            .send({description: "Test"})

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