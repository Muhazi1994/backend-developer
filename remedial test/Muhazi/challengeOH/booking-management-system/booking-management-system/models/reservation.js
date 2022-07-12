const mongoose = require('mongoose'); // Import mongoose
const mongooseDelete = require('mongoose-delete'); // Import mongoose-delete

const reservationSchema = new mongoose.Schema(
    {
        id_customer: {
            type: Number,
            required: true,
            ref: 'customer',
        },
        id_room_type: {
            type: Number,
            required: true,
            ref: 'room_type',
        },
        date_in: {
            type: Date,
            required: true,
        },
        date_out: {
            type: Date,
            required: true,
        },
        date_range: {
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
reservationSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('reservation', reservationSchema); // Export good models
