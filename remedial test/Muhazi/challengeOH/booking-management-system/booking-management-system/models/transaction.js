const mongoose = require('mongoose'); // Import mongoose
const mongooseDelete = require('mongoose-delete'); // Import mongoose-delete

const transactionSchema = new mongoose.Schema(
  {
    id_reservation: {
      type: Number,
      required: true,
      ref: 'reservation'
    },
    id_customer: {
      type: Number,
      required: true,
      ref: 'customer',
    },
    total: {
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
  }
);

// Enable soft delete
transactionSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('transaction', transactionSchema); // Export good models
