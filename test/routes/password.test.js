import { expect } from 'chai';
import sinon from 'sinon';
import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import PasswordProvider from '../../providers/PasswordProvider';
import router from '../../routes/password';

const app = express();
app.use(bodyParser.json());
app.use('/password', router);

describe('Request /password', () => {
  it('should get the password by name', (done) => {
    sinon.stub(PasswordProvider.prototype, 'get').withArgs('test').resolves('abc');

    request(app)
      .get('/password/test')
      .set('Accept', 'application/json')
      .expect(200, { password: 'abc' }, done);
  });

  it('should save the password with a name', (done) => {
    sinon.stub(PasswordProvider.prototype, 'save').resolves('ok');

    request(app)
      .post('/password/test')
      .send({password: 'abcd'})
      .set('Content-Type', 'application/json')
      .expect(201, done);
  });
});