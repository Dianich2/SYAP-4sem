import { ADD_TODO, IAddAction, TOGGLE_TODO, IToggleAction, IEditAction, EDIT_TODO, DELETE_TODO, IDeleteAction } from "./types";

export const addAction = (name:string):IAddAction => ({
    type: ADD_TODO,
    name, 
});

export const toggleAction = (id:number):IToggleAction => ({
    type: TOGGLE_TODO,
    id
});

export const editAction = (updateName:string, id:number):IEditAction => ({
    type: EDIT_TODO,
    updateName,
    id
});
export const deleteAction = (id:number):IDeleteAction => ({
    type: DELETE_TODO,
    id
});
