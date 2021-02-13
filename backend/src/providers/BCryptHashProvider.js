const { hash, compare } = require("bcryptjs");

module.exports = {
  async generateHash(payload) {
    return hash(payload, 8);
  },

  async compareHash(payload, hashed) {
    return compare(payload, hashed);
  },
};
