let baseURL = `http://localhost:80`;

let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp)

describe('Tests', () => {
   describe('Server response',() => {
       it('Should have HTTP status 200', () => {
           chai.request(baseURL)
               .get('/')
               .end((err, res) => {
                   if (err) {
                       chai.assert.fail(0, 1, err);
                   } else {
                       chai.assert.equal(res.statusCode === 200, true, "Server does not have status 200");
                   }
               });
       });
       it('Should not send x-powered-by header', () => {
           try {
               chai.request(baseURL)
                   .get('/')
                   .end((err, res) => {
                       if (err) {
                           chai.assert.fail(0, 1, err);
                       } else {
                           chai.assert.equal(res.headers['x-powered-by'], undefined, "Server sending x-powered-by");
                       }
                   });
            } catch (AssertionError e) {
                chai.assert.fail(0, 1, e);
            }
       });
    });
});