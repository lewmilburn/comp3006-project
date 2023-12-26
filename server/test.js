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
            let bad = 'Test! "';
            let good = require('./functions/escape.js')(bad)
            equal(good,'Test! &quot;',"Not escaping quotations");
        });
        it('Should escape less than symbol', () => {
            let bad = 'Test! <';
            let good = require('./functions/escape.js')(bad)
            equal(good,'Test! &lt;',"Not escaping quotations");
        });
        it('Should escape greater than symbol', () => {
            let bad = 'Test! >';
            let good = require('./functions/escape.js')(bad)
            equal(good,'Test! &gt;',"Not escaping quotations");
        });
        it('Should escape apostrophe symbol', () => {
            let bad = "Test! '";
            let good = require('./functions/escape.js')(bad)
            equal(good,'Test! &#x27;',"Not escaping quotations");
        });
        it('Should escape slash symbol', () => {
            let bad = "Test! /";
            let good = require('./functions/escape.js')(bad)
            equal(good,'Test! &#x2F;',"Not escaping quotations");
        });
    });
});