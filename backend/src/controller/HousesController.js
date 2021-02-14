const connection = require("../database/connection");
const hashProvider = require("../providers/BCryptHashProvider");
const uuid = require("uuid");

module.exports = {
  async index(request, response) {
    const houses = await connection("houses")
      .join("neighborhoods", "neighborhoods.id", "=", "houses.neighborhood_id")
      .select();

    if (!houses) {
      return response.status(400).json({ message: 'Houses not found' });
    }

    return response.json(houses);
  },

  async show(request, response) {
    const { house_id } = request.params;

    const house = await connection("houses")
      .where("houses.id", house_id)
      .join("neighborhoods", "neighborhoods.id", "=", "houses.neighborhood_id")
      .select()
      .first();

    if (!house) {
      return response.status(400).json({ message: 'House not found' });
    }

    return response.json(house);
  },

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

    const { neighborhood } = await connection("neighborhoods")
      .where("id", neighborhood_id)
      .select("neighborhood")
      .first();

    if (!neighborhood) {
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
      neighborhood,
    });
  },

  async delete(request, response) {
    const { house_id } = request.params;

    const user_id = request.user.id;

    const hasDeletedHouse = await connection("houses")
      .where("id", house_id)
      .where("user_id", user_id)
      .del();

    if (!hasDeletedHouse) {
      return response.status(400).json({ message: 'House not found on your account' });
    }

    return response.json({ message: 'Neighborhood deleted'});
  },
};
