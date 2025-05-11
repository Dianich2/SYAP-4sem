import { configureStore } from "@reduxjs/toolkit"
import PReducer from '../features/posts/postsSlice'
export const store = configureStore({
    reducer:{
        posts: PReducer
    }
})

export default store;