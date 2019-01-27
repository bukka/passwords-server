import { expect } from 'chai';
import sinon from 'sinon';
import PasswordProvider from '../../providers/PasswordProvider';

describe('PasswordProvider', () => {
  it('should get data from the storage', async () => {
    const storage = {
      get: sinon.stub().withArgs('id').returns({'data': 'y'})
    };
    const provider = new PasswordProvider(storage);

    expect(await provider.get('id')).to.be.deep.equal({'data': 'y'});
  });

  it('should pass data to storage', async () => {
    const spy = sinon.spy();
    const storage = {
      save: spy
    };
    const provider = new PasswordProvider(storage);
    await provider.save('id', 'xyz');

    const call = spy.getCall(0);
    expect(call.args[0]).to.be.equal('id');
    expect(call.args[1]).to.be.equal('xyz');
  });
});