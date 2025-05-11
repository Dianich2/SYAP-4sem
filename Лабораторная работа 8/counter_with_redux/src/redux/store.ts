import {createStore} from 'redux'
import counterReducer from './reducer'
import { CurrentCounterState } from './types';
export const initialState: CurrentCounterState = {count: 0}
export const store = createStore(counterReducer, initialState);

export default store;