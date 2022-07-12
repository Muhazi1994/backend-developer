const { query } = require('../models'); // Import connection

class Suppliers {
  // Get all transaction
  async getAllSuppliers(req, res, next) {
    try {
      // Find all data in transactions
      const data = await query(
        'SELECT s.id, s.name as supplierName, c.name as customerName FROM suppliers s JOIN goods g ON g.id_supplier=s.id JOIN transactions t ON t.id_good =g.id JOIN customers c ON t.id_customer=c.id ORDER BY s.id',
        []
      );
     
      // If transactions not exists
      if (data.length === 0) {
        return res.status(404).json({ errors: ['Suppliers not found'] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }

  // Get detail transaction
  async getDetailSuppliers(req, res, next) {
    try {
      // Find all data in transactions
      const data = await query(
        'SELECT s.id, s.name as supplierName, c.name as customerName FROM suppliers s JOIN goods g ON g.id_supplier=s.id JOIN transactions t ON t.id_good =g.id JOIN customers c ON t.id_customer=c.id WHERE s.id=?',
        [req.params.id]
      );
      // If transactions not exists
      if (data.length === 0) {
        return res.status(404).json({ errors: ['Supplier not found'] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }

  // Create transaction
  async createSuppliers(req, res, next) {
    try {
      const goods = await query('SELECT * FROM goods WHERE id=?', [
        req.body.id_good,
      ]);
      const price = goods[0].price;
      const total = parseFloat(price) * parseFloat(req.body.quantity);

      // Insert Data
      const insertedData = await query(
        'INSERT INTO suppliers(name) VALUES (?, ?, ?, ?)',
        [req.body.id_name, total]
      );

      // Find new data
      const data = await query(
        'SELECT s.id, s.name as supplierName, c.name as customerName FROM suppliers s JOIN goods g ON g.id_supplier=s.id JOIN transactions t ON t.id_good =g.id JOIN customers c ON t.id_customer=c.id WHERE s.id=?',
        [insertedData.insertId]
      );

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }
  async updateSuppliers(req, res, next) {
    try {
      // Find price of good
      const goods = await query('SELECT * FROM goods WHERE id=?', [
        req.body.id_good,
      ]);
      const price = goods[0].price;
      const total = parseFloat(price) * parseFloat(req.body.quantity);

      // Update transaction data
      const updateData = await query(
        'UPDATE suppliers SET id_name=? total=? WHERE id=?',
        [
          req.body.id_name,
          total,
          req.params.id,
        ]
      );
      if (updateData.affectedRows === 0) {
        return res.status(404).json({ errors: ['Suppliers not found']})
      }
       // Find updated Data
       const data = await query(
        'SELECT s.id, s.name as supplierName, c.name as customerName FROM suppliers s JOIN goods g ON g.id_supplier=s.id JOIN transactions t ON t.id_good =g.id JOIN customers c ON t.id_customer=c.id WHERE s.id=?',
        [req.params.id]
      );

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }

  async deleteSuppliers(req, res, next) {
    try {
      const deletedData = await query('DELETE FROM suppliers WHERE id=?', [
        req.params.id,
      ]);

      if (deletedData.affectedRows === 0) {
        return res.status(404).json({
          errors: ["suppliers has been deleted or it's not exists"],
        });
      }
      res.status(200).json({ data: [] });
    } catch (error) {
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }
}
module.exports = new Suppliers();



// const { query } = require('../models'); // Import connection from models

// class Supplier {
//     async getAllSuppliers (req, res){

//         const suppliers = await query('select * from suppliers');

//         res.json({data: suppliers})
//     }

//     async getDetailSuppliers(req, res) {
//         const supplierId = req.params.id;

//         const suppliers = await query('select * from suppliers where id=? limit 1', [ supplierId ])


//         if(suppliers.length == 0)
//             return res.status(404).json({message: 'supplier data not found'})

//         res.json({
//             suppliers: suppliers[0]
//         })
//     }

//     async createSuppliers(req, res) {
//         const name = req.body.name;

//         if(name == null || name == '')
//             return res.status(422).json({
//                 message: "please provide supplier's name",
//             })

//         const insertData = await query("insert into suppliers(name) values(?)", [ name ]);
//         const newlyCreatedSuppliers = await query("select * from suppliers where id=?", [insertData.insertId])

//         res.status(201).json({
//             data: newlyCreatedSuppliers[0]
//         })
//     }

//     async updateSuppliers(req, res) {
//         const targetId = req.params.id;
//         const updatedName = req.body.name;

//         const targetSuppliers = await query('select * from suppliers where id=?', [targetId])

//         if(updatedName == null || updatedName == '')
//             return res.status(422).json({ message: "please provide supplier's name"})

//         if(targetSuppliers.length == 0)
//             return res.status(422).json({message: 'passed suppliers id not found'})

//         await query('update suppliers set name=? where id=?', [updatedName, targetId])

//         const newlyUpdatedData = await query('select * from suppliers where id=?', [targetId])

//         res.json({
//             data: newlyUpdatedData[0]
//         })
//     }

//     async deleteSuppliers(req, res) {
//         const targetId = req.params.id;

//         const suppliers = await query('select * from suppliers where id=?', [targetId])

//         if(suppliers.length == 0)
//             return res.status(422).json({
//                 message: 'passed supplier id not found',
//             })

//         await query('delete from suppliers where id=?', [targetId])

//         res.json({message: 'supplier successfully deleted'});
//     }
// }

// module.exports = new Supplier();