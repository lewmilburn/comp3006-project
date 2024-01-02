let chai = require('chai');
let chaiHttp = require('chai-http');
const {equal} = require("assert");
let chaiAsPromised = require("chai-as-promised");

chai.use(chaiHttp);
chai.use(chaiAsPromised);

const dotenv = require("dotenv");
dotenv.config();

let connString = process.env.DB_CONN_STRING;

describe('Tests', () => {
    describe('Security tests',() => {
        it('Should escape quotations', () => {
            equal(escapeTest('Test! "'),'Test! &quot;',"Not escaping quotations");
            console.log('[TEST][1/] Done')
        });
        it('Should escape less than symbol', () => {
            equal(escapeTest('Test! <'),'Test! &lt;',"Not escaping less than symbol");
            console.log('[TEST][2/] Done')
        });
        it('Should escape greater than symbol', () => {
            equal(escapeTest('Test! >'),'Test! &gt;',"Not escaping greater than symbol");
            console.log('[TEST][3/] Done')
        });
        it('Should escape apostrophe symbol', () => {
            equal(escapeTest("Test! '"),'Test! &#x27;',"Not escaping apostrophe symbol");
            console.log('[TEST][4/] Done')
        });
        it('Should escape slash symbol', () => {
            equal(escapeTest("Test! /"),'Test! &#x2F;',"Not escaping slash symbol");
            console.log('[TEST][5/] Done')
        });
    });
    describe('Database tests',() => {
        describe('Room', () => {
            let testRoomNumber;
            it('Add room', async () => {
                console.log('[TEST][6/] Running...')
                let database = await require('./startup/database')(connString);
                await require('./functions/database/room_create')(await database, 'Test', 'T1', '1', '1', '1', '1', '1').then(r => {
                    let res = r !== null;
                    console.log('[TEST][6/] '+r);
                    console.log('[TEST][6/] Done');
                    equal(res, true, 'Could not add room.');
                });
            });
            it('Retrieve rooms', async () => {
                console.log('[TEST][7/] Running...')
                let database = await require('./startup/database')(connString);
                await require('./functions/database/rooms_retrieve')(await database).then(r => {
                    let res = r !== null;
                    console.log('[TEST][7/] '+r);
                    console.log('[TEST][7/] Done');
                    equal(res, true, 'No rooms in database.');
                });
            });
            it('Retrieve test room', async () => {
                console.log('[TEST][8/] Running...')
                let database = await require('./startup/database')(connString);
                await require('./functions/database/room_retrieve')(await database, 'T1').then(r => {
                    testRoomNumber = r[0].room_number;
                    let res = r !== null;
                    console.log('[TEST][8/] '+r);
                    console.log('[TEST][8/] Done');
                    equal(res, true, 'Room not in database.');
                });
            });
            it('Delete test room', async () => {
                console.log('[TEST][9/] Running...')
                let database = await require('./startup/database')(connString);
                await require('./functions/database/room_delete')(await database, testRoomNumber).then(r => {
                    let res = r !== null;
                    console.log('[TEST][9/] '+r);
                    console.log('[TEST][9/] Done');
                    equal(res, true, 'Could not delete room.');
                });
            });
        });
    });
});

function escapeTest(bad) {
    return require('./functions/escape.js')(bad);
}