

import { INCREMENT, DECREMENT } from '../action/actionTypes';

//action increment

export const increaseAction = (step) => {
    return {
        type: INCREMENT,
        step: step
    }
}
export const decreaseAction = (step) => {
    return {
        type: DECREMENT,
        step: step
    }
}
