const connection = require("../database/connection");
const uuid = require("uuid");

module.exports = {
  async index(request, response) {
    const findNeighborhoods = await connection("neighborhoods")
      .select(["id", "neighborhood"]);

    return response.json(findNeighborhoods);
  },

  async create(request, response) {
    const { neighborhood } = request.body;

    const user_id = request.user.id;

    const user = await connection("users")
      .where("id", user_id)
      .select()
      .first();

    if (user && user.role !== "admin") {
      return response.status(401).json({ message: "Only admins can create neighborhoods" });
    }

    const findNeighborhood = await connection("neighborhoods")
      .where("neighborhood", neighborhood)
      .select("neighborhood")
      .first();

    if (findNeighborhood) {
      return response.status(400).json({ message: "This neighborhood already exists" });
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
  },

  async delete(request, response) {
    const { neighborhood_id } = request.params;

    const user_id = request.user.id;

    const user = await connection("users")
      .where("id", user_id)
      .select()
      .first();

    if (user.role !== "admin") {
      return response.status(401).json({ message: "Only admins can delete neighborhoods" });
    }

    const hasDeletedNeighborhood = await connection("neighborhoods")
      .where("id", neighborhood_id)
      .del();

    if (!hasDeletedNeighborhood) {
      return response.status(400).json({ message: "Neighborhood not found" });
    }

    return response.json({ message: "Neighborhood deleted"});
  },
};
