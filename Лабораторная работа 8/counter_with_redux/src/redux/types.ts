export const INCREMENT = 'INCREMENT';
export const RESET = 'RESET';
export const DECREMENT = 'DECREMENT';

export interface IIncrementAction{
    type: typeof INCREMENT;
    counter: number;
}

export interface IDecrementAction{
    type: typeof DECREMENT;
    counter: number;
}

export interface IResetAction{
    type: typeof RESET;
}

export type TypesOfActions = IIncrementAction | IResetAction | IDecrementAction;

export interface CurrentCounterState{
    count:number;
}

export interface IButtonProps{
        title: string,
        func: () => void,
        classname?: string
}