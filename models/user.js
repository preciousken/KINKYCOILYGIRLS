const { Schema, model, Model } = require('mongoose');

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    // optional cart
    cart:{
        type:[String],
    },
    // optional order
    order:{
        type:[String],
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
  },
  { timestamps: true }
);

const User = model('user', userSchema);

module.exports = User;
