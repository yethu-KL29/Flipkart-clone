const Product = require("../model/productSchema");

const insertData = async (req,res,next) => {
    let product;
    const{ id, url, detailUrl, title, price, quantity, description, discount, tagline } = req.body;
      
    try {
         product = new Product({
                
                id,
                url,
                detailUrl,
                title,
                price,
                quantity,
                description,
                discount,
                tagline
            });
        await product.save();
        res.status(201).json({ product });
    } catch (error) {
        console.log("Error", error);
    }

    }


 const getProduct = async (req, res, next) => {
    try {
        const product = await Product.find();


        res.status(200).json({ product });
    } catch (error) {
        console.log("Error", error);
    }
};
    exports.insertData = insertData;
    exports.getProduct = getProduct;