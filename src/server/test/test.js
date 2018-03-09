process.env.NODE_ENV = 'test';

const server = require('../server');
const chai = require('chai');
const request = require('supertest');
const { expect, assert } = chai;
const mongoose = require('mongoose');
const Budget = mongoose.model('budget');


describe('Test Budgets', () => {
    
    _list = null;

    before(function(){
        
        const budget = new Budget({
           description: "Test" 
        });
        
        budget.save((err, result) => {
            Budget.find((err, result) => {
                var _list = result;
            })
        });
    })

    after(function(){
        Budget.remove((err,removed) => null);
    })

    it('Status code 200', async () => {
        
        const response = await request(server).get('/budgets');
        expect(response.statusCode).to.be.equal(200);
        
    });

    it('Contains Property budgets and success', async () => {

        const response = await request(server).get('/budgets');
        expect(response.body).to.have.any.keys('message,', 'budgets');
        
    });

    it('check list', async () => {

        const response = await request(server).get('/budgets');
        
        const data = [
            {
                message: 'success', 
                budgets: _list
            }
        ]
        
        expect(response.body).to.include({budgets: _list, message: 'success'})
        
        
    });


})