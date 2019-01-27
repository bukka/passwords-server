import { expect } from 'chai';
import MemoryStorage from '../../storage/MemoryStorage';

const memory = new MemoryStorage();

describe('Memory storage', () => {
  it('should save and retrieve item successfully', async () => {
    await memory.save('id', {'name': 'x'});
    expect(await memory.get('id')).to.be.deep.equal({'name': 'x'});
  });
});