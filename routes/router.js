const express = require('express')
const productController = require('../controllers/productController')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMidlleware')
const wishlistController = require('../controllers/wishlistController')
const cartController = require('../controllers/cartController')

const router = new express.Router()
// get all products
router.get('/all-products',productController.getAllProductsController)
// view product
router.get('/:id/view-product',productController.getAProductController)
//register
router.post('/register',userController.registerController)
//logi n
router.post('/login',userController.loginController)
//addtowishlist
router.post('/addToWishlist',jwtMiddleware,wishlistController.addToWishlist)
//get wishlist
router.get('/get-wishlist',jwtMiddleware,wishlistController.getWishlist)
//wishlist remove
router.delete('/wishlist/:id/remove',jwtMiddleware,wishlistController.removeWishlistItem)
//addtocart
router.post('/addToCart',jwtMiddleware,cartController.addToCart)
//getcart
router.get('/get-cart',jwtMiddleware,cartController.getCart)
//removecart item
router.delete('/cart/:id/remove',jwtMiddleware,cartController.removeCartItem)
//increment cart
router.get('/cart/:id/increment',jwtMiddleware,cartController.incrementCart)
//decrement cart
router.get('/cart/:id/decrement',jwtMiddleware,cartController.decrementCart)
//emptycart
router.delete('/empty-cart',jwtMiddleware,cartController.emptyCart)

module.exports = router
