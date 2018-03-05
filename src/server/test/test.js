process.env.NODE_ENV = 'test';

const request = require('supertest');
const mongoose = require('mongoose');
require('sinon-mongoose');
const sinon = require('sinon');
const should = require('should');
const chai = require('chai');
const chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

const app = require('../app');

const Budget = mongoose.model('budget');

describe('Budget', () => {

    it('test api status 200', function (done) {
        
        request(app)
            .get('/budgets')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
        
        done();
    });

});