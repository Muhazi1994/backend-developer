const { transaction, good, supplier, customer } = require("../models");

class Transactions {
  async getAllTransactions(req, res, next) {
    try {
      let data = await transaction.findAll({
        attributes: { exclude: ["id_good", "id_customer"] },
        include: [
          {
            model: customer,
          },
          {
            model: good,
            include: [{ model: supplier }],
          },
        ],
      });

      if (data.length === 0) {
        return res.status(404).json({ errors: ["Transactions not found"] });
      }

      res.status(200).json({ data });
    } catch (e) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async getDetailTransaction(req, res, next) {
    try {
      let data = await transaction.findOne({
        where: { id: req.params.id },
        attributes: { exclude: ["id_good", "id_customer"] },
        include: [
          {
            model: customer,
          },
          {
            model: good,
            include: [{ model: supplier }],
          },
        ],
      });

      if (!data) {
        return res.status(404).json({ errors: ["Transaction not found"] });
      }

      res.status(200).json({ data });
    } catch (e) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async createTransaction(req, res, next) {
    try {
      const newData = await transaction.create(req.body);

      const data = await transaction.findOne({
        where: {
          id: newData.id,
        },
        attributes: { exclude: ["id_good", "id_customer"] },
        include: [
          {
            model: customer,
          },
          {
            model: good,
            include: [
              {
                model: supplier,
              },
            ],
          },
        ],
      });

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async updateTransaction(req, res, next) {
    try {
      const updatedData = await transaction.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      if (updatedData[0] === 0) {
        return res.status(404).json({ errors: ["Transaction not found"] });
      }

      const data = await transaction.findOne({
        where: {
          id: req.params.id,
        },
        attributes: { exclude: ["id_good", "id_customer"] },
        include: [
          {
            model: customer,
          },
          {
            model: good,
            include: [
              {
                model: supplier,
              },
            ],
          },
        ],
      });

      res.status(201).json({ data });
    } catch (e) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async deleteTransaction(req, res, next) {
    try {
      let data = await transaction.destroy({ where: { id: req.params.id } });

      if (!data) {
        return res.status(404).json({ errors: ["Transaction not found"] });
      }

      res.status(200).json({ message: "Success delete transaction" });
    } catch (e) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
}

module.exports = new Transactions();
