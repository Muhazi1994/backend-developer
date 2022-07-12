const mongoose = require('mongoose'); // Import mongoose
const mongooseDelete = require('mongoose-delete'); // Import mongoose-delete

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    isVerified: {
      type: String,
      required: true,
    },
  },
  {
    // Enable Timestamps
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    toJSON: { getters: true }, // Enable getters
  }
);

// Enable soft delete
customerSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('customer', customerSchema); // Export good models
