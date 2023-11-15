let chai = require('chai');
let chaiHttp = require('chai-http');
const {equal} = require("assert");

chai.use(chaiHttp)

describe('Test', () => {
   describe('Get homepage',() => {
       it('Should have HTTP status 200', () => {
          chai.request(`http://localhost`)
              .get('/')
              .end((err, res) => {
                  equal(res.statusCode === 200,true,"Server does not have status 200");
              });
       });
    });
});