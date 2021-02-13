const { sign } = require("jsonwebtoken");

const connection = require("../database/connection");
const hashProvider = require("../providers/BCryptHashProvider");

const authConfig = require("../config/auth");

module.exports = {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await connection("users")
      .where("email", email)
      .first();

    if (!user) {
      return response.status(401).json({ message: 'Incorrect email' });
    }

    const passwordMatched = await hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) {
      return response.status(401).json({ message: 'Incorrect password' });
    }

    const { secret, expiresIn } = authConfig.default.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    delete user.password;

    return response.json({
      user,
      token,
    });
  }
};
