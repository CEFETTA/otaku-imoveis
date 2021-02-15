const connection = require("../database/connection");
const uuid = require("uuid");

module.exports = {
  async index(request, response) {
    const visits = await connection("visits")
      .select();

    if (!visits) {
      return response.status(400).json({ message: "Visits not found" });
    }

    const joinVisits = await Promise.all(visits.map(async visit => {
      if (visit.apartment_id) {
        const apartment = await connection("apartments")
        .where("apartments.id", visit.apartment_id)
        .join("neighborhoods", "neighborhoods.id", "=", "apartments.neighborhood_id")
        .select()
        .first();

        delete apartment.id;
        return { ...visit, apartment }
      }

      if (visit.house_id) {
        const house = await connection("houses")
          .where("houses.id", visit.house_id)
          .join("neighborhoods", "neighborhoods.id", "=", "houses.neighborhood_id")
          .select()
          .first();

        delete house.id;
        return { ...visit, house }
      }

      return visit;
    }));

    return response.json(joinVisits);
  },

  async create(request, response) {
    const { house_id, apartment_id, scheduled_to } = request.body;

    if (!house_id && !apartment_id || house_id && apartment_id) {
      return response.status(400).json({
        message: "You need to inform house_id or apartment_id"
      });
    }

    if (house_id) {
      const house = await connection("houses")
        .where("id", house_id)
        .select()
        .first();

      if (!house) {
        return response.status(400).json({ message: "House not found" });
      }
    }

    if (apartment_id) {
      const apartment = await connection("apartments")
        .where("id", apartment_id)
        .select()
        .first();

      if (!apartment) {
        return response.status(400).json({ message: "Apartment not found" });
      }
    }

    const id = uuid.v4();
    const user_id = request.user.id;

    await connection("visits").insert({
      id,
      user_id,
      house_id,
      apartment_id,
      scheduled_to,
    });

    return response.json({
      id,
      user_id,
      house_id,
      apartment_id,
      scheduled_to,
    });
  },

  async delete(request, response) {
    const { visit_id } = request.params;

    const user_id = request.user.id;

    const hasDeletedVisit = await connection("visits")
      .where("id", visit_id)
      .where("user_id", user_id)
      .del();

    if (!hasDeletedVisit) {
      return response.status(400).json({
        message: "Visit not found"
      });
    }

    return response.json({ message: "Visit deleted"});
  }
};
