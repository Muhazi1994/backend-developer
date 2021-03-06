const { events, comments, users, categories, ratings } = require("../models");

const { Op } = require("sequelize");

const moment = require("moment");
const { generateToken } = require("../helpers/jwt");
// events
const pagination = (page, size) => {
  const limit = size ? +size : 8;
  const offset = ((page - 1) * limit) | 0;

  return { limit, offset };
};

const paging = (data, page, limit) => {
  const { count: totalItems, rows: events } = data;
  const currentPage = page ? +page : 1;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, events, totalPages, currentPage };
};

class Events {
  static async getStartedEvent(req, res, next) {
    try {
      console.log(moment());
      const dataStarted = await events.findAll({
        attributes: [
          "id",
          "photoEvent",
          "dateStart",
          "title",
          "speakerName",
          "time",
        ],
        include: [{ model: categories, attributes: ["name"] }],
        limit: 4,
        order: [["dateStart", "DESC"]],
      });

      if (!dataStarted) {
        return res.status(404).json({ errors: ["Events Tidak di temukan"] });
      }

      const dataCategory = await categories.findAll({
        attributes: ["name"],
        limit: 8,
      });

      const dataDesign = await events.findAll({
        where: { categoryId: 2 },
        attributes: [
          "id",
          "photoEvent",
          "dateStart",
          "title",
          "organizer",
          "time",
        ],
        include: [
          { model: users, attributes: ["firstName"] },
          { model: categories, attributes: ["name"] },
        ],
        limit: 4,
        order: [["dateStart", "DESC"]],
      });
      res.status(200).json({ dataStarted, dataCategory, dataDesign });
    } catch (error) {
      next(error);
    }
  }

