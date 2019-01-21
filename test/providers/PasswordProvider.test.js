import { expect } from 'chai';
import sinon from 'sinon'
import PasswordProvider from '../../providers/PasswordProvider';

describe('PasswordProvider', () => {
  it('should pass data to storage', async () => {
    const storage = {
      get: sinon.stub().withArgs('id').returns({'data': 'y'})
    };
    const provider = new PasswordProvider(storage);

    expect(await provider.get('id')).to.be.deep.equal({'data': 'y'});
  })
});