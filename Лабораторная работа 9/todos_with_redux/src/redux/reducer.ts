import { initialState } from "./store";
import { ADD_TODO, TypesOfActions, TOGGLE_TODO, EDIT_TODO, DELETE_TODO } from "./types";

const TodoReducer = (state = initialState, action:TypesOfActions) =>{
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                tasks:[
                    ...state.tasks, {name: action.name, isDone: false, id: state.curId}
                ],
                curId: state.curId + 1
            }
        case TOGGLE_TODO:
            return {...state, tasks:state.tasks.map((t) => t.id === action.id ? {...t, isDone: !t.isDone}: t)}
        case EDIT_TODO:
            return {...state, tasks:state.tasks.map((t) => t.id === action.id ? {...t, name: action.updateName}: t)}
        case DELETE_TODO:
            return {...state, tasks:state.tasks.filter((t) => t.id !== action.id)}
        default:
            return state;
    }
}

export default TodoReducer;