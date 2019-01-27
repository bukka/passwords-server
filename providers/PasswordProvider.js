
class PasswordProvider {
    constructor(storage) {
        this.storage = storage;
    }

    async get(id) {
        return this.storage.get(id);
    }

    async save(id, value) {
        this.storage.save(id, value);
    }
}

module.exports = PasswordProvider;