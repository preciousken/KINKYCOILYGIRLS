const Product = require('../models/product')


const createProduct = async (req,res,next)=>{
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        next(error)
    }
}

const updateProduct =async(req,res,next)=>{
    try {
        const newProduct = await Product.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        res.status(200).json(newProduct)
    } catch (error) {
        next(error)
        
    }
}

const deleteProduct = async(req,res,next)=>{
    try {
        const updatedProduct = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        next(error)
        
    }
}

const getSingleProduct = async(req,res,next)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        next(error)
        
    }
}

const getAllProducts = async(req,res,next)=>{
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        next(error)
    }
}


// get products by query
const getProductQuery = async (req,res,next)=>{
    try {
        const ProductQuery = await Product.find(req.query)
        res.status(200).json(ProductQuery)
    } catch (error) {
        next(error)
    }
}

// get latest product
const getLatestProduct = async (req,res,next)=>{
    try {
        const LatestProduct = await Product.find({}).sort('-createdAt')
        res.status(200).json(LatestProduct)
    } catch (error) {
        next(error)
    }
}

// search for product
const ProductSearch = async (req,res,next)=>{
    let title = req.query
    try {
        const ProductSearch = await Product.find({title:{"$regex":  /^ad$/i}})
        res.status(200).json(ProductSearch)
    } catch (error) {
        next(error)
    }
}



module.exports = {createProduct,updateProduct,deleteProduct,getSingleProduct, getAllProducts , getProductQuery,getLatestProduct,ProductSearch}
