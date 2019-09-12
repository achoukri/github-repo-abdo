/* eslint-disable node/no-unpublished-require */
/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiLike = require('chair-like');
const app = require('../server');

chai.use(chaiHttp);
chai.use(chaiLike);
chai.should();

describe('Repositories', function() {
    describe('GET /repositories', function() {
     // Get all repos
     it('Should return the repositories with a 200 status code', function(done) {
        chai.request(app).get('/repositories').end((err,res)=> {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
     });
    });
    describe('GET /repository', function() {
        // Get one repo
        it('Should return the repository with a 200 status code', function(done) {
           chai.request(app).get('/repositories/1').end((err,res)=> {
               res.should.have.status(200);
               res.body.should.be.a('object');
               done();
           });
        });
        // Error case
        it('Should return 404 status code in case of error', function(done) {
            chai.request(app).get('/repositories/-369').end((err,res)=> {
                res.should.have.status(404);
                res.body.should.be.a('object').that.contains.like({message: "repository not found"});
                done();
            });
         });
       });
});