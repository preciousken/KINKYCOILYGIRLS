const express = require('express');
const { createOrder,updateOrder,deleteOrder, getSingleOrder,getAllOrders,countOrder } = require('../controllers/order');
const router = express.Router();
const {verifyUser} = require('../utilities/verifyToken')

// create
router.post('/:cartId',verifyUser,createOrder),
// update
router.put('/:cartId',verifyUser,updateOrder)
// delete
router.delete('/:id/:cartId',verifyUser,deleteOrder)
// get
router.get('/order/:cartId',verifyUser,getSingleOrder)
// get all
router.get('/',verifyUser,getAllOrders)


// countStatus
router.get('/countStatus',countOrder)

module.exports = router;