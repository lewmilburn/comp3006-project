let baseURL = `http://localhost:8080`;

let chai = require('chai');
let chaiHttp = require('chai-http');
const {equal} = require("assert");

chai.use(chaiHttp)

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
});