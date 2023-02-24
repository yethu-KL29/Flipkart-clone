import { products } from "../constants/data";
import {product} from "../model/productSchema";


const defaultData = async() => {
  try{
    products.forEach((i) => {
        const newProduct = new product(i);
        newProduct.save();
    })
  }catch(err){
    console.log(err);
  }
}

module.exports = defaultData;