import axios from 'axios';
import { URL_SERVER } from '../dataConfig';

export const getPostedStore = async (type) => {
    if(type === 'posted'){
        return await axios.get(`${URL_SERVER}/post/getPosted`,)
    }
    else if(type === 'deleted'){
        return await axios.get(`${URL_SERVER}/post/getdeletedpost`,)

    }
}
export const createPost = async (data,token) => {
    return await axios.post(`${URL_SERVER}/post/`,data,{
        withCredentials: true,
        
        headers: {
            token: `Bearer ${token}`,
        }
    })
}

export const getPostedById = async (id) => {
    return await axios.get(`${URL_SERVER}/post/${id}`)
}

export const deletePost = async (id) => {
    return await axios.delete(`${URL_SERVER}/post/${id}`)
}

export const editPost = async (id) => {
    return await axios.put(`${URL_SERVER}/post/${id}`)
}

export const restorePost = async (id) => {
    console.log(id);
    return await axios.post(`${URL_SERVER}/post/${id}`)
}

export const destroyPost = async (id) => {
    return await axios.delete(`${URL_SERVER}/post/destroy/${id}`)
}
