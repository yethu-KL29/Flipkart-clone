const express = require('express');
const productRouter = express.Router();
const { insertData } = require('../controller/productController');

productRouter.post('/insert',insertData);




module.exports = productRouter;