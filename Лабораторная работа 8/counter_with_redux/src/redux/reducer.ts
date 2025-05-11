import { CurrentCounterState, TypesOfActions, INCREMENT, DECREMENT, RESET } from './types';
import { initialState } from './store';

const counterReducer = (state = initialState, action: TypesOfActions): CurrentCounterState => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.counter,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - action.counter,
            };
        case RESET:
            return {
                ...state,
                count: 0,
            };
        default:
            return state;
    }
};

export default counterReducer;