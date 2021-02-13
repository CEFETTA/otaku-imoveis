const connection = require("../database/connection");
const uuid = require("uuid");

module.exports = {
  async create(request, response) {
    const { neighborhood } = request.body;

    const findNeighborhood = await connection("neighborhoods")
      .where("neighborhood", neighborhood)
      .select("neighborhood")
      .first();

    if (findNeighborhood) {
      return response.status(400).json({ message: 'This neighborhood already exists' });
    }

    const id = uuid.v4();

    await connection("neighborhoods").insert({
      id,
      neighborhood,
    });

    return response.json({
      id,
      neighborhood,
    });
  }
};
