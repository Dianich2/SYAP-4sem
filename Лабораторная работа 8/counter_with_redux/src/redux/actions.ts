import { IIncrementAction, IDecrementAction, IResetAction, INCREMENT, DECREMENT, RESET } from './types';

export const incrementAction = (counter: number): IIncrementAction => ({
    type: INCREMENT,
    counter,
});

export const decrementAction = (counter: number): IDecrementAction => ({
    type: DECREMENT,
    counter,
});

export const resetAction = (): IResetAction => ({
    type: RESET,
});