const { good, supplier } = require("../models");

class Good {
  async getAllGoods(req, res, next) {
    try {
      let data = await good.findAll({
        attributes: { exclude: ["id_supplier"] },
        include: [
          {
            model: supplier,
          },
        ],
      });

      if (data.length === 0) {
        return res.status(404).json({ errors: ["Goods not Found"] });
      }
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
  async getDetailGood(req, res, next) {
    try {
      let data = await good.findOne({
        where: { id: req.params.id },
        attributes: { exclude: ["id_supplier"] },
        include: [
          {
            model: supplier,
          },
        ],
      });

      if (!data) {
        return res.status(404).json({ errors: ["Good not Found"] });
      }
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
  async createGood(req, res, next) {
    try {
      // Create good
      const newData = await good.create(req.body);

      // Find good with join
      const data = await good.findOne({
        where: {
          id: newData.id,
        },
        attributes: { exclude: ["id_supplier"] },
        include: [
          {
            model: supplier,
          },
        ],
      });

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
  async updateGood(req, res, next) {
    try {
      const updatedData = await good.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (updatedData[0] === 0) {
        return res.status(404).json({ errors: ["good not found"] });
      }
      const data = await good.findOne({
        where: { id: updatedData.id },
        attributes: { exclude: ["id_supplier"] },
        include: [
          {
            model: supplier,
          },
        ],
      });

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
  async deleteGood(req, res, next) {
    try {
      let data = await good.destroy({ where: { id: req.params.id } });

      if (!data) {
        return res.status(404).json({ errors: ["good not found"] });
      }

      res.status(200).json({ message: "succes delete good" });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
}

module.exports = new Good();
