const mongoose = require('mongoose');

const vegetableSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    pricing: [
      {
        size: {
          type: Number,
        },
        unit: {
          type: String,
        },
        container: {
          type: String,
        },
        price: {
          type: Number,
        },
        qty: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = Vegetable = mongoose.model('vegetable', vegetableSchema);
