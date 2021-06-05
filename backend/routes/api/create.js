const createRouter = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Listing, User, Review } = require('../../db/models');


createRouter.post('/', asyncHandler( async(req, res) => {
    const { userId, productName, description, price } = req.body;
    console.log(userId, productName, description, price)
    
    const product = await Listing.create({
      userId,
      productName, 
      description, 
      price
    })
  
    return res.json({
      product
    })
    
  
}))


module.exports = createRouter; 