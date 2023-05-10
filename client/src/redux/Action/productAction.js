import axios from 'axios'
import * as actionTypes from '../constants/productConstants'

const URL = 'http://localhost:8000/product'

export const getProducts = () => async (dispatch) =>  {

    try {
        const {data} = await axios.get(`${URL}/getproduct`)
        
        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data})

    }
    catch (error) {
        console.log(error)
        dispatch({type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message})
    }
}
       