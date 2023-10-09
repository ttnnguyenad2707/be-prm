import axios from 'axios';
import { URL_SERVER } from '../dataConfig';



export const register = async (
    firstName,
    lastName,
    email,
    password
) => {
    return await axios.post(
        `${URL_SERVER}/auth/register`,
        {
            email: email,
            password: password,
            firstname: firstName,
            lastname: lastName
        }
    )
}

export const login = async (
    email,
    password
) => {
    return await axios.post(
        `${URL_SERVER}/auth/login`,
        {
            email: email,
            password: password
        }, {
        withCredentials: true
    }
    )
}

export const checkUser = async (token) => {
    return await axios.post(`${URL_SERVER}/auth/check-user`, null, {
        withCredentials: true,
        headers: {
            token: `Bearer ${token}`,
        }
    })
}