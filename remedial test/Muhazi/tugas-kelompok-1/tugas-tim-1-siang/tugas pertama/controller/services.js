const { query } = require("../models");

class Service {
  async getAllService(req, res, next) {
    try {
      const data = await query("SELECT id, service FROM services s2");

      if (data.length === 0) {
        return res.status(404).json({ errors: ["Services not found"] });
      }
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Erroor"] });
    }
  }

  async getDetailService(req, res, next) {
    try {
      const data = await query(
        "SELECT id, service FROM services s2 WHERE id=?",
        [req.params.id]
      );

      if (data.length === 0) {
        return res.status(404).json({ errors: ["Service not found"] });
      }
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async createService(req, res, next) {
    try {
      const insertedData = await query(
        "INSERT INTO services(service) VALUES (?)",
        [req.body.service]
      );

      const data = await query(
        "SELECT id, service FROM services s2 WHERE id=? ",
        [insertedData.insertId]
      );

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
      console.log(error);
    }
  }

  async updateService(req, res, next) {
    try {
      const updateData = await query(
        "UPDATE services SET service=? WHERE id=?",
        [req.body.service, req.params.id]
      );
      if (updateData.affectedRows === 0) {
        return res.status(404).json({ errors: ["Service not found"] });
      }
      const data = await query("SELECT id, service FROM services s2", [
        req.params.id,
      ]);

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async deleteService(req, res, next) {
    try {
      const deletedData = await query("DELETE FROM services WHERE id=?", [
        req.params.id,
      ]);

      if (deletedData.affectedRows === 0) {
        return res.status(404).json({
          errors: ["Service has been deleted or it's not exists"],
        });
      }
      res.status(200).json({ data: [] });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
}

module.exports = new Service();
