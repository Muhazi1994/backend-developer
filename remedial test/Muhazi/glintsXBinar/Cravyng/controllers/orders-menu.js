const {
  order,
  category,
  discount,
  menu,
  users,
  orderMenu,
} = require("../models");

class Order_menu {
  // get all order
  async getAllOrderMenu(req, res, next) {
    try {
      let data = await orderMenu.findAll({
        attributes: {
          exclude: [
            "menuId",
            "orderId",
            "appliedVoucher",
            "createdAt",
            "updatedAt",
            "deletedAt",
          ],
        },
        include: [
          {
            model: menu,
            attributes: ["food", "price", "specialPrice"],
            include: [
              {
                model: users,
                attributes: ["name"],
              },
            ],
          },
          {
            model: order,
            where: { userId: req.userData.id },
            attributes: ["id", "rating"],
            include: [
              {
                model: users,
                attributes: ["name"],
              },
            ],
          },
        ],
      });

      if (data.length === 0) {
        return res.status(404).json({ errors: ["orderMenu not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  // get detail order_menu
  async getDetailOrderMenu(req, res, next) {
    try {
      let data = await orderMenu.findOne({
        where: { id: req.params.id },
        attributes: { exclude: ["menuId", "orderid"] },
        include: [
          {
            model: menu,
            attributes: { exclude: ["userId", "categoryId"] },
            include: [
              {
                model: users,
              },
              {
                model: category,
              },
            ],
          },
          {
            model: order,
            attributes: { exclude: ["userId"] },
            include: [
              {
                model: users,
              },
            ],
          },
        ],
      });

      if (!data) {
        return res.status(404).json({ errors: ["Order Not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async createorderMenu(req, res, next) {
    try {
      const newData = await orderMenu.create(req.body);

      const data = await orderMenu.findOne({
        where: {
          id: newData.id,
        },
        attributes: { exclude: ["menuId", "orderId"] },
        include: [
          {
            model: menu,
            attributes: { exclude: ["userId", "categoryId"] },
            include: [
              {
                model: users,
              },
              {
                model: category,
              },
            ],
          },
          {
            model: order,
            attributes: { exclude: ["userId"] },
            include: [
              {
                model: users,
              },
            ],
          },
        ],
      });

      res.status(201).json({ data });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async getOrderMenuByOrderId(req, res, next) {
    try {
      const data = await orderMenu.findAll({
        where: { orderId: req.query.orderId },
        attributes: { exclude: ["menuId", "orderId"] },
        include: [
          {
            model: menu,
            attributes: { exclude: ["userId", "categoryId"] },
            include: [
              {
                model: users,
              },
              {
                model: category,
              },
            ],
          },
          {
            model: order,
            attributes: { exclude: ["userId"] },
            include: [
              {
                model: users,
              },
            ],
          },
        ],
      });

      if (!data) {
        return res.status(404).json({ errors: ["order not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async updateOrderMenu(req, res, next) {
    try {
      const updatedData = await orderMenu.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (updatedData[0] === 0) {
        return res.status(404).json({ errors: ["Order not Found"] });
      }

      const data = await orderMenu.findOne({
        where: { id: req.params.id },
        attributes: { exclude: ["menuId", "orderId"] },
        include: [
          {
            model: menu,
            attributes: { exclude: ["userId", "categoryId"] },
            include: [
              {
                model: users,
              },
              {
                model: category,
              },
            ],
          },
          {
            model: order,
            attributes: { exclude: ["userId"] },
            include: [
              {
                model: users,
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

  async deleteOrderMenu(req, res, next) {
    try {
      let data = await orderMenu.destroy({ where: { id: req.params.id } });

      if (!data) {
        return res.status(404).json({ errors: ["Order not Found"] });
      }

      res.status(200).json({ message: "delete succes" });
    } catch (error) {
      res.status(500).json({ errors: ["internal Server Error"] });
    }
  }
}

module.exports = new Order_menu();
