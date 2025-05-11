import { TNewPost, TPost } from "../../app/types";
import axios from "axios";

export const fetchPosts = async(): Promise<TPost[]> =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
}

export const createPosts = async(newP:TNewPost): Promise<TPost> =>{
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newP)
    return response.data
}

export const updatePosts = async(P:TPost): Promise<TPost> =>{
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${P.id}`, P)
    return response.data
}

export const deletePosts = async(id:number): Promise<void> =>{
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
}