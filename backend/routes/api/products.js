const productRouter = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Listing, User, Review } = require('../../db/models');
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3');

productRouter.get('/', asyncHandler( async(req, res) => {
    const products = await Listing.findAll();
    const reviews = await Review.findAll();
    
    res.json({products, reviews});
     
}));

productRouter.get('/:id', asyncHandler( async(req, res) => {
    const { id } = req.params
    
    const product = await Listing.findByPk(id)
    res.json({product})

}))

// productRouter.post(
//     "/",
//     singleMulterUpload("image"),
//     asyncHandler(async (req, res) => {
//       const { productName, description, price } = req.body;
//       const pictureUrl = await singlePublicFileUpload(req.file);
//       const product = await Listing.create({
//         productName,
//         description,
//         price,
//         pictureUrl,
//       });
  
//       return res.json({
//         product,
//       });
//     })
// );






module.exports = productRouter;