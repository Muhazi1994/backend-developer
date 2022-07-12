 const { supplier, good } = require("../models");

class Suppliers {
    async getAllSuppliers (req, res, next) {
        try {
            let data = await supplier.findAll({
            attributes: { exclude: ['id_good']},
        include: [
            {
                model: good,
            },
        ]
        });
        if (data.length === 0) {
          return res.status(404).json({ errors: ["Transactions not found"] });
        }
        res.status(200).json({ data });
    } catch (e) {
      // If error
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }
    async getDetailSupplier (req, res, next) {
         try {
          let data = await supplier.findOne({
              where: { id: req.params.id},
              attributes: { exclude: [ 'id_good']},
              include: [
                  {
                      model: good,
                  },
              ],
          });
          if (!data) {
            return res.status(404).json({ errors: ["Transaction not found"] });
          }
    res.status(200).json({ data });
    } catch (e) {
      // If error
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }     
    async createSupplier(req, res, next) {
    try {
      // Create good
      const newData = await supplier.create(req.body);

      // Find good with join
      const data = await supplier.findOne({
        where: {
          id: newData.id,
        },
        attributes: { exclude: ["id_good"] },
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
    async updateSupplier (req, res, next){
        try {
        const updateData = await supplier.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if ( updateData [0] === 0) {
          return res.status(404).json({ errors: ["Transaction not found"] });
        }
        const data= await supplier.findOne({
            where: {
                id: req.params.id,
            },
            attributes: { exclude: ['id_good']},
            include: [
                {
                    model: good,
                },
            ],
        });
        res.status(201).json({ data });
    } catch (e) {
      // If error
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
    }
        
      async deleteSupplier (req, res, next) {
    try {
        let data = await supplier.destroy({ where: { id: req.params.id}});
        if (!data) {
            return res.status(404).json({ errors: ['Transaction not found'] });
        }
         res.status(200).json({ message: 'Success delete transaction' });
    } catch (e) {
      // If error
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }
}
module.exports = new Suppliers();
