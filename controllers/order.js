const Order = require('../models/cart');
const Cart = require('../models/cart');
const {createError} = require('../utilities/error');

// create Order (WORKING)
const createOrder = async(req,res,next)=>{
    const cartId = req.params.cartId;
    const newOrder = new Order(req.body)

    try {
        const savedOrder = await newOrder.save()
        try {
            await Cart.findByIdAndUpdate(cartId,
                {$push : {order: savedOrder._id},
            });
        } catch (error) {
            next(error);
        }
        res.status(200).json(savedOrder)
    } catch (error) {
        next(error)
    }
}

// update order
const updateOrder = async(req,res,next)=>{
    const cartId = req.params.cartId;
    try {
        await Order.findByIdAndUpdate(req.params.cartId);
        try {
            await Cart.findByIdAndUpdate(cartId,
                {$pull : {order: req.params.id},
            });
        } catch (error) {
            next(error);
        }
        
        res.status(200).json('Order has been deleted')
    } catch (error) {
        next(error)
        
    }
}



// remove order (WORKING)
const deleteOrder = async(req,res,next)=>{
    const cartId = req.params.cartId;
    try {
        await Order.findByIdAndDelete(req.params.cartId);
        try {
            await Cart.findByIdAndUpdate(cartId,
                {$pull : {order: req.params.id},
            });
        } catch (error) {
            next(error);
        }
        
        res.status(200).json('order has been deleted')
    } catch (error) {
        next(error)
        
    }
}

const getSingleOrder = async(req,res,next)=>{
    try {
        const order = await Order.findById(req.params.id)
        res.status(200).json(order)
    } catch (error) {
        next(error)
        
    }
}

const getAllOrders = async(req,res,next)=>{
    try {
        const order = await Order.find({})
        res.status(200).json(order)
    } catch (error) {
        next(error)
    }
}


// count order by status
const countOrder = async(req,res,next)=>{
    const status = req.query.status
    try {
     const statusCount =   await Order.countDocuments({status: status})
        res.status(200).json(statusCount)
    } catch (error) {
        next(error)
    }
}



module.exports = {createOrder,updateOrder,deleteOrder, getSingleOrder,getAllOrders , countOrder}