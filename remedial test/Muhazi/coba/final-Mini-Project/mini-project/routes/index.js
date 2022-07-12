const express = require("express");
const route = express.Router();
const { signIn, signUp } = require("../controllers/users");
const {
  getStartedEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");
const users = require("./users");
const events = require("./events");
const bookmark = require("./bookmarks");
const comment = require("./comments");
const rating = require("./ratings");
const authentication = require("../middlewares/validators/auth");

// Import validator
const {
  createUpdateUserValidator,
} = require("../middlewares/validators/users");

const {
  createOrUpadateEventValidator,
} = require("../middlewares/validators/events");

route.get("/", getStartedEvent);
route.use("/events", events);
route.post("/users/signin", signIn);
route.post("/users/signup", createUpdateUserValidator, signUp);

// route.use(authentication);

route.post("/events", createOrUpadateEventValidator, createEvent);
route.put("/events/:id", createOrUpadateEventValidator, updateEvent);
route.delete("/events/:id", deleteEvent);
route.use("/users", users);
route.use("/bookmarks", bookmark);
route.use("/comments", comment);
route.use("/ratings", rating);

module.exports = route;
