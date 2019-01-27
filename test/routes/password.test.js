import { expect } from 'chai';
import sinon from 'sinon';
import request from 'supertest';
import express from 'express';
import PasswordProvider from '../../providers/PasswordProvider';
import router from '../../routes/password';

const app = express();
app.use('/passwords', router);

describe('Test password get route', () => {
  it('should get the password by name', (done) => {
    sinon.stub(PasswordProvider.prototype, 'get').withArgs('test').resolves('abc');

    request(app)
      .get('/passwords/test')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { password: 'abc' }, done);
  });

  it('should save the password with a name', (done) => {
    sinon.stub(PasswordProvider.prototype, 'save').resolves('ok');

    request(app)
      .post('/passwords/test')
      .send({password: 'abcd'})
      .set('Accept', 'application/json')
      .expect(201, done);
  })
});