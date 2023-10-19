import axios from 'axios';
import { URL_SERVER } from '../dataConfig';
import Cookies from 'js-cookie';

const token = Cookies.get('accessToken');

export const getPostedStore = async (type,token1) => {

    
    if(type === 'posted'){
        return await axios.get(`${URL_SERVER}/post/getPosted`,{ 
            withCredentials: true,
    
            headers: {
                token: `Bearer ${token1}`,
            }
        })
    }

    else if(type === 'deleted'){
        return await axios.get(`${URL_SERVER}/post/getdeletedpost`,{  

            headers: {
                token: `Bearer ${token}`,
            }
        })

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
    return await axios.get(`${URL_SERVER}/post/${id}`,{ 
        withCredentials: true,

        headers: {
            token: `Bearer ${token}`,
        }
    })
}

export const deletePost = async (id) => {
    return await axios.delete(`${URL_SERVER}/post/${id}`,{ 
        withCredentials: true,

        headers: {
            token: `Bearer ${token}`,
        }
    })
}

export const editPost = async (id) => {
    return await axios.put(`${URL_SERVER}/post/${id}`,{ 
        withCredentials: true,

        headers: {
            token: `Bearer ${token}`,
        }
    })
}

export const restorePost = async (id) => {
    return await axios.post(`${URL_SERVER}/post/${id}`,null,{ 
        withCredentials: true,

        headers: {
            token: `Bearer ${token}`,
        }
    })
}

export const destroyPost = async (id) => {
    return await axios.delete(`${URL_SERVER}/post/destroy/${id}`,{ 
        withCredentials: true,

        headers: {
            token: `Bearer ${token}`,
        }
    })
}

export const getDetailPost = async (slug) => {
    return await axios.get(`${URL_SERVER}/post/${slug}`)
}

export const getPosterInfo = async (id) => {
    return await axios.get(`${URL_SERVER}/user/${id}`)
}

export const getAllPost = async () => {
    return await axios.get(`${URL_SERVER}/post/`)
}

export const getPostedByOwner = async (id) => {
    return await axios.get(`${URL_SERVER}/post/getpostedbyowner/${id}`)
}
export const searchPost = async (title,currentPage) => {
    return await axios.get(`${URL_SERVER}/post/search/${title}/${currentPage}`,{ 
        withCredentials: true,

        headers: {
            token: `Bearer ${token}`,
        }
    })
}

export const getAllPost_pagging = async (currentPage) => {
    return await axios.get(`${URL_SERVER}/post/getAll/${currentPage}`,{ 
        withCredentials: true,

        headers: {
            token: `Bearer ${token}`,
        }
    })
}