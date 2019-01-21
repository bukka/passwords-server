
class MemoryStorage {
  constructor() {
    this.data = {};
  }

  async save(name, value) {
    this.data[name] = value;
  }

  async get(name) {
    return this.data[name];
  }
}

module.exports = MemoryStorage;
