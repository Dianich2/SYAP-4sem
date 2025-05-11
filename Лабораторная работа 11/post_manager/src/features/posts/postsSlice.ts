import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPosts, updatePosts, deletePosts, createPosts } from "./postsAPI";
import { TNewPost, TPost } from "../../app/types";


export const initialState = {
    posts: [] as Array<TPost>,
    curId: 0 as number
}
export const fetchPostsAsync = createAsyncThunk<TPost[], void>('posts/fetchPosts', async () =>{
    const response = await fetchPosts()
    return response
})

export const updatePostsAsync = createAsyncThunk<TPost, TPost>('posts/updatePosts', async (P:TPost) =>{
    const response = await updatePosts(P)
    return response
})

export const deletePostsAsync = createAsyncThunk<number, number>('posts/deletePosts', async (id:number) =>{
    await deletePosts(id)
    return id
})

export const createPostsAsync = createAsyncThunk<TPost, TNewPost>('posts/createPosts', async (newP: TNewPost) =>{
    const response = await createPosts(newP)
    return response
})

export const PSlicer = createSlice({
    name:'posts',
    initialState,
    reducers:{
        removePost: (state, action) => {
            state.posts = state.posts.filter(p => p.id !== action.payload);
        },
        editPost: (state, action) => {
            const i = state.posts.findIndex(p => p.id === action.payload.id)
            if(i !== -1){
                state.posts[i] = action.payload
            }
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchPostsAsync.fulfilled, (state, action) =>{
            state.posts = action.payload
        })
        .addCase(createPostsAsync.fulfilled, (state, action) =>{
            action.payload.id += state.curId
            state.posts.push(action.payload)
            state.curId++
        })
        .addCase(deletePostsAsync.fulfilled, (state, action) =>{
            state.posts = state.posts.filter(p => p.id !== action.payload)
        })
        .addCase(updatePostsAsync.fulfilled, (state, action) =>{
            const i = state.posts.findIndex(p => p.id === action.payload.id)
            if(i !== -1){
                state.posts[i] = action.payload
            }
        })
    },
})

export const { removePost, editPost} = PSlicer.actions;
export default PSlicer.reducer