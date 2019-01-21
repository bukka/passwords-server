
class PasswordProvider {
    constructor(storage) {
        this.storage = storage;
    }

    async get(id) {
        return this.storage.get(id);
    }
}

module.exports = PasswordProvider;