const {
  order,
  category,
  discount,
  menu,
  users,
  orderMenu,
} = require("../models");

class Order {
  async getAllOrders(req, res, next) {
    try {
      let data = await order.findAll({
        attributes: { exclude: ["userId"] },
        include: [
          {
            model: users,
          },
        ],
      });

      if (data.length === 0) {
        return res.status(404).json({ errors: ["Order not Found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async getDetailOrder(req, res, next) {
    try {
      let data = await order.findOne({
        where: { id: req.params.id },
        attributes: { exclude: ["userId"] },
        include: [
          {
            model: users,
          },
        ],
      });

      if (!data) {
        return res.status(404).json({ errors: ["Order not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async createOrder(req, res, next) {
    try {
      const newData = await order.create(req.body);

      const data = await order.findOne({
        where: {
          id: newData.id,
        },
        attributes: { exclude: ["userId"] },
        include: [
          {
            model: users,
          },
        ],
      });
      res.status(201).json({ data });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async updateOrderMenu(req, res, next) {
    try {
      const updatedData = await order.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      console.log(req.params.id);
      if (updatedData[0] === 0) {
        return res.status(404).json({ errors: ["Order not Found"] });
      }

      const data = await order.findOne({
        where: { id: req.params.id },
        attributes: { exclude: ["userId"] },
        include: [
          {
            model: users,
          },
        ],
      });
      res.status(201).json({ data });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async deleteOrder(req, res, next) {
    try {
      let data = await order.destroy({ where: { id: req.params.id } });

      if (!data) {
        return res.status(404).json({ errors: ["Order not Found"] });
      }

      res.status(200).json({ message: "success delete " });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
}

module.exports = new Order();
