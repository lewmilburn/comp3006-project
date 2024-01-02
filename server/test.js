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
            console.log('[TEST][1/9] Done')
        });
        it('Should escape less than symbol', () => {
            equal(escapeTest('Test! <'),'Test! &lt;',"Not escaping less than symbol");
            console.log('[TEST][2/9] Done')
        });
        it('Should escape greater than symbol', () => {
            equal(escapeTest('Test! >'),'Test! &gt;',"Not escaping greater than symbol");
            console.log('[TEST][3/9] Done')
        });
        it('Should escape apostrophe symbol', () => {
            equal(escapeTest("Test! '"),'Test! &#x27;',"Not escaping apostrophe symbol");
            console.log('[TEST][4/9] Done')
        });
        it('Should escape slash symbol', () => {
            equal(escapeTest("Test! /"),'Test! &#x2F;',"Not escaping slash symbol");
            console.log('[TEST][5/9] Done')
        });
    });
    describe('Database tests',() => {
        describe('Room', () => {
            let testRoomNumber;
            it('Add room', async () => {
                console.log('[TEST][6/9] Running...')
                let database = await require('./startup/database')(connString);
                await require('./functions/database/room_create')(await database, 'Test', 'T1', '1', '1', '1', '1', '1').then(r => {
                    let res = r !== null;
                    console.log('[TEST][6/9] Result: '+r);
                    console.log('[TEST][6/9] Done');
                    equal(res, true, 'Could not add room.');
                });
            });
            it('Retrieve rooms', async () => {
                console.log('[TEST][7/9] Running...')
                let database = await require('./startup/database')(connString);
                await require('./functions/database/rooms_retrieve')(await database).then(r => {
                    let res = r !== null;
                    console.log('[TEST][7/9] Result: '+r);
                    console.log('[TEST][7/9] Done');
                    equal(res, true, 'No rooms in database.');
                });
            });
            it('Retrieve test room', async () => {
                console.log('[TEST][8/9] Running...')
                let database = await require('./startup/database')(connString);
                await require('./functions/database/room_retrieve')(await database, 'T1').then(r => {
                    testRoomNumber = r[0].room_number;
                    let res = r !== null;
                    console.log('[TEST][8/9] Result: '+r);
                    console.log('[TEST][8/9] Done');
                    equal(res, true, 'Room not in database.');
                });
            });
            it('Delete test room', async () => {
                console.log('[TEST][9/9] Running...')
                let database = await require('./startup/database')(connString);
                await require('./functions/database/room_delete')(await database, testRoomNumber).then(r => {
                    let res = r !== null;
                    console.log('[TEST][9/9] Result: '+r);
                    console.log('[TEST][9/9] Done');
                    equal(res, true, 'Could not delete room.');
                });
            });
        });
        describe('Booking', () => {
            let testBookingNumber;
            it('Add booking', async () => {
                console.log('[TEST][10/9] Running...')
                let database = await require('./startup/database')(connString);
                await require('./functions/database/booking_create')(await database, 'TEST', 'TEST', '0000-00-00', '0000-00-00').then(r => {
                    let res = r !== null;
                    console.log('[TEST][10/9] Result: '+r);
                    console.log('[TEST][10/9] Done');
                    equal(res, true, 'Could not add booking.');
                });
            });
            it('Retrieve booking', async () => {
                console.log('[TEST][11/9] Running...')
                let database = await require('./startup/database')(connString);
                await require('./functions/database/booking_retrieve')(await database, 'TEST', 'TEST').then(r => {
                    testBookingNumber = r[0]._id;
                    let res = r !== null;
                    console.log('[TEST][11/9] Result: '+r);
                    console.log('[TEST][11/9] Done');
                    equal(res, true, 'No booking in database.');
                });
            });
            it('Update test booking', async () => {
                console.log('[TEST][9/9] Running...')
                let database = await require('./startup/database')(connString);
                await require('./functions/database/booking_update')(await database, testBookingNumber, '1000-00-00', '1000-00-00').then(r => {
                    let res = r !== null;
                    console.log('[TEST][9/9] Result: '+r);
                    console.log('[TEST][9/9] Done');
                    equal(res, true, 'Could not delete room.');
                });
            });
        });
    });
});

function escapeTest(bad) {
    return require('./functions/escape.js')(bad);
}