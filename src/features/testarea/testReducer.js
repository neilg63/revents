import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";
import { createReducer } from '../../app/common/util/reducerUtil'


const initialState = {
    data: 6
}

export const incementCounter = (state, payload) => {
    return { ...state, data: state.data + 1}
}

export const decementCounter = (state, payload) => {
    return { ...state, data: state.data - 1};
}

/* const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {...state, data: state.data + 1};
        case DECREMENT_COUNTER:
            return {...state, data: state.data - 1};
        default:
            return state;
    }
} */

export default createReducer(initialState, {
   [INCREMENT_COUNTER]: incementCounter,
   [DECREMENT_COUNTER]: decementCounter 
}) 