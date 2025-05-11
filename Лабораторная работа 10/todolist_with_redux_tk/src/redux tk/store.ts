import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer"

const store = configureStore({
    reducer:{
        todolist: todoReducer,
    },
})

export default store;