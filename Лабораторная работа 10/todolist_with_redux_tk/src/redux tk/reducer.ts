import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "./types";
export const initialState = {
    tasks: [] as Array<ITask>,
    curId: 0 as number
}

const todoSlicer = createSlice({
        name:'todoSlicer',
        initialState,
        reducers:{
            ADD_TODO: (state, action:PayloadAction<string>) =>{
                state.tasks.push({name:action.payload, isDone:false, id:state.curId});
                state.curId += 1;
            },
            TOGGLE_TODO: (state, action:PayloadAction<number>) =>{
                state.tasks = state.tasks.map((t) => t.id === action.payload ? {...t, isDone: !t.isDone}:t)
            },
            EDIT_TODO: (state, action:PayloadAction<{id:number, updatename:string}>) =>{
                state.tasks = state.tasks.map((t) => t.id === action.payload.id ? {...t, name:action.payload.updatename}:t)
            },
            DELETE_TODO:(state, action:PayloadAction<number>) =>{
                state.tasks = state.tasks.filter((t) => t.id !== action.payload)
            },
        }
    }
);

export const {ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO} = todoSlicer.actions

export default todoSlicer.reducer;