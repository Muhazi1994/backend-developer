const taskModel = require("../model/taskMuhazi");
app.post("/task", async (req, res, next) => {
  try {
    const taskCreated = await taskModel.create(req.body);
    res.send(taskCreated);
  } catch (err) {
    res.send(err);
  }
});
app.get("/task", async (req, res, next) => {
  try {
    const { title } = req.query;
    const filter = {};
    if (title) filter.title = title;
    const taskCreated = await taskModel.find(
      filter,
      "-_id -createdAt -updatedAt -__v"
    );
    res.send(taskCreated);
  } catch (err) {
    res.send(err);
  }
});
app.put("/:id", async (req, res, next) => {
  try {
    const updateUser = await taskModel.save(req.params.id, req.body);
    res.send(updateUser);
  } catch (error) {
    res.send(err);
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err,
  });
});

app.listen(3000, () => console.log(`app is up und running smoothly`));
module.exports = app;