  static async getAllEvents(req, res, next) {
    try {
      const { page, size } = req.query;
      const { limit, offset } = pagination(page, size);

      let data = await events.findAndCountAll({
        attributes: [
          "id",
          "photoEvent",
          "dateStart",
          "dateEnd",
          "title",
          "time",
        ],
        include: [
          { model: users, attributes: ["firstName", "lastName"] },
          { model: categories, attributes: ["name"] },
        ],
        limit,
        offset,

        order: [["dateStart", "ASC"]],
      });
      console.log(data);

      if (data.length === 0) {
        return res.status(404).json({ errors: ["Events not found"] });
      }

      res.status(200).json(paging(data, page, limit));
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async searchEvent(req, res, next) {
    try {
      const { page, size } = req.query;
      const { limit, offset } = pagination(page, size);
      const search = req.body.search;

      const data = await events.findAndCountAll({
        where: {
          [Op.or]: [
            {
              title: {
                [Op.iLike]: `%${search}%`,
              },
            },
          ],
        },
        attributes: ["photoEvent", "dateStart", "title", "time"],
        include: [
          { model: users, attributes: ["firstName", "lastName"] },
          { model: categories, attributes: ["name"] },
        ],
        limit,
        offset,

        order: [["dateStart", "DESC"]],
      });

      if (data.count === 0) {
        return res.status(404).json({ errors: ["Events not found"] });
      }
      res.status(200).json(paging(data, page, limit));
    } catch (error) {
      next(error);
    }
  }

  static async getEventByCategory(req, res, next) {
    try {
      const { page, size } = req.query;
      const { limit, offset } = pagination(page, size);

      let data = await events.findAndCountAll({
        where: { categoryId: req.params.id },
        attributes: ["photoEvent", "dateStart", "dateEnd", "title", "time"],
        include: [
          { model: users, attributes: ["firstName", "lastName"] },
          { model: categories, attributes: ["name"] },
        ],
        limit,
        offset,
      });

      if (data.rows.length === 0) {
        return res.status(404).json({ errors: ["Events not found"] });
      }

      res.status(200).json(paging(data, page, limit));
    } catch (error) {
      next(error);
    }
  }

  static async getAllEventsByWeek(req, res, next) {
    try {
      const { page, size } = req.query;
      const { limit, offset } = pagination(page, size);

      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth();
      let day = today.getDate();
      const hariIni = new Date(year, month, day).setHours(0, 0, 0, 0);
      const besok = new Date(year, month, day + 7).setHours(24, 0, 0, 0);

      let firstDays = moment(hariIni).format("YYYY-MM-DD ");
      let lastDays = moment(besok).format("YYYY-MM-DD ");

      let data = await events.findAndCountAll({
        where: {
          dateStart: {
            [Op.between]: [firstDays, lastDays],
          },
        },
        attributes: ["photoEvent", "dateStart", "dateEnd", "title", "time"],
        include: [
          { model: users, attributes: ["firstName", "lastName"] },
          { model: categories, attributes: ["name"] },
        ],
        limit,
        offset,

        order: [["dateStart", "DESC"]],
      });
      if (data.count === 0) {
        return res.status(404).json({ errors: ["Events not found"] });
      }

      res.status(200).json(paging(data, page, limit));
    } catch (error) {
      next(error);
    }
  }

  static async getAllEventsByMonth(req, res, next) {
    try {
      const { page, size } = req.query;
      const { limit, offset } = pagination(page, size);

      const startOfMonth = moment().startOf("month").format("YYYY-MM-DD hh:mm");
      const endOfMonth = moment().endOf("month").format("YYYY-MM-DD hh:mm");
      let data = await events.findAndCountAll({
        where: {
          dateStart: {
            [Op.between]: [startOfMonth, endOfMonth],
          },
        },
        attributes: ["photoEvent", "dateStart", "title", "time"],
        include: [
          { model: users, attributes: ["firstName", "lastName"] },
          { model: categories, attributes: ["name"] },
        ],
        limit,
        offset,

        order: [["dateStart", "ASC"]],
      });

      if (data.count === 0) {
        return res.status(404).json({ errors: ["Events not found"] });
      }

      res.status(200).json(paging(data, page, limit));
    } catch (error) {
      next(error);
    }
  }

  static async getAllEventsByYear(req, res, next) {
    try {
      const { page, size } = req.query;
      const { limit, offset } = pagination(page, size);

      const today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth();
      const day = today.getDate();

      const hariIni = new Date(year - 1, month, day).setHours(0, 0, 0, 0);
      const besok = new Date(year, month + 1, day).setHours(24, 0, 0, 0);

      const startOfYear = moment(hariIni).format("YYYY-MM-DD ");
      const endOfYear = moment(besok).format("YYYY-MM-DD ");

      let data = await events.findAndCountAll({
        where: {
          dateStart: {
            [Op.between]: [startOfYear, endOfYear],
          },
        },
        attributes: ["photoEvent", "dateStart", "dateEnd", "title", "time"],
        include: [
          { model: users, attributes: ["firstName", "lastName"] },
          { model: categories, attributes: ["name"] },
        ],
        limit,
        offset,

        order: [["dateStart", "ASC"]],
      });

      if (data.count === 0) {
        return res.status(404).json({ errors: ["Events not found"] });
      }
      console.log(startOfYear);
      console.log(endOfYear);

      res.status(200).json(paging(data, page, limit));
    } catch (error) {
      next(error);
    }
  }

  static async getDetailEvent(req, res, next) {
    try {
      const data = await events.findOne({
        where: { id: req.params.id },
      });

      if (!data) {
        res.status(401).json({ message: ["Id not found"] });
      }

      const comment = await comments.findAll({
        include: [{ model: users, attributes: ["firstName", "image"] }],
        where: { eventId: data.id },
      });
      const sum = await ratings.sum("rating", {
        where: { eventId: req.params.id },
      });

      const count = await ratings.count({
        where: { eventId: req.params.id },
      });
      // let commentTime = moment(comments, "MM/DD/YYYY hh:mm:ss A").fromNow();

      const average = sum / count;

      res.status(201).json({ data, comment, average });
    } catch (error) {
      next(error);
    }
  }

  static async createEvent(req, res, next) {
    try {
      const insertEvent = await events.create({
        title: req.body.title,
        photoEvent: req.body.photoEvent,
        detail: req.body.detail,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
        time: req.body.time,
        speakerName: req.body.speakerName,
        speakerPhoto: req.body.speakerPhoto,
        organizer: req.body.organizer,
        linkMeet: req.body.linkMeet,
        userId: req.userData.id,
        categoryId: req.body.categoryId,
      });
      console.log(moment(req.body.dateStart).local());

      const data = await events.findOne({
        where: { id: insertEvent.id },
      });

      res.status(201).json({ data, message: "Succes Add Event" });
    } catch (error) {
      next(error);
    }
  }

  static async updateEvent(req, res, next) {
    try {
      const eventUser = await events.findOne({
        where: { id: req.params.id },
      });
      console.log(eventUser);

      if (eventUser.userId !== req.userData.id) {
        return res.status(401).json({
          errors: ["You do not have permission to access this!"],
        });
      }
      const eventUpdate = await events.update(
        {
          title: req.body.title,
          photoEvent: req.body.photoEvent,
          detail: req.body.detail,
          dateStart: req.body.dateStart,
          dateEnd: req.body.dateEnd,
          time: req.body.time,
          speakerName: req.body.speakerName,
          speakerPhoto: req.body.speakerPhoto,
          organizer: req.body.organizer,
          linkMeet: req.body.linkMeet,
          userId: req.userData.id,
          categoryId: req.body.categoryId,
        },
        { where: { id: req.params.id } }
      );

      const data = await events.findOne({
        where: { id: req.params.id },
      });

      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async eventTomorrow(req, res, next) {
    try {
      const { page, size } = req.query;
      const { limit, offset } = pagination(page, size);

      const today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth();
      const day = today.getDate();

      const hariIni = new Date(year, month, day + 1).setHours(0, 0, 0, 0);
      const besok = new Date(year, month, day + 1).setHours(24, 0, 0, 0);

      const todayStart = moment(hariIni).format("YYYY-MM-DD ");
      const now = moment(besok).format("YYYY-MM-DD ");

      let data = await events.findAndCountAll({
        where: {
          dateStart: {
            [Op.between]: [todayStart, now],
          },
        },
        attributes: ["photoEvent", "dateStart", "dateEnd", "title", "time"],
        include: [
          { model: users, attributes: ["firstName", "lastName"] },
          { model: categories, attributes: ["name"] },
        ],
        limit,
        offset,
        order: [["dateStart", "DESC"]],
      });

      if (data.count === 0) {
        return res.status(404).json({ errors: ["Events not found"] });
      }

      res.status(200).json(paging(data, page, limit));
    } catch (error) {
      next(error);
    }
  }
  static async eventToday(req, res, next) {
    try {
      const { page, size } = req.query;
      const { limit, offset } = pagination(page, size);

      var todayStart = new Date().setHours(0, 0, 0, 0);
      var now = new Date().setHours(24, 0, 0, 0);

      todayStart = moment(todayStart).format("YYYY-MM-DD hh:mm:ss.ms");
      now = moment(now).format("YYYY-MM-DD hh:mm:ss.ms");

      let data = await events.findAndCountAll({
        where: {
          dateStart: {
            [Op.between]: [todayStart, now],
          },
        },
        attributes: ["photoEvent", "dateStart", "dateEnd", "title", "time"],
        include: [
          { model: users, attributes: ["firstName", "lastName"] },
          { model: categories, attributes: ["name"] },
        ],
        limit,
        offset,
        order: [["dateStart", "DESC"]],
      });

      if (data.count === 0) {
        return res.status(404).json({ errors: ["Events not found"] });
      }

      res.status(200).json(paging(data, page, limit));
    } catch (error) {
      next(error);
    }
  }

  static async deleteEvent(req, res, next) {
    try {
      const deletetUser = await events.findOne({
        where: { id: req.params.id },
      });

      if (deletetUser.userId !== req.userData.id) {
        return res.status(401).json({
          errors: ["You do not have permission to access this!"],
        });
      }
      let data = await events.destroy({
        where: { id: req.params.id },
      });

      res.status(200).json({ message: "Success delete event" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Events;
