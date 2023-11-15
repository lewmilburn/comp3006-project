let chai = require('chai');
let chaiHttp = require('chai-http');
const {equal} = require("assert");

chai.use(chaiHttp)

describe('Tests', () => {
   describe('Server response',() => {
       it('Should have HTTP status 200', () => {
           chai.request(`http://localhost`)
               .get('/')
               .end((err, res) => {
                   equal(res.statusCode === 200,true,"Server does not have status 200");
               });
       });
       it('Should not send x-powered-by header', () => {
           chai.request(`http://localhost`)
               .get('/')
               .end((err, res) => {
                   equal(res.headers['x-powered-by'],undefined,"Server sending x-powered-by");
               });
       });
    });
});