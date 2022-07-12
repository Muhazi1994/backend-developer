const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const goodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    supplier: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      ref: "supplier",
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

goodSchema.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("good", goodSchema);
