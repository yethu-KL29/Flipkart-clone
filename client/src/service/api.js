import axios from 'axios';

const URL = "http://localhost:8000"
export const authSignup = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data)
    } catch (error) {
        console.log("error on signup")

    }

}

export const authLogin = async (data,seterror) => {
    try {
        return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log("error on login")
        seterror(true)

    }

}