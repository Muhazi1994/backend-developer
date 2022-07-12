const { query } = require("../models");

class Good {
  async getAllGoods(req, res, next) {
    try {
      const data = await query(
        "SELECT g.id, g.name as goodName, g.price, s.name as supplierName FROM goods g JOIN suppliers s ON s.id=g.id_supplier",
        []
      );
      if (data.length === 0) {
        return res.status(404).json({ errors: ["there's no such good"] });
      }
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async getDetailGood(req, res, next) {
    try {
      const data = await query(
        "SELECT g.id, g.name as goodName, g.price, s.name as supplierName FROM goods g JOIN suppliers s ON s.id=g.id_supplier WHERE g.id=?",
        [req.params.id]
      );
      res.status(200).json({ data });
      if (data.length === 0) {
        return res.status(404).json({ errors: ["there's no such good"] });
      }
    } catch (error) {
      res.status(500).json({ errors: ["Internet server error"] });
      console.log(error);
    }
  }

  async createGood(req, res, next) {
    try {
      const insertedData = await query(
        "INSERT INTO goods(name, price, id_supplier) VALUES (?, ?, ?)",
        [req.body.name, req.body.price, req.body.id_supplier]
      );
      const data = await query(
        "SELECT g.id, g.name as goodName, g.price, s.name as supplierName FROM goods g JOIN suppliers s ON s.id=g.id_supplier WHERE g.id=?",
        [insertedData.insertId]
      );
      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internet server error"] });
    }
  }

  async updateGood(req, res, next) {
    try {
      const updateData = await query(
        "UPDATE goods SET name=?, price=?, id_supplier=? WHERE id=?",
        [req.body.name, req.body.price, req.body.id_supplier, req.params.id]
      );
      if (updateData.affectedRows === 0) {
        return res.status(404).json({ errors: ["there's no such good"] });
      }
      const data = await query(
        "SELECT g.id, g.name as goodName, g.price, s.name as supplierName FROM goods g JOIN suppliers s ON s.id=g.id_supplier WHERE g.id=?",
        [req.params.id]
      );
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internet server error"] });
      console.log(error);
    }
  }
  async deleteGood(req, res, next) {
    try {
      const deletedData = await query("DELETE FROM goods WHERE id=?", [
        req.params.id,
      ]);

      if (deletedData.affectedRows === 0) {
        return res.status(404).json({
          errors: ["there's no such good"],
        });
      }
      res.status(200).json({ data: [] });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
}

module.exports = new Good();
