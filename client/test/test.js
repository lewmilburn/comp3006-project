let baseURL = `http://localhost:80`;

let chai = require('chai');
let chaiHttp = require('chai-http');
const {equal} = require("assert");

chai.use(chaiHttp)

describe('Tests', () => {
   describe('Server response',() => {
       it('Should have HTTP status 200', () => {
           chai.request(baseURL)
               .get('/')
               .end((err, res) => {
                   if (err) { done(err); }
                   equal(res.statusCode === 200,true,"Server does not have status 200");
               });
       });
       it('Should not send x-powered-by header', () => {
           chai.request(baseURL)
               .get('/')
               .end((err, res) => {
                   if (err) { done(err); }
                   equal(res.headers['x-powered-by'],undefined,"Server sending x-powered-by");
               });
       });
    });
});