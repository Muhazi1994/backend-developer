const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const transactionSchema = new mongoose.Schema(
  {
    good: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      ref: "customers",
    },
    quantity: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
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

transactionSchema.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("transaction", transactionSchema);
