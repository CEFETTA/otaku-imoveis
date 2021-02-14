const connection = require("../database/connection");
const hashProvider = require("../providers/BCryptHashProvider");
const uuid = require("uuid");

module.exports = {
  async create(request, response) {
    const { name, email, password } = request.body;
    const role = "user";

    const findUser = await connection("users")
      .where("email", email)
      .select("email")
      .first();

    if (findUser) {
      return response.status(400).json({ message: "This email is already registered" });
    }

    const id = uuid.v4();

    const hashedPassword = await hashProvider.generateHash(password);

    await connection("users").insert({
      id,
      name,
      email,
      password: hashedPassword,
      role,
    });

    return response.json({
      id,
      name,
      email,
      role,
    });
  }
};
