const mongoose = require('mongoose'); // Import mongoose
const mongooseDelete = require('mongoose-delete'); // Import mongoose-delete

const roomNameSchema = new mongoose.Schema(
  {
    id_class: {
      type: String,
      required: true,
      ref: 'room_type'
    },
    address: {
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
roomNameSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('room_name', roomNameSchema); // Export good models
