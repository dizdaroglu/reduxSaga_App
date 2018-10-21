

import { DECREMENT, INCREMENT } from '../action/actionTypes';

//reducerslar state'i değiştiren fonksiyonlardır
const counterReducer = (times = 0, action) => {
    switch (action.type) {
        case DECREMENT:
            return times - action.step;
        case INCREMENT:
            return times + action.step;
        default:
            return times;
    }
}

export default counterReducer;