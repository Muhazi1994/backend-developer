const { customer, transaction } = require("../models");

class Customers {
  async getAllCustomer(req, res, next) {
    try {
      let data = await customer.findAll();
      if (data.length === 0) {
        return res.status(404).json({ errors: ["Customers not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  // Get detail customer
  async getDetailCustomer(req, res, next) {
    try {
      let data = await customer.findOne({
        where: { id: req.params.id },
      });

      // If customer not exists
      if (!data) {
        return res.status(404).json({ errors: ["Customer not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  // Create customer
  async createCustomer(req, res, next) {
    try {
      const createData = await customer.create(req.body);

      const data = await customer.findOne({
        where: {
          id: createData.id,
        },
      });

      res.status(201).json({ data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
  async updateCustomer(req, res, next) {
    try {
      const updateData = await customer.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (updateData[0] === 0) {
        return res.status(404).json({ errors: ["Customer not found"] });
      }
      // Find updated Data
      const data = await customer.findOne({
        where: {
          id: req.params.id,
        },
      });

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async deleteCustomer(req, res, next) {
    try {
      let data = await customer.destroy({ where: { id: req.params.id } });

      if (!data) {
        return res.status(404).json({ errors: ["Customer not found!"] });
      }
      res.status(200).json({ message: " Success delete Customer" });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
}
module.exports = new Customers();
