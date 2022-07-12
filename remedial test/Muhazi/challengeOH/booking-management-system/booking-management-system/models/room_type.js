const mongoose = require('mongoose'); // Import mongoose
const mongooseDelete = require('mongoose-delete'); // Import mongoose-delete

const roomTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
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
roomTypeSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('room_type', roomTypeSchema); // Export good models
