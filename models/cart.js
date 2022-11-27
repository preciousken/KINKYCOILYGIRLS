const { Schema, model, Model } = require('mongoose');

const cartSchema = new Schema(
  {
      title:String,
      images:[String],
      description:String,
      category:String,
      price:Number,
      rating:Number,
      status:String,
  },
  { timestamps: true }
);

const Cart = model('cart', cartSchema);

module.exports = Cart;

