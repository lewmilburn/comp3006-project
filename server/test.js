let baseURL = `http://localhost:8080`;

let chai = require('chai');
let chaiHttp = require('chai-http');
const {equal} = require("assert");
let chaiAsPromised = require("chai-as-promised");
const {expect, request, get, should} = require("chai");
const nock = require('nock');

chai.use(chaiHttp);
chai.use(chaiAsPromised);

const dotenv = require("dotenv");
dotenv.config();

describe('Tests', () => {
    /*describe('Server response',() => {
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
    });*/
    describe('Database tests',() => {
        /*describe('Database CREATE', (done) => {
            it('Should create a room', (res) => {
                equal(0 === 1, true, "Test not implemented.");
            });
            it('Should create a user', () => {
                equal(0 === 1, true, "Test not implemented.");
            });
            it('Should create a booking', () => {
                equal(0 === 1, true, "Test not implemented.");
            });
        });*/
        describe('Database RETRIEVE', () => {
            let server;
            before(async function () {
                return new Promise(async (resolve) => {
                    server = await require('./server');
                    resolve();
                })
            });
            it('Should fetch all rooms', (done) => {
                chai.request(server)
                    .get("/api/status")
                    .end((err, res) => {
                        console.log(res.body);
                        equal(res.body, 200, "Status code does not equal 200.");
                    });
            });
            /*it('Should fetch a single room', () => {
                equal(0 === 1, true, "Test not implemented.");
            });*/
        });
        /*describe('Database UPDATE', () => {
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
        });*/
    });
});