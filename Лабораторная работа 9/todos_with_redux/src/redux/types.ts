export interface ITask{
    name: string,
    isDone: boolean,
    id: number
}

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export interface IAddAction{
    type: typeof ADD_TODO,
    name: string
}

export interface IToggleAction{
    type: typeof TOGGLE_TODO,
    id: number
}

export interface IEditAction{
    type: typeof EDIT_TODO,
    updateName: string,
    id: number
}

export interface IDeleteAction{
    type: typeof DELETE_TODO,
    id: number
}

export type TypesOfActions = IAddAction | IToggleAction | IEditAction | IDeleteAction;

export interface IButtonProps{
    title: string,
    func: (() => void),
    classname?: string
}


export interface ITaskProps{
    name: string,
    isDone: boolean,
    func1: () => void,
    classname?: string,
    func2: () => void,
}
