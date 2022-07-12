const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
      get: getImage,
    },
  },
  {
    timestamps: {
      createdAt: "createAt",
      updatedAt: "updateAt",
    },
    toJSON: { getters: true },
  }
);

function getImage(image) {
  if (!image) {
    return null;
  }
  return `/images/${Image}`;
}

customerSchema.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("customer", customerSchema);
