const connection = require("../database/connection");
const uuid = require("uuid");

module.exports = {
  async index(request, response) {
    const houses = await connection("houses")
      .select();

    if (!houses) {
      return response.status(400).json({ message: "Houses not found" });
    }

    const housesJoin = await Promise.all(houses.map(async house => {
      const neighborhood = await connection("neighborhoods")
        .where("id", house.neighborhood_id)
        .select("neighborhood")
        .first();

      return {
        ...house,
        ...neighborhood,
        url: `http://localhost:3333/files/${house.filename}`
      };
    }));

    return response.json(housesJoin);
  },

  async show(request, response) {
    const { house_id } = request.params;

    const house = await connection("houses")
      .where("houses.id", house_id)
      .select()
      .first();

    if (!house) {
      return response.status(400).json({ message: "House not found" });
    }

    const neighborhood = await connection("neighborhoods")
      .where("id", house.neighborhood_id)
      .select("neighborhood")
      .first();

    return response.json({
      ...house,
      ...neighborhood,
      url: `http://localhost:3333/files/${house.filename}`
    });
  },

  async create(request, response) {
    const {
      filename,
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

    const neighborhood = await connection("neighborhoods")
      .where("id", neighborhood_id)
      .select("neighborhood")
      .first();

    if (!neighborhood) {
      return response.status(400).json({ message: "Neighborhood not found" });
    }

    const id = uuid.v4();

    const user_id = request.user.id;

    await connection("houses").insert({
      id,
      user_id,
      filename,
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
      filename,
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
      neighborhood: neighborhood.neighborhood,
      url: `http://localhost:3333/files/${filename}`
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
      return response.status(400).json({ message: "House not found on your account" });
    }

    return response.json({ message: "House deleted"});
  },
};
