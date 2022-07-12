const { query } = require("../models"); // Import connection from models

class Supplier {
  async getAllSuppliers(req, res) {
    const suppliers = await query("select * from suppliers");

    res.json({ data: suppliers });
  }

  async getDetailSuppliers(req, res) {
    const supplierId = req.params.id;

    const suppliers = await query(
      "select * from suppliers where id=? limit 1",
      [supplierId]
    );

    if (suppliers.length == 0)
      return res.status(404).json({ message: "supplier data not found" });

    res.json({
      suppliers: suppliers[0],
    });
  }

  async createSuppliers(req, res) {
    const name = req.body.name;

    if (name == null || name == "")
      return res.status(422).json({
        message: "please provide supplier's name",
      });

    const insertData = await query("insert into suppliers(name) values(?)", [
      name,
    ]);
    const newlyCreatedSuppliers = await query(
      "select * from suppliers where id=?",
      [insertData.insertId]
    );

    res.status(201).json({
      data: newlyCreatedSuppliers[0],
    });
  }

  async updateSuppliers(req, res) {
    const targetId = req.params.id;
    const updatedName = req.body.name;

    const targetSuppliers = await query("select * from suppliers where id=?", [
      targetId,
    ]);

    if (updatedName == null || updatedName == "")
      return res
        .status(422)
        .json({ message: "please provide supplier's name" });

    if (targetSuppliers.length == 0)
      return res.status(422).json({ message: "passed suppliers id not found" });

    await query("update suppliers set name=? where id=?", [
      updatedName,
      targetId,
    ]);

    const newlyUpdatedData = await query("select * from suppliers where id=?", [
      targetId,
    ]);

    res.json({
      data: newlyUpdatedData[0],
    });
  }

  async deleteSuppliers(req, res) {
    const targetId = req.params.id;

    const suppliers = await query("select * from suppliers where id=?", [
      targetId,
    ]);

    if (suppliers.length == 0)
      return res.status(422).json({
        message: "passed supplier id not found",
      });

    await query("delete from suppliers where id=?", [targetId]);

    res.json({ message: "supplier successfully deleted" });
  }
}

module.exports = new Supplier();
