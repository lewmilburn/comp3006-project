let baseURL = `http://localhost:8080`;

let chai = require('chai');
let chaiHttp = require('chai-http');
const {equal} = require("assert");
let chaiAsPromised = require("chai-as-promised");
const {eventually} = require("chai-as-promised");
const {expect} = require("chai");

chai.use(chaiHttp);
chai.use(chaiAsPromised);

describe('Tests', () => {
    describe('Server response',() => {
        it('Should have HTTP status 404', () => {
            chai.request(baseURL)
                .get('/')
                .end((err, res) => {
                    equal(res.statusCode === 404,true,"Server does not have status 404");
                });
        });
        it('Should not send x-powered-by header', () => {
            chai.request(baseURL)
                .get('/')
                .end((err, res) => {
                    equal(res.headers['x-powered-by'],undefined,"Server sending x-powered-by");
                });
        });
    });
    describe('Database tests',() => {
        describe('Database CREATE', () => {
            it('Should create a room', () => {
                equal(0 === 1, true, "Test not implemented.");
            });
            it('Should create a user', () => {
                equal(0 === 1, true, "Test not implemented.");
            });
            it('Should create a booking', () => {
                equal(0 === 1, true, "Test not implemented.");
            });
        });
        describe('Database RETRIEVE', () => {
            it('Should fetch all rooms', () => {
                equal(0 === 1, true, "Test not implemented.");
            });
            it('Should fetch a single room', () => {
                equal(0 === 1, true, "Test not implemented.");
            });
        });
        describe('Database UPDATE', () => {
            it('Should UPDATE a room', () => {
                equal(0 === 1, true, "Test not implemented.");
            });
            it('Should UPDATE a user', () => {
                equal(0 === 1, true, "Test not implemented.");
            });
            it('Should UPDATE a booking', () => {
                equal(0 === 1, true, "Test not implemented.");
            });
        });
        describe('Database DELETE', () => {
            it('Should DELETE a room', () => {
                equal(0 === 1, true, "Test not implemented.");
            });
            it('Should DELETE a user', () => {
                equal(0 === 1, true, "Test not implemented.");
            });
            it('Should DELETE a booking', () => {
                equal(0 === 1, true, "Test not implemented.");
            });
        });
    });
});