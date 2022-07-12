const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      req: [true, "title is required"],
    },
    description: {
      type: String,
    },
    done: {
      type: Boolean,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "hard"],
    },
    date: {
      type: String,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task_Muhazi", taskSchema);
