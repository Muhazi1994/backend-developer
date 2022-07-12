const { taskMuhazi } = require("../model/taskMuhazi");


class Task {
  async createTask(req, res, next) {
    try {
      // Create good
      const createData = await taskMuhazi.create(req.body);
      res.status(201).json({ data : createData});
    } catch (error) {
      next(error) 
    }
  }
  async getAllTask(req, res, next) {
    try {
      const AllTask = await taskMuhazi.findAll(req.param);
      res.status(200).json({ data: AllTask});
    } catch (error) {
      // If error
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
  async getDetailTask(req, res, next) {
    try {
      let detailTask = await taskMuhazi.findOne({ id: req.params.id });
      res.status(200).json({ data: detailTask });
    } catch (e) {
      // If error
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
  async updateTask(req, res, next) {
    try {
      // transaction table update data
      const updateData = await taskMuhazi.findById(req.body, {
        where: { id: req.params.id },
      });
      // If success
      res.status(201).json({ data: updateData });
    } catch (error) {
      // If error
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
  async deleteTask(req, res, next) {
    try {
      // Delete data
      const data = await taskMuhazi.findByIdAndDelete({
        where: { id: req.params.id },
      });
      // If success
      if (!data) {
        return res.status(404).json({ errors: ["Transaction not found"] });
      }
      res.status(200).json({ message: 'Success delete transaction' });
    } catch (error) {
      // If error
      res.status(500).json({ errors: ['Internal Server Error'] });
    }
  }
}


// app.post("/task", async (req, res, next) => {
//   try {
//     const task = await taskMuhazi.create(req.body);
//     res.send(task);
//   } catch (err) {
//     res.send(err);
//   }
// }),
// app.get("/task", async (req, res, next) => {
//   try {
//       const taskCreated = await taskMuhazi.findById(req.params.id);
      
//         // const { title } = req.query;
//         // const filter = {};
//     // if (title) filter.title = title;
//     // const taskCreated = await taskMuhazi.find(
//     //   filter,
//     //   "-_id -createdAt -updatedAt -__v"
//     // );
//     res.send(taskCreated);
//   } catch (err) {
//     res.send(err);
//   }
// });
// app.patch("/:id", async (req, res, next) => {
//   try {
//     const taskCreated = await taskMuhazi.save(req.params.id, req.body);
//     res.send(taskCreated);
//   } catch (error) {
//     res.send(err);
//   }
// });
// app.delete('/:id', async (req, res, next) => {
//     try {
//         const taskCreated = await taskMuhazi.findByIdAndDelete(req.params.id);
//         res.send(taskCreated);
//      } catch (error) {
//          res.send(err);
//      }

// })

// app.use((err, req, res, next) => {
//   res.status(500).json({
//     error: err,
//   });
// });

module.exports = new Task();