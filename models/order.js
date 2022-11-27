const { Schema, model, Model } = require('mongoose');

const orderSchema = new Schema(
  {
        name: String,
        price: Number,
        shipping: Number,
        quantity: Number,
    totalAmount: {
      type: Number,
      default: 0,
    },
    isPaid: {
      type: Boolean,
    //   default: false,
      default:true,
    },
    delivery: String,
  },
  { timestamps: true }
);

const Order = model('order', orderSchema);

module.exports = Order;
