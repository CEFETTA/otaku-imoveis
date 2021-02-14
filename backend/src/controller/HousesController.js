const connection = require("../database/connection");
const hashProvider = require("../providers/BCryptHashProvider");
const uuid = require("uuid");

module.exports = {
  async create(request, response) {
    const {
      rooms,
      suites,
      living_rooms,
      parking_spaces,
      area,
      has_wardrobe,
      description,
      rental_price,
      address,
      number,
      complement,
      neighborhood_id,
      city,
      state,
      cep,
    } = request.body;

    const findNeighborhood = await connection("neighborhoods")
      .where("id", neighborhood_id)
      .select("neighborhood")
      .first();

    if (!findNeighborhood) {
      return response.status(400).json({ message: 'Neighborhood not found' });
    }

    const id = uuid.v4();

    const user_id = request.user.id;

    await connection("houses").insert({
      id,
      user_id,
      rooms,
      suites,
      living_rooms,
      parking_spaces,
      area,
      has_wardrobe,
      description,
      rental_price,
      address,
      number,
      complement,
      neighborhood_id,
      city,
      state,
      cep,
    });

    return response.json({
      id,
      rooms,
      suites,
      living_rooms,
      parking_spaces,
      area,
      has_wardrobe,
      description,
      rental_price,
      address,
      number,
      complement,
      neighborhood_id,
      city,
      state,
      cep,
    });
  },

};
