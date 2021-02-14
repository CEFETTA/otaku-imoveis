const connection = require("../database/connection");
const uuid = require("uuid");

module.exports = {
  async index(request, response) {
    const apartments = await connection("apartments")
      .join("neighborhoods", "neighborhoods.id", "=", "apartments.neighborhood_id")
      .select();

    if (!apartments) {
      return response.status(400).json({ message: "Apartment not found" });
    }

    return response.json(apartments);
  },

  async show(request, response) {
    const { apartment_id } = request.params;

    const apartment = await connection("apartments")
      .where("apartments.id", apartment_id)
      .join("neighborhoods", "neighborhoods.id", "=", "apartments.neighborhood_id")
      .select()
      .first();

    if (!apartment) {
      return response.status(400).json({ message: "Apartment not found" });
    }

    return response.json(apartment);
  },

  async create(request, response) {
    const {
      rooms,
      suites,
      living_rooms,
      dining_rooms,
      parking_spaces,
      area,
      has_wardrobe,
      description,
      floor,
      has_24h_concierge,
      condominium_price,
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

    await connection("apartments").insert({
      id,
      user_id,
      rooms,
      suites,
      living_rooms,
      dining_rooms,
      parking_spaces,
      area,
      has_wardrobe,
      description,
      floor,
      has_24h_concierge,
      condominium_price,
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
      dining_rooms,
      parking_spaces,
      area,
      has_wardrobe,
      description,
      floor,
      has_24h_concierge,
      condominium_price,
      rental_price,
      address,
      number,
      complement,
      neighborhood_id,
      city,
      state,
      cep,
      neighborhood: neighborhood.neighborhood,
    });
  },

  async delete(request, response) {
    const { apartment_id } = request.params;

    const user_id = request.user.id;

    const hasDeletedApartment = await connection("apartments")
      .where("id", apartment_id)
      .where("user_id", user_id)
      .del();

    if (!hasDeletedApartment) {
      return response.status(400).json({ message: "Apartment not found on your account" });
    }

    return response.json({ message: "Apartment deleted"});
  },
};
