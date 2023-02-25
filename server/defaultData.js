const product = require("./model/productSchema");
const products = require("./constants/data.js")

const insertData = async () => {
  try {
    await product.insertMany(products);
    console.log("Data inserted");
  } catch (error) {
    console.log("Error", error);
  }
}
exports.insertData = insertData;