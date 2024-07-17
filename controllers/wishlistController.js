const wishlists = require('../models/wishlistModel')

//add to wishlist
exports.addToWishlist = async (req,res)=>{
    const {id,title,price,image,description,category,rating} = req.body
    const userId = req.payload
    try{
        const existingProduct = await wishlists.findOne({id,userId})
        if(existingProduct){
            res.status(406).json("Item already in your wishlist!!!")
        }else{
            const newProduct = new wishlists({
                id,title,price,description,category,image,rating,userId
            })
            await newProduct.save()
            res.status(200).json(newProduct)
        }
    }catch(err){
        res.status(401).json(err)
    }
}
//getwishlist
exports.getWishlist = async (req,res)=>{
    const userId = req.payload
    try{
        const allProducts = await wishlists.find({userId})
        res.status(200).json(allProducts)
    }catch(err){
        res.status(401).json(err)
    }
}
//removewishlistitem
exports.removeWishlistItem = async (req,res)=>{
    const {id} = req.params
    try{
        const removeItem = await wishlists.findByIdAndDelete({_id:id})
        res.status(200).json(removeItem)
    }catch(err){
        res.status(401).json(err)
    }
}