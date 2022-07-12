const { listTask } = require("../models");

class Task {
  static async getAllTask(req, res, next) {
    try {
      // Get all data of list Task
      let data = await listTask.findAll({
        where: { id_user: req.userData.id },
      });

      // If data of list task is nothing
      if (data.length === 0) {
        return next({ message: "There is no data of task", statusCode: 404 });
      }

      // if there is data in tabel

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async getOneTask(req, res, next) {
    try {
      // Get one data of list Task
      let data = await listTask.findOne({
        where: { id: req.params.id },
      });

      // If data of task not found
      if (!data) {
        return next({ message: "Task not found", statusCode: 404 });
      }

      // if found the data

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async createTask(req, res, next) {
    try {
      //   Create data task
      if (req.userData.id == req.body.id_user) {
        const insertData = await listTask.create(req.body);
        console.log(insertData);
        const data = await listTask.findOne({
          where: { id: insertData.id },
        });

        //   send data of inserted data
        res.status(201).json({ data });
      } else {
        return next({ message: "Id user not correct", statusCode: 404 });
      }
    } catch (error) {
      next(error);
    }
  }

  static async updateTask(req, res, next) {
    try {
      //   Update data task

      const updateData = await listTask.update(req.body, {
        where: { id: req.params.id },
      });

      //   If no data updated

      if (updateData[0] === 0) {
        return res.status(404).json({ errors: ["Task not found"] });
      }

      //   Find the updated data of task
      const data = await listTask.findOne({
        where: { id: req.params.id },
      });

      //   send data of inserted data
      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async deleteTask(req, res, next) {
    try {
      //   Delete data
      let data = await listTask.destroy({
        where: { id: req.params.id },
      });

      // If data deleted is null
      if (!data) {
        return res.status(404).json({ errors: ["Task not found"] });
      }

      // If success
      res.status(200).json({ message: "Success delete task" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Task;
