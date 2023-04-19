import axios from 'axios'
import { useDispatch } from 'react-redux'
const URL = 'http://localhost:8000/product'
import * as actionTypes from '../constants/productConstants'

export const getproducts =async (dispatch) => {
    const dispatch = useDispatch()

    try {
        const {data} = await axios.get(`${URL}/getproduct`)
        console.log(data)
        dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data})

    }
    catch (error) {
        console.log(error)
        dispatch({type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message})
    }
}
       