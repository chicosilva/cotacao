process.env.NODE_ENV = 'test';

const should = require('should');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = require('../index');

describe('Budget', () => {

    describe('Budget list Api, /budgets', () => {

        it('should return property budgets', (done) => {

            chai.request(server)
                .get('/budgets/')
                .end((err, res) => {
                    
                    should.not.exist(err);
                    res.status.should.equal(200);
                    res.type.should.equal('application/json');
                    res.body.status.should.eql('success');
                    res.body.budgets.length.should.eql(2);
                    res.body.budgets[0].should.include.keys(
                        'id', 'description', 'name'
                    );

                });

            done();

        });

    });

});