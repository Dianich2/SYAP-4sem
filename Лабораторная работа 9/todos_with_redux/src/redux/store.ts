import {createStore} from 'redux'
import { ITask } from './types'
import TodoReducer from './reducer'

export const initialState:{
    tasks: Array<ITask>,
    curId: number
} = {tasks:[], curId:0}
export const store = createStore(TodoReducer, initialState)