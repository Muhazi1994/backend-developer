const { customer } = require("../models");

class Customer {
  async getAllCustomer(req, res, next) {
    try {
      // Find all data in customer
      const data = await query("SELECT id, name FROM customers", []);

      // If customer not exists
      if (data.length === 0) {
        return res.status(404).json({ errors: ["Customer not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  // Get detail customer
  async getDetailCustomer(req, res, next) {
    try {
      // Find all data in customer
      const data = await query("SELECT id, name FROM customers WHERE id=?", [
        req.params.id,
      ]);

      // If customer not exists
      if (data.length === 0) {
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
      // Find good and price

      // Insert Data
      const insertedData = await query(
        "INSERT INTO customers ( name ) VALUES (?)",
        [req.body.name]
      );

      // Find new data
      const data = await query("SELECT id, name FROM customers WHERE id=?", [
        insertedData.insertId,
      ]);

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
      console.log(error);
    }
  }
  async updateCustomer(req, res, next) {
    try {
      // Find price of good

      // Update customer data
      const updateData = await query("UPDATE customers SET name=? WHERE id=?", [
        req.body.name,
        req.params.id,
      ]);
      if (updateData.affectedRows === 0) {
        return res.status(404).json({ errors: ["Customer not found"] });
      }
      // Find updated Data
      const data = await query("SELECT id, name FROM customers", [
        req.params.id,
      ]);

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
      console.log(error);
    }
  }

  async deleteCustomer(req, res, next) {
    try {
      const deletedData = await query("DELETE FROM customers WHERE id=?", [
        req.params.id,
      ]);

      if (deletedData.affectedRows === 0) {
        return res.status(404).json({
          errors: ["Customer has been deleted or it's not exists"],
        });
      }
      res.status(200).json({ data: [] });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
}
module.exports = new Customer();
