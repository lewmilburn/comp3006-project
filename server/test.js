let chai = require('chai');
let chaiHttp = require('chai-http');
const {equal} = require("assert");
let chaiAsPromised = require("chai-as-promised");

chai.use(chaiHttp);
chai.use(chaiAsPromised);

const dotenv = require("dotenv");
dotenv.config();

describe('Tests', () => {
    describe('Security tests',() => {
        it('Should escape quotations', () => {
            equal(escapeTest('Test! "'),'Test! &quot;',"Not escaping quotations");
        });
        it('Should escape less than symbol', () => {
            equal(escapeTest('Test! <'),'Test! &lt;',"Not escaping less than symbol");
        });
        it('Should escape greater than symbol', () => {
            equal(escapeTest('Test! >'),'Test! &gt;',"Not escaping greater than symbol");
        });
        it('Should escape apostrophe symbol', () => {
            equal(escapeTest("Test! '"),'Test! &#x27;',"Not escaping apostrophe symbol");
        });
        it('Should escape slash symbol', () => {
            equal(escapeTest("Test! /"),'Test! &#x2F;',"Not escaping slash symbol");
        });
    });
});

function escapeTest(bad) {
    return require('./functions/escape.js')(bad);
}