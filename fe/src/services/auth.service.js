import axios from 'axios';
import { URL_SERVER } from '../dataConfig';



export const register = async (
    firstName,
    lastName,
    email,
    password
) => {
    return await axios.post(
        `${URL_SERVER}/register`,
        {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName
        }
    )
}

export const login = async (
    email,
    password
) => {
    return await axios.post(
        `${URL_SERVER}/login`,
        {
            email: email,
            password: password
        }
    )
}