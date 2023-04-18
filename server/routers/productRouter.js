const express = require('express');
const productRouter = express.Router();
const { insertData } = require('../controller/productController');
const { getProduct } = require('../controller/productController');

productRouter.post('/insert',insertData);
productRouter.get('/getproduct',getProduct);




module.exports = productRouter;