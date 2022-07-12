const { service } = require("../models");

class Services {
  async getAllService(req, res, next) {
    try {
      let data = await service.findAll();
      if (data.length === 0) {
        return res.status(404).json({ errors: ["Services not found!"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async getDetailService(req, res, next) {
    try {
      let data = await service.findOne({
        where: { id: req.params.id },
      });

      if (!data) {
        return res.status(404).json({ errors: ["Service not found!"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async createService(req, res, next) {
    try {
      const createData = await service.create(req.body);

      const data = await service.findOne({
        where: {
          id: createData.id,
        },
      });

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async updateService(req, res, next) {
    try {
      const updateData = await service.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      if (updateData[0] === 0) {
        return res.status(404).json({ errors: ["Service not found!"] });
      }

      const data = await service.findOne({
        where: {
          id: req.params.id,
        },
      });

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async deleteService(req, res, next) {
    try {
      let data = await service.destroy({ where: { id: req.params.id } });

      if (!data) {
        return res.status(404).json({ errors: ["Service not found!"] });
      }

      res.status(200).json({ message: "Success delete Service" });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
}

module.exports = new Services();
