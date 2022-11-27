const { Schema, model, Model } = require('mongoose');

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      default: 0,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5,
    },
  },
  { timestamps: true }
);


const Product = model('product', productSchema);

module.exports = Product;
